import { useEffect, useRef } from "react";
import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function scrollWindowToTop() {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  if (document.documentElement) document.documentElement.scrollTop = 0;
  if (document.body) document.body.scrollTop = 0;
}

function useScrollResetOnNavigation() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevPathRef = useRef<string | null>(null);

  // Disable browser-managed scroll restoration once on mount.
  useEffect(() => {
    if (typeof window === "undefined") return;
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

  // Only reset scroll when the pathname ACTUALLY changes between renders.
  // This prevents the page from "running away" to the top while the user
  // is reading and some unrelated state update triggers a re-render.
  useEffect(() => {
    if (prevPathRef.current === pathname) return;
    prevPathRef.current = pathname;
    scrollWindowToTop();
  }, [pathname]);
}

function NotFoundComponent() {
  return (
    <div className="notfound">
      <div>
        <div className="notfound-code">404</div>
        <h2>Страница не найдена</h2>
        <p>Возможно, она была перемещена или её никогда не существовало.</p>
        <Link to="/" className="btn btn-primary">На главную</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Дарья Попельнюк — сайты, боты и AI-инструменты для бизнеса" },
      { name: "description", content: "Проектирую и собираю цифровые инструменты под задачу бизнеса: лендинги, каталоги, Telegram-боты, AI-ассистентов и мини-приложения. Сначала разбираемся, что нужно, — потом делаю." },
      { name: "author", content: "Дарья Попельнюк" },
      { property: "og:title", content: "Дарья Попельнюк — сайты, боты и AI-инструменты для бизнеса" },
      { property: "og:description", content: "Проектирую и собираю цифровые инструменты под задачу бизнеса: лендинги, каталоги, Telegram-боты, AI-ассистентов и мини-приложения." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Дарья Попельнюк — цифровая мастерская" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Дарья Попельнюк — сайты, боты и AI-инструменты для бизнеса" },
      { name: "twitter:description", content: "Проектирую и собираю цифровые инструменты под задачу бизнеса: лендинги, каталоги, Telegram-боты, AI-ассистентов и мини-приложения." },
      { property: "og:image", content: "http://biznes-na-ai.ru/og-image.png" },
      { name: "twitter:image", content: "http://biznes-na-ai.ru/og-image.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useScrollResetOnNavigation();
  return <Outlet />;
}
