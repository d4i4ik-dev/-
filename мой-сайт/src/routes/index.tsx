import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CONTACTS } from "@/lib/contacts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ property: "og:url", content: "http://biznes-na-ai.ru/" }],
    links: [{ rel: "canonical", href: "http://biznes-na-ai.ru/" }],
  }),
  component: Index,
});

const BUILD = [
  {
    to: "/sites" as const,
    icon: "🖥",
    h: "Сайты и лендинги",
    t: "Страница, которая не просто красивая, а ведёт человека к заявке. Структура под цель, понятные смыслы, быстрая загрузка.",
    acc: "acc-blue",
  },
  {
    to: "/sites" as const,
    icon: "🗂",
    h: "Каталоги и многостраничные сайты",
    t: "Большие каталоги, разделы, статьи, гео-страницы и SEO-структура. Собираю так, чтобы контент можно было наращивать без боли.",
    acc: "acc-blue",
  },
  {
    to: "/bots-ai" as const,
    icon: "💬",
    h: "Telegram-боты и AI-ассистенты",
    t: "Бот отвечает на частые вопросы, квалифицирует заявки и не даёт клиентам потеряться. Работает круглосуточно вместо вас.",
    acc: "acc-sage",
  },
  {
    to: "/mini-apps" as const,
    icon: "🧩",
    h: "Мини-приложения и диагностики",
    t: "Интерактивные диагностики, калькуляторы, квизы и личные кабинеты — инструменты, которые вовлекают и приводят к результату.",
    acc: "acc-terra",
  },
];

const SITUATIONS = [
  "Нужен сайт, который не просто красивый, а приводит заявки.",
  "Клиенты задают одни и те же вопросы — и это съедает время.",
  "Каталог большой, а собирать его вручную — страшно.",
  "После рекламы люди заходят и теряются, не доходят до заявки.",
  "Хочется автоматизировать рутину, но непонятно, с чего начать.",
];

const STEPS = [
  { h: "Вы рассказываете задачу", t: "Своими словами — что за бизнес и что хочется улучшить. Без ТЗ и терминов." },
  { h: "Я предлагаю инструмент", t: "Подсказываю, что реально решит задачу: сайт, бот, приложение или связка." },
  { h: "Собираю структуру и прототип", t: "Показываю логику и черновой вид до разработки — чтобы согласовать направление." },
  { h: "Разрабатываю решение", t: "Собираю сайт, бота или приложение под ключ, с текстами, дизайном и настройкой." },
  { h: "Передаю и объясняю", t: "Отдаю готовую систему и показываю, как ей пользоваться и развивать дальше." },
];

const FORMATS = [
  { h: "Сайт / лендинг", price: "90–150K ₽", t: "Лендинг, многостраничник или каталог со структурой под заявки." },
  { h: "Бот / AI-инструмент", price: "50–120K ₽", t: "Telegram-бот или AI-ассистент: ответы, квалификация, заявки, прогрев." },
  { h: "Мини-приложение / диагностика", price: "50–150K ₽", t: "Интерактивная диагностика, калькулятор, квиз или личный кабинет." },
  { h: "Экспресс-разбор", price: "15–25K ₽", t: "Разбираю задачу и подсказываю, какой инструмент нужен бизнесу." },
];

