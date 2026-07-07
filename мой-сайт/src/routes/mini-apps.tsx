import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactCta } from "@/components/ContactCta";
import { FaqItem } from "@/components/FaqItem";

export const Route = createFileRoute("/mini-apps")({
  head: () => ({
    meta: [
      { title: "Мини-приложения и интерактивные диагностики — Дарья Попельнюк" },
      { name: "description", content: "Интерактивные диагностики, калькуляторы, квизы, личные кабинеты и мини-приложения для продукта, курса или сервиса. Инструменты, которые вовлекают и приводят к результату." },
      { property: "og:title", content: "Мини-приложения и интерактивные диагностики" },
      { property: "og:description", content: "Диагностики, калькуляторы, квизы и личные кабинеты — под продукт, курс или сервис." },
    ],
    links: [{ rel: "canonical", href: "http://biznes-na-ai.ru/mini-apps" }],
  }),
  component: MiniAppsPage,
});

const CAPS = [
  { icon: "🧭", h: "Интерактивные диагностики", t: "Человек отвечает на вопросы и получает персональный разбор или рекомендацию. Отличный вход в продукт и повод оставить контакт." },
  { icon: "🧮", h: "Калькуляторы", t: "Расчёт стоимости, объёма, срока или выгоды. Клиент сразу видит цифру под свою ситуацию — и охотнее оставляет заявку." },
  { icon: "❓", h: "Квизы", t: "Игровой формат подбора: продукта, тарифа, программы. Вовлекает и мягко ведёт к целевому действию." },
  { icon: "👤", h: "Личные кабинеты", t: "Пространство клиента: доступ к материалам, статусам, заказам или прогрессу. Всё в одном месте, под вашим брендом." },
  { icon: "🎓", h: "Под продукт, курс, сервис", t: "Мини-приложение вокруг вашего продукта: трекер, дневник, подбор, тренажёр — то, что усиливает основную услугу." },
  { icon: "📊", h: "Результат и заявки", t: "В конце — понятный результат для клиента и заявка для вас. Инструмент не просто развлекает, а работает на продажи." },
];

const TASKS = [
  "Хочется зацепить холодную аудиторию — нужен интерактив, а не очередной текст.",
  "Клиенту сложно посчитать стоимость или выгоду — нужен калькулятор под его случай.",
  "Есть курс или продукт — нужен инструмент, который усиливает результат и удерживает.",
  "Нужен способ собирать тёплые заявки — через пользу, а не через «оставьте телефон».",
];

