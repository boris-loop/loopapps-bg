import { ProductCard } from "./ProductCard";

const logo = "/assets/room-for-mri-mark.webp";

const roomForMri = {
  name: "Room for MRI",
  tagline: "Compare MRI scanner dimensions before you call.",
  description:
    "Room for MRI is a U.S. directory of magnetic resonance imaging (MRI) equipment. Find locations and compare scanner openings, designs, and table weight limits using information published by providers.",
  benefits: [
    {
      title: "Scanner filters",
      description:
        "Narrow results by location, scanner design, opening size, and table weight limit.",
    },
    {
      title: "Side-by-side comparison",
      description: "Compare up to three individual scanner options.",
    },
    {
      title: "Provider sources",
      description:
        "See where each specification came from and when it was checked.",
    },
  ],
  url: "https://roomformri.com/",
  buttonMark: logo,
};

export function RoomForMriCard() {
  return (
    <ProductCard
      id="room-for-mri-title"
      product={roomForMri}
      identity={
        <h3 className="m-0 flex items-center gap-3 text-2xl font-extrabold text-[#213e39]">
          <img
            className="size-12 rounded-control"
            src={logo}
            alt=""
            width="384"
            height="384"
          />
          Room for MRI
        </h3>
      }
      visual={
        <div className="grid place-content-center justify-items-center gap-5 bg-[#faf3e7] px-8 py-12 text-center text-[#213e39] @max-[53.75rem]/product:min-h-64">
          <img
            className="size-[clamp(7rem,14vw,11rem)] rounded-full"
            src={logo}
            alt=""
            width="384"
            height="384"
          />
          <p className="m-0 max-w-[17ch] text-[clamp(1.65rem,3.5vw,3rem)] font-bold leading-tight">
            Scanner openings. Table limits.
          </p>
        </div>
      }
    />
  );
}