function Index() {
  return (
    <SiteLayout accent="blue">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge rise">
              <span className="dot" /> Цифровая мастерская Дарьи Попельнюк
            </div>
            <h1 className="rise rise-1">
              Сайты, боты и AI-инструменты, которые помогают бизнесу получать заявки{" "}
              <span className="hl">без хаоса</span>
            </h1>
            <p className="hero-sub rise rise-2">
              Я проектирую и собираю цифровые инструменты под вашу задачу: лендинги, каталоги,
              Telegram-боты, AI-ассистентов и мини-приложения.
            </p>
            <div className="btn-row rise rise-3">
              <Link to="/contacts" className="btn btn-primary btn-lg">Обсудить проект</Link>
              <a href="#build" className="btn btn-secondary btn-lg">Посмотреть решения</a>
            </div>
            <div className="hero-meta rise rise-4">
              <div className="hm">
                <span className="hm-n">3000+</span>
                <span className="hm-l">позиций в каталоге — реальный кейс</span>
              </div>
              <div className="hm">
                <span className="hm-n">от 1,5 нед</span>
                <span className="hm-l">до запуска решения</span>
              </div>
              <div className="hm">
                <span className="hm-n">1 окно</span>
                <span className="hm-l">задача → инструмент → результат</span>
              </div>
            </div>
          </div>

          <div className="hero-visual rise rise-2">
            <div className="flow">
              <div className="flow-title">Маршрут клиента</div>
              <span className="flow-badge">без хаоса</span>
              <div className="flow-chain">
                <div className="flow-node">
                  <span className="fn-ico">🔎</span>
                  <span className="fn-b">
                    <span className="fn-t">Человек находит вас</span>
                    <span className="fn-s">реклама, поиск, соцсети</span>
                  </span>
                </div>
                <div className="flow-link" />
                <div className="flow-node is-accent">
                  <span className="fn-ico">🖥</span>
                  <span className="fn-b">
                    <span className="fn-t">Заходит на сайт</span>
                    <span className="fn-s">понятно, куда нажать</span>
                  </span>
                </div>
                <div className="flow-link" />
                <div className="flow-node">
                  <span className="fn-ico">💬</span>
                  <span className="fn-b">
                    <span className="fn-t">Бот уточняет запрос</span>
                    <span className="fn-s">квалифицирует за минуту</span>
                  </span>
                </div>
                <div className="flow-link" />
                <div className="flow-node is-accent">
                  <span className="fn-ico">📥</span>
                  <span className="fn-b">
                    <span className="fn-t">Заявка — у вас</span>
                    <span className="fn-s">в CRM, без потерь</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ЧТО Я СОБИРАЮ */}
      <section className="section bg-soft" id="build">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Что я собираю</div>
            <h2 className="h2">Не «делаю всё», а собираю конкретный инструмент под задачу</h2>
            <p>
              Четыре направления, из которых складывается рабочая цифровая система вашего бизнеса.
            </p>
          </div>
          <div className="grid grid-4">
            {BUILD.map((c) => (
              <Link key={c.h} to={c.to} className={`card ${c.acc}`}>
                <div className="card-ico">{c.icon}</div>
                <h3>{c.h}</h3>
                <p>{c.t}</p>
                <span className="card-more">Подробнее →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* КОГДА КО МНЕ ПРИХОДЯТ */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Когда ко мне приходят</div>
            <h2 className="h2">Обычно всё начинается с одной из этих ситуаций</h2>
          </div>
          <div className="sit-list">
            {SITUATIONS.map((s, i) => (
              <div className="sit" key={i}>
                <span className="sit-q">?</span>
                <p>{s}</p>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link to="/contacts" className="btn btn-primary">Это про меня — обсудить</Link>
          </div>
        </div>
      </section>

      {/* КЕЙС */}
      <section className="section bg-soft">
        <div className="container">
          <div className="case">
            <div>
              <div className="eyebrow">Кейс</div>
              <h2 className="h2">Большой сайт с каталогом 3000+ позиций</h2>
              <p className="muted" style={{ marginTop: 14 }}>
                Каталог на 3000+ товаров с продуманной SEO-структурой, гео-страницами, статьями и
                документами. Автоматическая обработка фото, аккуратная навигация по разделам и сборка
                под ключ — без ручного набивания каждой страницы.
              </p>
              <div className="case-metrics">
                <div className="case-metric">
                  <div className="cmn">3000+</div>
                  <div className="cml">позиций в каталоге</div>
                </div>
                <div className="case-metric">
                  <div className="cmn">1,5 нед</div>
                  <div className="cml">от старта до сборки</div>
                </div>
                <div className="case-metric">
                  <div className="cmn">SEO + гео</div>
                  <div className="cml">структура под поиск</div>
                </div>
              </div>
              <div className="tag-row">
                <span className="t">каталог</span>
                <span className="t">SEO-структура</span>
                <span className="t">гео-страницы</span>
                <span className="t">статьи и документы</span>
                <span className="t">обработка фото</span>
              </div>
              <div className="btn-row" style={{ marginTop: 24 }}>
                <Link to="/cases" className="btn btn-secondary">Смотреть кейс</Link>
              </div>
            </div>

            <div className="mock">
              <div className="mock-bar">
                <div className="mock-dots"><i /><i /><i /></div>
                <div className="mock-url">biznes-na-ai.ru/catalog</div>
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

      {/* КАК ПРОХОДИТ РАБОТА */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Как проходит работа</div>
            <h2 className="h2">Пять шагов — от вашей задачи до готовой системы</h2>
            <p>Вам не нужно разбираться в технологиях. Достаточно рассказать задачу — остальное на мне.</p>
          </div>
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step" key={i}>
                <div className="step-n">{i + 1}</div>
                <h4>{s.h}</h4>
                <p>{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФОРМАТЫ РАБОТЫ */}
      <section className="section bg-soft">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Форматы работы</div>
            <h2 className="h2">Понятные форматы под разные задачи</h2>
            <p>Точную стоимость называю после короткого разбора — она зависит от объёма и сложности.</p>
          </div>
          <div className="formats">
            {FORMATS.map((f) => (
              <div className="format" key={f.h}>
                <div className="format-top">
                  <h4>{f.h}</h4>
                  <span className="format-price">{f.price}</span>
                </div>
                <p>{f.t}</p>
              </div>
            ))}
          </div>
          <p className="format-note">
            Не знаете, какой формат ваш? Начните с экспресс-разбора — я подскажу.
          </p>
        </div>
      </section>

      {/* ФИНАЛЬНЫЙ CTA */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Напишите мне задачу — я подскажу, какой инструмент подойдёт вашему бизнесу</h2>
            <p>
              Без обязательств и сложных терминов. Опишите, что хочется улучшить, — и я отвечу, что
              реально поможет и сколько это займёт.
            </p>
            <div className="btn-row center">
              <Link to="/contacts" className="btn btn-on-ink btn-lg">Обсудить проект</Link>
              <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-on-ink-ghost btn-lg">
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
