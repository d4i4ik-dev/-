import { useEffect, useState, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
import { Link, useLocation, useNavigate, useRouter } from "@tanstack/react-router";
import { CONTACTS } from "@/lib/contacts";

type Path =
  | "/"
  | "/sites"
  | "/bots-ai"
  | "/mini-apps"
  | "/cases"
  | "/articles"
  | "/contacts";

type NavLink = { to: Path; label: string; exact?: boolean };

const NAV_LINKS: NavLink[] = [
  { to: "/", label: "Главная", exact: true },
  { to: "/sites", label: "Сайты" },
  { to: "/bots-ai", label: "Боты и AI" },
  { to: "/mini-apps", label: "Мини-приложения" },
  { to: "/cases", label: "Кейсы" },
  { to: "/articles", label: "Статьи" },
];

const PRELOAD_ROUTES: Path[] = [
  "/",
  "/sites",
  "/bots-ai",
  "/mini-apps",
  "/cases",
  "/articles",
  "/contacts",
];

interface SiteLayoutProps {
  children: ReactNode;
  /** Accent tint for the whole page: blue (default) / sage / terra / lime. */
  accent?: "blue" | "sage" | "terra" | "lime";
}

function scrollPageToTop() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

function Logo({ onHomeClick }: { onHomeClick: (e: ReactMouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <a href="/" className="nav-logo" onClick={onHomeClick} aria-label="Дарья Попельнюк — на главную">
      <span className="nav-logo-mark">Д</span>
      <span className="nav-logo-txt">
        <span className="nav-logo-name">Дарья&nbsp;Попельнюк</span>
        <span className="nav-logo-role">цифровая мастерская</span>
      </span>
    </a>
  );
}

export function SiteLayout({ children, accent = "blue" }: SiteLayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    PRELOAD_ROUTES.forEach((to) => {
      void router.preloadRoute({ to });
    });
  }, [router]);

  useEffect(() => {
    setMobOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobOpen]);

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

  // Real <a href="/"> for Главная so modifier-clicks open a new tab, but plain
  // clicks use client-side navigation and reliably reset scroll to top.
  const handleHomeNavClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
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
    requestAnimationFrame(forceScrollTop);
  };

  return (
    <div className={`acc-${accent}`}>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-in">
          <Logo onHomeClick={handleHomeNavClick} />
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
                    preload="intent"
                    activeProps={{ className: "active" }}
                    activeOptions={l.exact ? { exact: true } : undefined}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link to="/contacts" preload="intent" className="nav-cta">
                Обсудить проект
              </Link>
            </li>
          </ul>
          <button
            className={`burger${mobOpen ? " open" : ""}`}
            aria-label="Меню"
            aria-expanded={mobOpen}
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
            <Link key={l.to} to={l.to} preload="intent" activeProps={{ className: "active" }}>
              {l.label}
            </Link>
          ),
        )}
        <Link to="/contacts" preload="intent" className="btn btn-primary btn-lg">
          Обсудить проект
        </Link>
      </div>

      {children}

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Logo onHomeClick={handleHomeNavClick} />
              <p>
                Личная цифровая мастерская. Вижу задачу бизнеса — и собираю под неё рабочий
                инструмент: сайт, бот, AI-ассистента или мини-приложение.
              </p>
            </div>
            <div className="footer-col">
              <h5>Что делаю</h5>
              <Link to="/sites">Сайты</Link>
              <Link to="/bots-ai">Боты и AI</Link>
              <Link to="/mini-apps">Мини-приложения</Link>
              <Link to="/cases">Кейсы</Link>
              <Link to="/articles">Статьи</Link>
            </div>
            <div className="footer-col">
              <h5>Связаться</h5>
              <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
              <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={CONTACTS.max} target="_blank" rel="noopener noreferrer">MAX</a>
              <Link to="/contacts">Все контакты</Link>
            </div>
          </div>
          <div className="footer-legal">
            <span>© 2026 Дарья Попельнюк</span>
            <span className="sep">·</span>
            ИП Попельнюк Дарья Сергеевна, ОГРНИП 325700000038370, ИНН 701742461419
            <span className="sep">·</span>
            <Link to="/oferta">Оферта</Link>
            <span className="sep">·</span>
            <Link to="/privacy">Конфиденциальность</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
