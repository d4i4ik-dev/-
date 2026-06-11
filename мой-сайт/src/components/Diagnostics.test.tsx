import { render, screen, act, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { Diagnostics } from "@/components/Diagnostics";

// jsdom doesn't implement scrollTo or rAF timing the way the browser does.
// We stub them so we can assert the scroll behaviour deterministically.
beforeEach(() => {
  vi.stubGlobal("scrollTo", vi.fn());
  // Run rAF callbacks synchronously for predictable assertions.
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
    cb(0);
    return 0;
  });
  // Provide a baseline scrollY value.
  Object.defineProperty(window, "scrollY", { value: 0, writable: true, configurable: true });
});

describe("Diagnostics scroll behaviour", () => {
  it("does NOT scroll the window on initial mount (so opening / lands at hero)", () => {
    render(<Diagnostics />);
    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it("scrolls into view when the user picks a niche (step change 1 -> 2)", () => {
    render(<Diagnostics />);
    expect(window.scrollTo).not.toHaveBeenCalled();

    const firstNiche = screen.getAllByRole("button").find((b) =>
      b.className.includes("niche-btn"),
    );
    expect(firstNiche).toBeTruthy();

    act(() => {
      fireEvent.click(firstNiche!);
    });

    expect(window.scrollTo).toHaveBeenCalledTimes(1);
    const call = (window.scrollTo as unknown as ReturnType<typeof vi.fn>).mock.calls[0][0];
    expect(call).toMatchObject({ behavior: "smooth" });
    expect(typeof call.top).toBe("number");
  });

  it("scrolls again when the user picks a problem (step change 2 -> 3)", () => {
    render(<Diagnostics />);

    const firstNiche = screen.getAllByRole("button").find((b) =>
      b.className.includes("niche-btn"),
    )!;
    act(() => {
      fireEvent.click(firstNiche);
    });

    const firstProblem = screen.getAllByRole("button").find((b) =>
      b.className.includes("problem-btn"),
    );
    expect(firstProblem).toBeTruthy();

    act(() => {
      fireEvent.click(firstProblem!);
    });

    expect(window.scrollTo).toHaveBeenCalledTimes(2);
  });

  it("scrolls back when the user returns to the niche list", () => {
    render(<Diagnostics />);

    const firstNiche = screen.getAllByRole("button").find((b) =>
      b.className.includes("niche-btn"),
    )!;
    act(() => fireEvent.click(firstNiche));

    const back = screen.getByRole("button", { name: /Все ниши/i });
    act(() => fireEvent.click(back));

    expect(window.scrollTo).toHaveBeenCalledTimes(2);
  });
});
