import assert from "node:assert/strict";
import test from "node:test";
import { scrollToInitialHash } from "../src/scrollToInitialHash.ts";

function createPage(hash, targetExists = true) {
  const frames = new Map();
  const targets = [];
  let nextFrame = 0;
  let scrolls = 0;
  const view = {
    location: { hash },
    requestAnimationFrame(callback) {
      frames.set(++nextFrame, callback);
      return nextFrame;
    },
    cancelAnimationFrame(frame) {
      frames.delete(frame);
    },
  };
  const element = {
    ownerDocument: {
      defaultView: view,
      getElementById(id) {
        targets.push(id);
        return targetExists
          ? {
              scrollIntoView() {
                scrolls++;
              },
            }
          : null;
      },
    },
  };

  return {
    element,
    frames,
    targets,
    get scrolls() {
      return scrolls;
    },
    flush() {
      const callbacks = [...frames.values()];
      frames.clear();
      callbacks.forEach((callback) => callback());
    },
  };
}

test("direct and encoded fragment links scroll after the DOM is attached", () => {
  for (const hash of ["#copyproof-title", "#copyproof%2Dtitle"]) {
    const page = createPage(hash);
    const cleanup = scrollToInitialHash(page.element);
    assert.equal(page.scrolls, 0);
    page.flush();
    assert.deepEqual(page.targets, ["copyproof-title"]);
    assert.equal(page.scrolls, 1);
    cleanup();
  }
});

test("empty or malformed fragments do not schedule work", () => {
  for (const hash of ["", "#", "#%E0%A4%A"]) {
    const page = createPage(hash);
    assert.equal(scrollToInitialHash(page.element), undefined);
    assert.equal(page.frames.size, 0);
  }
});

test("unknown fragments are harmless", () => {
  const page = createPage("#unknown", false);
  scrollToInitialHash(page.element);
  assert.doesNotThrow(() => page.flush());
  assert.equal(page.scrolls, 0);
});

test("detaching the DOM cancels pending scrolling", () => {
  const page = createPage("#contact");
  const cleanup = scrollToInitialHash(page.element);
  cleanup();
  page.flush();
  assert.equal(page.scrolls, 0);
});

test("Strict Mode attach, cleanup and reattach only scrolls once", () => {
  const page = createPage("#contact");
  const cleanup = scrollToInitialHash(page.element);
  cleanup();
  const finalCleanup = scrollToInitialHash(page.element);
  page.flush();
  assert.equal(page.scrolls, 1);
  finalCleanup();
});

test("a detached ref or document without a window is harmless", () => {
  assert.equal(scrollToInitialHash(null), undefined);
  assert.equal(
    scrollToInitialHash({ ownerDocument: { defaultView: null } }),
    undefined,
  );
});
