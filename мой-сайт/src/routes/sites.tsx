import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactCta } from "@/components/ContactCta";
import { FaqItem } from "@/components/FaqItem";

export const Route = createFileRoute("/sites")({
  head: () => ({
    meta: [
      { title: "Сайты и каталоги под задачу бизнеса — Дарья Попельнюк" },
      { name: "description", content: "Лендинги, многостраничные сайты и каталоги со структурой под заявки, SEO и гео. Проектирую сайт так, чтобы он приводил клиентов, а не просто был красивым." },
      { property: "og:title", content: "Сайты и каталоги под задачу бизнеса" },
      { property: "og:description", content: "Лендинги, многостраничники и каталоги со структурой под заявки, SEO и гео." },
    ],
    links: [{ rel: "canonical", href: "http://biznes-na-ai.ru/sites" }],
  }),
  component: SitesPage,
});

const CAPS = [
  { icon: "🎯", h: "Лендинги", t: "Одностраничник под запуск или рекламу: ведёт человека к одному целевому действию — заявке или заказу." },
  { icon: "🗂", h: "Многостраничные сайты", t: "Услуги, разделы, «о компании», блог. Структура, в которой легко найти нужное и которую не страшно наращивать." },
  { icon: "📦", h: "Каталоги", t: "Сотни и тысячи позиций, разделы, карточки товаров и услуг. Собираю каталог, который удобно листать и просто пополнять." },
  { icon: "🔍", h: "SEO и гео", t: "Структура под поиск, гео-страницы под города, статьи, метатеги и понятные адреса — чтобы вас находили в Яндексе и Google." },
  { icon: "🧭", h: "Структура под заявки", t: "Продумываю маршрут посетителя: от первого экрана до целевого действия, без тупиков и лишних шагов." },
  { icon: "✍️", h: "Тексты и смыслы", t: "Заголовки и блоки, которые объясняют ценность на языке клиента, — а не просто «мы молодая динамичная компания»." },
];

const TASKS = [
  "Запускаете рекламу — нужен лендинг, который превращает клики в заявки, а не в отказы.",
  "У вас много услуг — нужен сайт, где клиент быстро находит своё и не путается.",
  "Большой ассортимент — нужен каталог, который удобно листать и не стыдно показать.",
  "Хотите приходить из поиска — нужна SEO- и гео-структура под ваши города и запросы.",
];

function SitesPage() {
  return (
    <SiteLayout accent="blue">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow rise">Сайты</div>
          <h1 className="h1 rise rise-1">Сайт, который приводит заявки, а не просто радует глаз</h1>
          <p className="lead rise rise-2">
            Проектирую и собираю лендинги, многостраничные сайты и каталоги. Начинаю не с картинок,
            а с вопроса: что должен сделать посетитель — и как довести его до этого шага.
          </p>
          <div className="page-hero-stats rise rise-3">
            <div className="phs"><span className="phs-n">Заявки</span><span className="phs-l">цель, а не украшение</span></div>
            <div className="phs"><span className="phs-n">3000+</span><span className="phs-l">позиций в каталоге — кейс</span></div>
            <div className="phs"><span className="phs-n">SEO + гео</span><span className="phs-l">чтобы вас находили</span></div>
          </div>
          <div className="btn-row rise rise-4" style={{ marginTop: 30 }}>
            <Link to="/contacts" className="btn btn-primary btn-lg">Обсудить сайт</Link>
            <Link to="/cases" className="btn btn-secondary btn-lg">Посмотреть кейс</Link>
          </div>
        </div>
      </section>

      {/* Что делаю */}
      <section className="section bg-soft">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Что делаю</div>
            <h2 className="h2">Форматы сайтов под разные задачи</h2>
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

      {/* Как устроена страница под заявки */}
      <section className="section">
        <div className="container">
          <div className="case">
            <div>
              <div className="eyebrow">Структура под заявки</div>
              <h2 className="h2">Красиво — недостаточно. Важно, куда ведёт каждый экран</h2>
              <p className="muted" style={{ marginTop: 14 }}>
                Я собираю сайт как маршрут: первый экран объясняет, что вы даёте; следующие блоки
                снимают сомнения; а к целевому действию человек приходит подготовленным. Поэтому
                заявок больше — при том же трафике.
              </p>
              <div className="card acc-blue" style={{ marginTop: 22 }}>
                <ul>
                  <li>Первый экран — суть и понятная кнопка</li>
                  <li>Блоки доверия: кейсы, отзывы, ответы на возражения</li>
                  <li>Один ясный призыв к действию, а не десять</li>
                  <li>Быстрая загрузка и удобство на телефоне</li>
                </ul>
              </div>
            </div>

            <div className="mock">
              <div className="mock-bar">
                <div className="mock-dots"><i /><i /><i /></div>
                <div className="mock-url">biznes-na-ai.ru</div>
              </div>
              <div className="mock-body" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="mock-skel w-60" style={{ height: 20 }} />
                <div className="mock-skel w-80" />
                <div style={{ display: "flex", gap: 10, margin: "4px 0 8px" }}>
                  <div className="mock-skel mock-hl" style={{ width: 120, height: 34, borderRadius: 8 }} />
                  <div className="mock-skel" style={{ width: 96, height: 34, borderRadius: 8 }} />
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <div className="mock-skel w-100" style={{ height: 60 }} />
                  <div className="mock-skel w-100" style={{ height: 60 }} />
                  <div className="mock-skel w-100" style={{ height: 60 }} />
                </div>
                <div className="mock-skel w-40" />
                <div className="mock-skel w-100" style={{ height: 44, borderRadius: 8, background: "var(--accent-wash)" }} />
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
            <h2 className="h2">С чем чаще всего приходят за сайтом</h2>
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
            <h2 className="h2">Частые вопросы про сайты</h2>
          </div>
          <div className="faq-list">
            <FaqItem question="Сколько стоит сайт?">
              Лендинг, многостраничник или каталог — 90–150K ₽ в зависимости от объёма и сложности.
              Точную цену называю после короткого разбора задачи.
            </FaqItem>
            <FaqItem question="За какой срок делаете?">
              Простой лендинг — от нескольких дней. Большой каталог со структурой — примерно от 1,5
              недель. Сроки обсуждаем на старте, до оплаты.
            </FaqItem>
            <FaqItem question="Я смогу сам вносить правки?">
              Да. Передаю готовый сайт и объясняю, как обновлять контент. При необходимости — остаюсь
              на связи для доработок.
            </FaqItem>
            <FaqItem question="А если я не знаю, какой сайт мне нужен?">
              Это нормально. Начнём с экспресс-разбора: я задам несколько вопросов и подскажу, что
              подойдёт именно вашему бизнесу.
            </FaqItem>
          </div>
        </div>
      </section>

      <ContactCta
        title="Расскажите про бизнес — спроектируем сайт под заявки"
        text="Опишите задачу своими словами. Я подскажу формат, структуру и назову сроки со стоимостью."
      />
    </SiteLayout>
  );
}
