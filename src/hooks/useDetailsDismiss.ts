import { useRef, type FocusEvent, type KeyboardEvent } from "react";

// Keep <details> native while sharing dismissal and keyboard focus behaviour.
export function useDetailsDismiss() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);

  function close() {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  }

  function onBlur(event: FocusEvent<HTMLDetailsElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      close();
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLDetailsElement>) {
    if (event.key === "Escape" && event.currentTarget.open) {
      // Close only the innermost menu when disclosures are nested.
      event.stopPropagation();
      close();
      summaryRef.current?.focus();
    }
  }

  return { detailsRef, summaryRef, close, onBlur, onKeyDown };
}
