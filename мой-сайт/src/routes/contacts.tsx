import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CONTACTS } from "@/lib/contacts";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — Дарья Попельнюк" },
      { name: "description", content: "Напишите задачу в Telegram, WhatsApp или MAX — подскажу, какой цифровой инструмент подойдёт вашему бизнесу, и назову сроки со стоимостью." },
      { property: "og:title", content: "Контакты — Дарья Попельнюк" },
      { property: "og:description", content: "Напишите задачу в Telegram, WhatsApp или MAX." },
    ],
    links: [{ rel: "canonical", href: "http://biznes-na-ai.ru/contacts" }],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <SiteLayout accent="blue">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow rise">Контакты</div>
          <h1 className="h1 rise rise-1">Напишите задачу — подберём инструмент вместе</h1>
          <p className="lead rise rise-2">
            Опишите своими словами, что за бизнес и что хочется улучшить. Я подскажу, какой инструмент
            реально поможет, сколько это займёт и сколько будет стоить. Обычно отвечаю в течение
            пары часов.
          </p>
          <div className="btn-row rise rise-3" style={{ marginTop: 28 }}>
            <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Обсудить проект в Telegram
            </a>
            <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
              Написать задачу в WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Мессенджеры</div>
            <h2 className="h2">Выберите, где вам удобнее</h2>
          </div>
          <div className="contact-cards">
            <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" className="card contact-card">
              <div className="card-ico">💬</div>
              <h3>Telegram</h3>
              <p>Самый быстрый способ связи</p>
            </a>
            <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer" className="card contact-card">
              <div className="card-ico">📱</div>
              <h3>WhatsApp</h3>
              <p>Кому удобнее здесь</p>
            </a>
            <a href={CONTACTS.max} target="_blank" rel="noopener noreferrer" className="card contact-card">
              <div className="card-ico">🚀</div>
              <h3>MAX</h3>
              <p>Российский мессенджер</p>
            </a>
          </div>

          <div className="how-box">
            <div className="eyebrow">Как проходит первый разговор</div>
            <h3 className="h3" style={{ margin: "6px 0 18px" }}>Без обязательств и сложных терминов</h3>
            <ol>
              <li>Вы пишете своими словами, что хотите сделать или улучшить.</li>
              <li>Я задаю несколько уточняющих вопросов — обычно 3–5.</li>
              <li>Предлагаю подходящий инструмент и называю сроки со стоимостью.</li>
              <li>Если подходит — начинаем. Если нет — без обид, вы уйдёте с ясностью.</li>
            </ol>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
