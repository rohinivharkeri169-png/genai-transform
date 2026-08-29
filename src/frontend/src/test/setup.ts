import "@testing-library/jest-dom/vitest";
import { configure } from "@testing-library/react";

// Generated components use `data-ocid` rather than `data-testid` for their
// stable selectors, so teach Testing Library to treat it as the test id.
configure({ testIdAttribute: "data-ocid" });

// Radix UI primitives (Dialog, etc.) rely on ResizeObserver and matchMedia in
// some environments. jsdom does not provide them, so stub them for tests.
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (typeof globalThis.ResizeObserver === "undefined") {
  globalThis.ResizeObserver =
    ResizeObserverStub as unknown as typeof ResizeObserver;
}

if (typeof window.matchMedia === "undefined") {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
}

// Radix Dialog uses PointerEvent; jsdom lacks it in some versions.
if (typeof window.PointerEvent === "undefined") {
  class PointerEventStub extends MouseEvent {}
  window.PointerEvent =
    PointerEventStub as unknown as typeof window.PointerEvent;
}
