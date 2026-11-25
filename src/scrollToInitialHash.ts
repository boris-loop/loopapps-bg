/** Restore direct fragment links once the page DOM is attached, including client-only development. */
export function scrollToInitialHash(element: HTMLElement | null) {
  const view = element?.ownerDocument.defaultView;

  if (!element || !view) {
    return;
  }

  let targetId: string;

  try {
    targetId = decodeURIComponent(view.location.hash.slice(1));
  } catch {
    // A malformed URL fragment should not prevent the page from mounting.
    return;
  }

  if (!targetId) {
    return;
  }

  const frame = view.requestAnimationFrame(() => {
    element.ownerDocument.getElementById(targetId)?.scrollIntoView();
  });

  return () => view.cancelAnimationFrame(frame);
}
