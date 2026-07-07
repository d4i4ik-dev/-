import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactCta } from "@/components/ContactCta";
import { ARTICLES } from "@/lib/articles";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "Статьи о сайтах, ботах и AI для бизнеса — Дарья Попельнюк" },
      { name: "description", content: "Понятные статьи для владельцев бизнеса: как выбрать между сайтом, ботом и мини-приложением, почему сайт не приносит заявки, когда нужен Telegram-бот и как работает AI-ассистент." },
      { property: "og:title", content: "Статьи о сайтах, ботах и AI для бизнеса" },
      { property: "og:description", content: "Простым языком: сайты, боты, AI-ассистенты и мини-приложения для бизнеса." },
    ],
    links: [{ rel: "canonical", href: "http://biznes-na-ai.ru/articles" }],
  }),
  component: ArticlesIndex,
});

function ArticlesIndex() {
  return (
    <SiteLayout accent="sage">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow rise">Статьи</div>
          <h1 className="h1 rise rise-1">Простым языком о сайтах, ботах и AI для бизнеса</h1>
          <p className="lead rise rise-2">
            Без технического жаргона и хайпа. Разбираю, какой инструмент решает какую задачу и как
            принимать решения о цифровизации бизнеса спокойно и по делу.
          </p>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="article-grid">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                to="/articles/$slug"
                params={{ slug: a.slug }}
                className="card article-card"
              >
                <div className="a-kicker">{a.kicker} · {a.readingTime}</div>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <span className="card-more">Читать →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </SiteLayout>
  );
}
