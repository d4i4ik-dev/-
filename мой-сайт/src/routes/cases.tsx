import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactCta } from "@/components/ContactCta";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Кейсы — Дарья Попельнюк" },
      { name: "description", content: "Кейс: сайт с каталогом 3000+ позиций за 1,5 недели — SEO-структура, гео-страницы, статьи, документы и автоматическая обработка фото под ключ." },
      { property: "og:title", content: "Кейсы — Дарья Попельнюк" },
      { property: "og:description", content: "Сайт с каталогом 3000+ позиций за 1,5 недели — под ключ." },
    ],
    links: [{ rel: "canonical", href: "http://biznes-na-ai.ru/cases" }],
  }),
  component: CasesPage,
});

function CasesPage() {
  return (
    <SiteLayout accent="blue">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow rise">Кейсы</div>
          <h1 className="h1 rise rise-1">Что уже собрано под задачу бизнеса</h1>
          <p className="lead rise rise-2">
            Здесь показываю работы, где инструмент решал конкретную задачу. Начну с одного из самых
            показательных — большого каталога, собранного за полторы недели.
          </p>
        </div>
      </section>

      {/* КЕЙС 1 */}
      <section className="section bg-soft">
        <div className="container">
          <div className="case">
            <div>
              <span className="card-tag">Сайт · Каталог</span>
              <h2 className="h2">Сайт с каталогом 3000+ позиций за 1,5 недели</h2>
              <p className="muted" style={{ marginTop: 14 }}>
                Задача — большой каталог, который нужно было запустить быстро и так, чтобы его
                находили в поиске. Вручную набивать тысячи страниц нереально, поэтому я собрала
                структуру и процесс, где контент разворачивается системно.
              </p>
              <div className="case-metrics">
                <div className="case-metric"><div className="cmn">3000+</div><div className="cml">позиций в каталоге</div></div>
                <div className="case-metric"><div className="cmn">1,5 нед</div><div className="cml">от старта до сборки</div></div>
                <div className="case-metric"><div className="cmn">Под ключ</div><div className="cml">без ручной рутины</div></div>
              </div>
              <div className="tag-row">
                <span className="t">SEO-структура</span>
                <span className="t">гео-страницы</span>
                <span className="t">статьи</span>
                <span className="t">документы</span>
                <span className="t">обработка фото</span>
                <span className="t">сборка под ключ</span>
              </div>
            </div>

            <div className="mock">
              <div className="mock-bar">
                <div className="mock-dots"><i /><i /><i /></div>
                <div className="mock-url">catalog · 3000+ позиций</div>
              </div>
              <div className="mock-body">
                <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                  <div className="mock-skel w-40 mock-hl" />
                  <div className="mock-skel w-40" />
                  <div className="mock-skel w-40" />
                </div>
                <div className="catalog-mock">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div className="cat-tile" key={i}>
                      <div className="cat-thumb" />
                      <div className="cat-meta">
                        <span className="cm-1" />
                        <span className="cm-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Что было сделано */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Что было сделано</div>
            <h2 className="h2">Каталог, который удобно листать и легко наращивать</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-ico">🗂</div>
              <h3>Каталог 3000+ позиций</h3>
              <p>Разделы, карточки и навигация, в которой не теряешься даже при большом объёме. Контент разворачивается по единой структуре.</p>
            </div>
            <div className="card">
              <div className="card-ico">🔍</div>
              <h3>SEO- и гео-структура</h3>
              <p>Продуманные адреса, метатеги и гео-страницы под города — чтобы каталог находили в поиске по нужным запросам.</p>
            </div>
            <div className="card">
              <div className="card-ico">📄</div>
              <h3>Статьи и документы</h3>
              <p>Информационные страницы, статьи и документы, которые поддерживают доверие и помогают в поиске.</p>
            </div>
            <div className="card">
              <div className="card-ico">🖼</div>
              <h3>Обработка фото</h3>
              <p>Автоматическая подготовка изображений — без ручной возни с каждой из тысяч карточек.</p>
            </div>
            <div className="card">
              <div className="card-ico">⚙️</div>
              <h3>Сборка под ключ</h3>
              <p>От структуры до готового сайта — вам не пришлось разбираться в технической части.</p>
            </div>
            <div className="card">
              <div className="card-ico">⏱</div>
              <h3>Срок 1,5 недели</h3>
              <p>Быстрый запуск за счёт системного подхода, а не героического ручного труда.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Скоро больше */}
      <section className="section bg-soft">
        <div className="container narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow center">Дальше — больше</div>
          <h2 className="h2">Готовлю новые кейсы по ботам и мини-приложениям</h2>
          <p className="muted" style={{ marginTop: 12, marginBottom: 24 }}>
            Хотите обсудить задачу, похожую на эту, или совсем другую? Напишите — покажу, как её можно
            собрать, и расскажу про сроки.
          </p>
          <div className="btn-row center">
            <Link to="/contacts" className="btn btn-primary btn-lg">Обсудить свою задачу</Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </SiteLayout>
  );
}
