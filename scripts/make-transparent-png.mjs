import { readFileSync, writeFileSync } from "node:fs";
import { deflateSync, inflateSync } from "node:zlib";

const [, , inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
  throw new Error("Usage: node scripts/make-transparent-png.mjs input.png output.png");
}

const png = readFileSync(inputPath);
const signature = png.subarray(0, 8);
const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

if (!signature.equals(pngSignature)) {
  throw new Error("Input is not a PNG file");
}

let offset = 8;
let width = 0;
let height = 0;
let colorType = 0;
let bitDepth = 0;
const idat = [];

while (offset < png.length) {
  const length = png.readUInt32BE(offset);
  const type = png.subarray(offset + 4, offset + 8).toString("ascii");
  const data = png.subarray(offset + 8, offset + 8 + length);

  if (type === "IHDR") {
    width = data.readUInt32BE(0);
    height = data.readUInt32BE(4);
    bitDepth = data[8];
    colorType = data[9];
  }

  if (type === "IDAT") {
    idat.push(data);
  }

  offset += length + 12;
}

if (bitDepth !== 8 || ![2, 6].includes(colorType)) {
  throw new Error(`Unsupported PNG format: bitDepth=${bitDepth}, colorType=${colorType}`);
}

const sourceChannels = colorType === 6 ? 4 : 3;
const sourceStride = width * sourceChannels;
const raw = inflateSync(Buffer.concat(idat));
const pixels = Buffer.alloc(width * height * 4);
const previous = Buffer.alloc(sourceStride);
const current = Buffer.alloc(sourceStride);

const paeth = (a, b, c) => {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
};

let readOffset = 0;

for (let y = 0; y < height; y += 1) {
  const filter = raw[readOffset];
  readOffset += 1;
  raw.copy(current, 0, readOffset, readOffset + sourceStride);
  readOffset += sourceStride;

  for (let x = 0; x < sourceStride; x += 1) {
    const left = x >= sourceChannels ? current[x - sourceChannels] : 0;
    const up = previous[x];
    const upLeft = x >= sourceChannels ? previous[x - sourceChannels] : 0;

    if (filter === 1) current[x] = (current[x] + left) & 255;
    if (filter === 2) current[x] = (current[x] + up) & 255;
    if (filter === 3) current[x] = (current[x] + Math.floor((left + up) / 2)) & 255;
    if (filter === 4) current[x] = (current[x] + paeth(left, up, upLeft)) & 255;
  }

  for (let x = 0; x < width; x += 1) {
    const source = x * sourceChannels;
    const target = (y * width + x) * 4;
    const r = current[source];
    const g = current[source + 1];
    const b = current[source + 2];
    const sourceAlpha = sourceChannels === 4 ? current[source + 3] : 255;
    const whiteness = Math.min(r, g, b);
    const alpha = whiteness > 242 ? 0 : sourceAlpha;

    pixels[target] = r;
    pixels[target + 1] = g;
    pixels[target + 2] = b;
    pixels[target + 3] = alpha;
  }

  current.copy(previous);
}

const outScanline = width * 4 + 1;
const outRaw = Buffer.alloc(outScanline * height);

for (let y = 0; y < height; y += 1) {
  const rowOffset = y * outScanline;
  outRaw[rowOffset] = 0;
  pixels.copy(outRaw, rowOffset + 1, y * width * 4, (y + 1) * width * 4);
}

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  return c >>> 0;
});

const crc32 = (buffer) => {
  let c = 0xffffffff;
  for (const byte of buffer) {
    c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
};

const chunk = (type, data) => {
  const typeBuffer = Buffer.from(type);
  const body = Buffer.concat([typeBuffer, data]);
  const result = Buffer.alloc(data.length + 12);
  result.writeUInt32BE(data.length, 0);
  typeBuffer.copy(result, 4);
  data.copy(result, 8);
  result.writeUInt32BE(crc32(body), data.length + 8);
  return result;
};

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(width, 0);
ihdr.writeUInt32BE(height, 4);
ihdr[8] = 8;
ihdr[9] = 6;
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

writeFileSync(
  outputPath,
  Buffer.concat([
    pngSignature,
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(outRaw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]),
);
