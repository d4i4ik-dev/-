import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactCta } from "@/components/ContactCta";
import { FaqItem } from "@/components/FaqItem";

export const Route = createFileRoute("/bots-ai")({
  head: () => ({
    meta: [
      { title: "Telegram-боты и AI-ассистенты для бизнеса — Дарья Попельнюк" },
      { name: "description", content: "Боты и AI-ассистенты, которые отвечают клиентам, квалифицируют заявки, собирают лиды и прогревают. Автоматизирую рутину так, чтобы бизнес не терял клиентов." },
      { property: "og:title", content: "Telegram-боты и AI-ассистенты для бизнеса" },
      { property: "og:description", content: "Боты, которые отвечают клиентам, квалифицируют заявки и прогревают — 24/7." },
    ],
    links: [{ rel: "canonical", href: "http://biznes-na-ai.ru/bots-ai" }],
  }),
  component: BotsPage,
});

const CAPS = [
  { icon: "💬", h: "Telegram-боты", t: "Бот в вашем Telegram: принимает обращения, ведёт по сценарию, собирает данные и передаёт заявку вам — без сторонних сервисов." },
  { icon: "🤖", h: "AI-ассистенты", t: "Ассистент, обученный на ваших материалах. Отвечает на вопросы клиентов в вашем тоне и подсказывает, что делать дальше." },
  { icon: "🎚", h: "Бот-квалификатор", t: "Задаёт правильные вопросы и отсеивает нецелевые обращения. К вам доходят заявки, с которыми есть смысл работать." },
  { icon: "📥", h: "Бот для заявок", t: "Собирает заявки из рекламы и соцсетей в одно место, фиксирует контакты и не даёт лидам потеряться." },
  { icon: "💡", h: "Бот для ответов клиентам", t: "Закрывает частые вопросы про цены, условия, доставку и запись — мгновенно и круглосуточно." },
  { icon: "🔥", h: "Бот для прогрева", t: "Серия сообщений, которая знакомит с продуктом, снимает возражения и доводит человека до покупки." },
];

const TASKS = [
  "Клиенты пишут одно и то же — а вы отвечаете вручную и по ночам.",
  "Из рекламы приходят заявки, но часть теряется, пока вы не онлайн.",
  "Нужно отсеивать нецелевые обращения, чтобы не тратить время впустую.",
  "Хочется прогревать аудиторию к покупке, но руки не доходят делать это регулярно.",
];

function BotsPage() {
  return (
    <SiteLayout accent="sage">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow rise">Боты и AI</div>
          <h1 className="h1 rise rise-1">Боты и AI-ассистенты, которые не дают клиентам потеряться</h1>
          <p className="lead rise rise-2">
            Автоматизирую общение с клиентами: бот отвечает на вопросы, квалифицирует заявки,
            собирает лиды и прогревает к покупке. Вы занимаетесь делом — рутина работает сама.
          </p>
          <div className="page-hero-stats rise rise-3">
            <div className="phs"><span className="phs-n">24/7</span><span className="phs-l">отвечает без вас</span></div>
            <div className="phs"><span className="phs-n">0 потерь</span><span className="phs-l">заявки в одном месте</span></div>
            <div className="phs"><span className="phs-n">В вашем тоне</span><span className="phs-l">обучен на ваших материалах</span></div>
          </div>
          <div className="btn-row rise rise-4" style={{ marginTop: 30 }}>
            <Link to="/contacts" className="btn btn-primary btn-lg">Обсудить бота</Link>
            <a href="#how" className="btn btn-secondary btn-lg">Как это выглядит</a>
          </div>
        </div>
      </section>

      {/* Что делаю */}
      <section className="section bg-soft">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Что делаю</div>
            <h2 className="h2">Боты под конкретную роль в вашем бизнесе</h2>
            <p>Не «бот вообще», а инструмент под задачу: принять, отсеять, ответить или прогреть.</p>
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

      {/* Как это выглядит — чат-макет */}
      <section className="section" id="how">
        <div className="container">
          <div className="case">
            <div>
              <div className="eyebrow">Как это выглядит</div>
              <h2 className="h2">Бот ведёт диалог и передаёт вам готовую заявку</h2>
              <p className="muted" style={{ marginTop: 14 }}>
                Клиент пишет в удобное время, бот уточняет детали по сценарию и мягко доводит до
                целевого действия. Вы получаете уже собранную заявку с контактом и запросом — без
                переписки «на бегу».
              </p>
              <div className="card acc-sage" style={{ marginTop: 22 }}>
                <ul>
                  <li>Отвечает мгновенно, даже ночью и в выходные</li>
                  <li>Задаёт нужные вопросы и собирает контакт</li>
                  <li>Сложные случаи переводит на вас</li>
                  <li>Работает в Telegram и на сайте</li>
                </ul>
              </div>
            </div>

            <div className="mock chat-mock">
              <div className="mock-bar">
                <div className="mock-dots"><i /><i /><i /></div>
                <div className="mock-url">Ассистент · онлайн</div>
              </div>
              <div className="mock-body">
                <div className="bubble in">Здравствуйте! Подскажите, вы делаете доставку по городу?</div>
                <div className="bubble out">Да, доставляем 🚚 В какой район вам удобно? И на какую дату ориентируетесь?</div>
                <div className="bubble in">Центр, ближайшие выходные</div>
                <div className="bubble out">Отлично! Оставьте, пожалуйста, имя и телефон — зафиксирую заявку и менеджер подтвердит время.</div>
                <div className="bubble typing">печатает…</div>
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
            <h2 className="h2">Когда бизнесу нужен бот</h2>
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
            <h2 className="h2">Частые вопросы про ботов и AI</h2>
          </div>
          <div className="faq-list">
            <FaqItem question="Бот не будет отвечать глупости?">
              Настраиваю границы и сценарии, обучаю на ваших материалах и тестирую на реальных
              вопросах. Если бот чего-то не знает — честно передаёт диалог вам, а не выдумывает.
            </FaqItem>
            <FaqItem question="На чём обучается AI-ассистент?">
              На ваших данных: тексты, прайсы, FAQ, условия. Не на случайной информации из интернета —
              поэтому ответы соответствуют именно вашему бизнесу.
            </FaqItem>
            <FaqItem question="Сколько стоит бот?">
              Бот или AI-инструмент — 50–120K ₽ в зависимости от сценариев и интеграций. Точную цену
              называю после разбора задачи.
            </FaqItem>
            <FaqItem question="Куда попадают заявки?">
              Туда, где вам удобно: в Telegram, на почту или в вашу CRM. Настраиваю передачу так, чтобы
              ничего не терялось.
            </FaqItem>
          </div>
        </div>
      </section>

      <ContactCta
        title="Расскажите, что съедает время, — соберём бота под это"
        text="Опишите, с чем клиенты обращаются чаще всего. Я предложу сценарий бота и назову сроки со стоимостью."
      />
    </SiteLayout>
  );
}
