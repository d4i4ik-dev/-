import { useEffect, useState, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
import { Link, useLocation, useNavigate, useRouter } from "@tanstack/react-router";
import { CONTACTS } from "@/lib/contacts";

type NavLink = {
  to: "/" | "/sites" | "/apps" | "/ai" | "/games" | "/systems" | "/consulting";
  label: string;
  exact?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { to: "/", label: "Главная", exact: true },
  { to: "/sites", label: "Сайты" },
  { to: "/apps", label: "Приложения" },
  { to: "/ai", label: "AI-агенты" },
  { to: "/games", label: "Игры" },
  { to: "/systems", label: "Системы" },
  { to: "/consulting", label: "Консалтинг" },
];

const PRELOAD_ROUTES = [
  "/",
  "/sites",
  "/apps",
  "/ai",
  "/games",
  "/systems",
  "/consulting",
  "/contacts",
  "/oferta",
  "/privacy",
] as const;

interface SiteLayoutProps {
  children: ReactNode;
  /** When true, the nav uses solid background by default (subpages). On the index page it scrolls in. */
  solidNav?: boolean;
}

function scrollPageToTop() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

export function SiteLayout({ children, solidNav = true }: SiteLayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const router = useRouter();

  // Scroll listener (only matters when solidNav=false)
  useEffect(() => {
    if (solidNav) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solidNav]);

  // Preload primary routes right after layout mount so top-nav transitions feel instant.
  useEffect(() => {
    PRELOAD_ROUTES.forEach((to) => {
      void router.preloadRoute({ to });
    });
  }, [router]);

  // Close mobile menu on route change. Scroll-to-top is handled globally in
  // the root route via useScrollResetOnNavigation, so we don't duplicate it
  // here — that prevents any race between layout-level and root-level resets.
  useEffect(() => {
    setMobOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobOpen]);

  const navClass = solidNav ? "nav solid" : `nav${scrolled ? " scrolled" : ""}`;
  const forceScrollTop = () => {
    scrollPageToTop();
    if (typeof document !== "undefined") {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        scrollPageToTop();
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    }
  };
  // Single handler for ALL "Главная" links (top nav, mobile menu, logo, footer).
  // We use a real <a href="/"> so it looks/behaves like a normal link
  // (cmd+click opens new tab, etc.) but intercept the plain click and use
  // TanStack's client-side navigate — that keeps SPA speed AND lets us
  // reliably reset scroll to the top.
  const handleHomeNavClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    // Let modifier-clicks (cmd/ctrl/shift/middle click) fall through to the
    // browser so they open in a new tab as expected.
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    setMobOpen(false);
    if (location.pathname === "/") {
      forceScrollTop();
      return;
    }
    navigate({ to: "/" }).then(forceScrollTop, forceScrollTop);
    // Belt-and-braces: schedule one more reset on the next frame in case
    // the new page mounts something that tries to scroll itself.
    requestAnimationFrame(forceScrollTop);
  };

  return (
    <>
      <nav className={navClass}>
        <div className="container nav-in">
          <a href="/" className="nav-logo" onClick={handleHomeNavClick}>
            VI<span>BE</span>
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                {l.to === "/" ? (
                  <a
                    href="/"
                    className={location.pathname === "/" ? "active" : undefined}
                    onClick={handleHomeNavClick}
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to={l.to}
                    preload="render"
                    activeProps={{ className: "active" }}
                    activeOptions={l.exact ? { exact: true } : undefined}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link to="/contacts" preload="render" className="nav-cta">
                Написать
              </Link>
            </li>
          </ul>
          <button
            className={`burger${mobOpen ? " open" : ""}`}
            aria-label="Меню"
            onClick={() => setMobOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mob-menu${mobOpen ? " open" : ""}`}>
        {NAV_LINKS.map((l) =>
          l.to === "/" ? (
            <a
              key={l.to}
              href="/"
              className={location.pathname === "/" ? "active" : undefined}
              onClick={handleHomeNavClick}
            >
              {l.label}
            </a>
          ) : (
            <Link key={l.to} to={l.to} preload="render">
              {l.label}
            </Link>
          ),
        )}
        <Link to="/contacts" preload="render">Контакты</Link>
      </div>

      {children}

      <footer className="footer">
        <div className="container">
          <div className="footer-in">
            <div className="footer-left">
              © 2025 <a href="/" onClick={handleHomeNavClick}>VIBE</a> — Вайбкодинг для бизнеса
            </div>
            <div className="footer-links">
              <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
              <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href={CONTACTS.max} target="_blank" rel="noopener noreferrer">
                MAX
              </a>
            </div>
          </div>
          <div className="footer-legal">
            ИП Попельнюк Дарья Сергеевна, ОГРНИП 325700000038370, ИНН 701742461419
            <span className="footer-legal-sep">·</span>
            <Link to="/oferta" preload="render">Договор оферты</Link>
            <span className="footer-legal-sep">·</span>
            <Link to="/privacy" preload="render">Политика конфиденциальности</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
