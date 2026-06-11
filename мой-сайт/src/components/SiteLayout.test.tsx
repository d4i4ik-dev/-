import { render, act, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";

let currentPath = "/sites";
const setPath = (p: string) => {
  currentPath = p;
};

const navigateMock = vi.fn().mockResolvedValue(undefined);

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, className, onClick, ...rest }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
    <a className={className} onClick={onClick} {...rest}>
      {children}
    </a>
  ),
  useLocation: () => ({ pathname: currentPath }),
  useNavigate: () => navigateMock,
}));

import { SiteLayout } from "@/components/SiteLayout";

beforeEach(() => {
  vi.stubGlobal("scrollTo", vi.fn());
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
    cb(0);
    return 0;
  });
  Object.defineProperty(window, "scrollY", { value: 500, writable: true, configurable: true });
  Object.defineProperty(document.documentElement, "scrollTop", { value: 500, writable: true, configurable: true });
  Object.defineProperty(document.body, "scrollTop", { value: 500, writable: true, configurable: true });
  setPath("/sites");
});

describe("SiteLayout", () => {
  it("forces scroll reset when the top nav 'Главная' link is clicked", () => {
    render(
      <SiteLayout solidNav>
        <div>content</div>
      </SiteLayout>,
    );

    const navHomeLink = screen.getAllByText("Главная")[0];

    act(() => {
      fireEvent.click(navHomeLink);
    });

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "auto" });
    expect(document.documentElement.scrollTop).toBe(0);
    expect(document.body.scrollTop).toBe(0);
  });

  it("keeps the home nav active state on the homepage", () => {
    setPath("/");
    render(
      <SiteLayout solidNav>
        <div>content</div>
      </SiteLayout>,
    );

    expect(screen.getAllByText("Главная")[0]).toHaveClass("active");
  });
});

