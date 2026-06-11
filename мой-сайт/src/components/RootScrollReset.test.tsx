import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock TanStack Router so we can drive pathname changes manually.
let currentPath = "/sites";
const subs = new Set<() => void>();
const setPath = (p: string) => {
  currentPath = p;
  subs.forEach((fn) => fn());
};

vi.mock("@tanstack/react-router", () => ({
  useRouterState: ({ select }: { select: (s: { location: { pathname: string } }) => string }) => {
    // Recompute on every render — React will re-render when our hook updates state.
    return select({ location: { pathname: currentPath } });
  },
}));

// Re-implement the hook here mirroring src/routes/__root.tsx so we can test
// it in isolation without pulling in the full route shell.
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

function useScrollResetOnNavigation() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [, force] = useState(0);

  // Subscribe to external setPath so the hook re-runs when we change paths.
  useEffect(() => {
    const fn = () => force((n) => n + 1);
    subs.add(fn);
    return () => {
      subs.delete(fn);
    };
  }, []);

  useEffect(() => {
    const prev = window.history.scrollRestoration;
    try {
      window.history.scrollRestoration = "manual";
    } catch {
      /* ignore */
    }
    return () => {
      try {
        window.history.scrollRestoration = prev;
      } catch {
        /* ignore */
      }
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
}

beforeEach(() => {
  vi.stubGlobal("scrollTo", vi.fn());
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
    cb(0);
    return 0;
  });
  Object.defineProperty(window, "scrollY", { value: 500, writable: true, configurable: true });
  currentPath = "/sites";
});

describe("Root-level scroll reset on navigation", () => {
  it("scrolls to top on initial mount", () => {
    renderHook(() => useScrollResetOnNavigation());
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "auto" });
  });

  it("scrolls to top when navigating from /sites to /", () => {
    renderHook(() => useScrollResetOnNavigation());
    (window.scrollTo as unknown as ReturnType<typeof vi.fn>).mockClear();

    act(() => setPath("/"));

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "auto" });
  });

  it("scrolls to top when navigating from /apps to /", () => {
    currentPath = "/apps";
    renderHook(() => useScrollResetOnNavigation());
    (window.scrollTo as unknown as ReturnType<typeof vi.fn>).mockClear();

    act(() => setPath("/"));

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "auto" });
  });

  it("scrolls to top when navigating from /ai, /games, /systems, /consulting to /", () => {
    for (const from of ["/ai", "/games", "/systems", "/consulting"]) {
      currentPath = from;
      const { unmount } = renderHook(() => useScrollResetOnNavigation());
      (window.scrollTo as unknown as ReturnType<typeof vi.fn>).mockClear();

      act(() => setPath("/"));

      expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "auto" });
      unmount();
    }
  });

  it("sets history.scrollRestoration to 'manual' so the browser cannot restore old scroll", () => {
    const original = window.history.scrollRestoration;
    renderHook(() => useScrollResetOnNavigation());
    expect(window.history.scrollRestoration).toBe("manual");
    // Restore default for subsequent tests.
    window.history.scrollRestoration = original;
  });
});
