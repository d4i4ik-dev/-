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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VIBE — Вайбкодинг для бизнеса | Сайты, приложения, AI-агенты" },
      { name: "description", content: "Умные веб-решения для вашего бизнеса. Сайты, приложения, AI-агенты, автоматизация. 7+ лет в бизнесе, 200+ проектов." },
      { name: "author", content: "VIBE" },
      { property: "og:title", content: "VIBE — Вайбкодинг для бизнеса | Сайты, приложения, AI-агенты" },
      { property: "og:description", content: "Умные веб-решения для вашего бизнеса. Сайты, приложения, AI-агенты, автоматизация. 7+ лет в бизнесе, 200+ проектов." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "VIBE — Вайбкодинг для бизнеса | Сайты, приложения, AI-агенты" },
      { name: "twitter:description", content: "Умные веб-решения для вашего бизнеса. Сайты, приложения, AI-агенты, автоматизация. 7+ лет в бизнесе, 200+ проектов." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d9021db6-fc40-41fd-a067-240a4637fd96/id-preview-1b77c8e6--4e99ebfd-a4ab-4f14-b3fa-773c4c75cbaa.lovable.app-1776867451607.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d9021db6-fc40-41fd-a067-240a4637fd96/id-preview-1b77c8e6--4e99ebfd-a4ab-4f14-b3fa-773c4c75cbaa.lovable.app-1776867451607.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;500;600;700&family=Onest:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
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
    <html lang="en">
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
