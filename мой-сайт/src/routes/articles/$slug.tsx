import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactCta } from "@/components/ContactCta";
import { getArticle } from "@/lib/articles";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { title: article.title, description: article.description };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.title ?? "Статья";
    const description = loaderData?.description ?? "";
    return {
      meta: [
        { title: `${title} — Дарья Попельнюк` },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `http://biznes-na-ai.ru/articles/${params.slug}` }],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <SiteLayout accent="sage">
      <section className="section" style={{ paddingTop: "clamp(60px,10vw,120px)" }}>
        <div className="container narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow center">Статьи</div>
          <h1 className="h2">Статья не найдена</h1>
          <p className="muted" style={{ margin: "12px 0 24px" }}>
            Возможно, ссылка устарела. Посмотрите список статей.
          </p>
          <Link to="/articles" className="btn btn-primary">Все статьи</Link>
        </div>
      </section>
    </SiteLayout>
  ),
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = getArticle(slug);

  if (!article) {
    return (
      <SiteLayout accent="sage">
        <section className="section" style={{ paddingTop: "clamp(60px,10vw,120px)" }}>
          <div className="container narrow" style={{ textAlign: "center" }}>
            <h1 className="h2">Статья не найдена</h1>
            <Link to="/articles" className="btn btn-primary" style={{ marginTop: 20 }}>
              Все статьи
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout accent="sage">
      <section className="page-hero">
        <div className="container narrow">
          <Link to="/articles" className="back-link">← Все статьи</Link>
          <div className="article-meta">
            <span>{article.kicker}</span>
            <span>·</span>
            <span>{article.readingTime} чтения</span>
          </div>
          <h1 className="h1">{article.title}</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container narrow">
          <div className="article-body">{article.body}</div>
        </div>
      </section>

      <ContactCta />
    </SiteLayout>
  );
}