function MiniAppsPage() {
  return (
    <SiteLayout accent="terra">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow rise">Мини-приложения</div>
          <h1 className="h1 rise rise-1">Интерактивные инструменты, которые вовлекают и приводят к результату</h1>
          <p className="lead rise rise-2">
            Диагностики, калькуляторы, квизы и личные кабинеты. Человек не просто читает — он что-то
            делает, получает пользу и оставляет заявку. А вы получаете тёплого клиента.
          </p>
          <div className="page-hero-stats rise rise-3">
            <div className="phs"><span className="phs-n">Польза</span><span className="phs-l">вместо «оставьте телефон»</span></div>
            <div className="phs"><span className="phs-n">Вовлечение</span><span className="phs-l">человек проходит до конца</span></div>
            <div className="phs"><span className="phs-n">Тёплые заявки</span><span className="phs-l">через результат</span></div>
          </div>
          <div className="btn-row rise rise-4" style={{ marginTop: 30 }}>
            <Link to="/contacts" className="btn btn-primary btn-lg">Обсудить приложение</Link>
            <a href="#how" className="btn btn-secondary btn-lg">Как это выглядит</a>
          </div>
        </div>
      </section>

      {/* Что делаю */}
      <section className="section bg-soft">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Что делаю</div>
            <h2 className="h2">Форматы мини-приложений</h2>
          </div>
          <div className="grid grid-3">
            {CAPS.map((c) => (
              <div className="card" key={c.h}>
                <div className="card-ico">{c.icon}</div>
                <h3>{c.h}</h3>
                <p>{c.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как это выглядит — макет диагностики */}
      <section className="section" id="how">
        <div className="container">
          <div className="case">
            <div>
              <div className="eyebrow">Как это выглядит</div>
              <h2 className="h2">Несколько шагов — и человек получает персональный результат</h2>
              <p className="muted" style={{ marginTop: 14 }}>
                Простая логика: вопрос за вопросом, понятный прогресс, а в конце — разбор или
                рекомендация под конкретного человека. Именно в этот момент удобно предложить
                следующий шаг и собрать контакт.
              </p>
              <div className="card acc-terra" style={{ marginTop: 22 }}>
                <ul>
                  <li>Понятные шаги и прогресс — легко пройти до конца</li>
                  <li>Персональный результат, а не общий текст</li>
                  <li>Заявка появляется на пике интереса</li>
                  <li>Работает на телефоне и внутри Telegram</li>
                </ul>
              </div>
            </div>

            <div className="mock">
              <div className="mock-bar">
                <div className="mock-dots"><i /><i /><i /></div>
                <div className="mock-url">Диагностика · шаг 3 из 4</div>
              </div>
              <div className="mock-body" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <div className="mock-skel mock-hl" style={{ flex: 1, height: 6, borderRadius: 3 }} />
                  <div className="mock-skel mock-hl" style={{ flex: 1, height: 6, borderRadius: 3 }} />
                  <div className="mock-skel mock-hl" style={{ flex: 1, height: 6, borderRadius: 3 }} />
                  <div className="mock-skel" style={{ flex: 1, height: 6, borderRadius: 3 }} />
                </div>
                <div className="mock-skel w-80" style={{ height: 16 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div className="mock-skel w-100" style={{ height: 42, borderRadius: 8, background: "var(--accent-wash)" }} />
                  <div className="mock-skel w-100" style={{ height: 42, borderRadius: 8 }} />
                  <div className="mock-skel w-100" style={{ height: 42, borderRadius: 8 }} />
                </div>
                <div className="mock-skel w-100" style={{ height: 46, borderRadius: 8, background: "var(--accent)", opacity: 0.85 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Примеры задач */}
      <section className="section bg-soft">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Примеры задач</div>
            <h2 className="h2">Когда мини-приложение решает задачу лучше сайта</h2>
          </div>
          <div className="sit-list">
            {TASKS.map((t, i) => (
              <div className="sit" key={i}>
                <span className="sit-q">?</span>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container narrow">
          <div className="sec-head">
            <div className="eyebrow">Вопросы</div>
            <h2 className="h2">Частые вопросы про мини-приложения</h2>
          </div>
          <div className="faq-list">
            <FaqItem question="Чем мини-приложение лучше обычной формы?">
              Оно даёт человеку пользу до заявки: результат, расчёт или подбор. Люди охотнее проходят
              интерактив и оставляют контакт, потому что получают что-то ценное взамен.
            </FaqItem>
            <FaqItem question="Где оно будет работать?">
              На сайте, по прямой ссылке или внутри Telegram — как удобнее вашей аудитории. Адаптирую
              под телефон в первую очередь.
            </FaqItem>
            <FaqItem question="Сколько стоит?">
              Мини-приложение или диагностика — 50–150K ₽ в зависимости от логики и объёма. Точную цену
              называю после разбора задачи.
            </FaqItem>
            <FaqItem question="А заявки я как получу?">
              Настрою так, чтобы контакт и результат приходили вам — в Telegram, на почту или в CRM.
            </FaqItem>
          </div>
        </div>
      </section>

      <ContactCta
        title="Есть идея интерактива? Давайте соберём инструмент под неё"
        text="Расскажите про продукт и аудиторию. Я предложу формат мини-приложения и назову сроки со стоимостью."
      />
    </SiteLayout>
  );
}
