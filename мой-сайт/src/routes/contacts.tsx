import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CONTACTS } from "@/lib/contacts";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — VIBE" },
      { name: "description", content: "Давайте обсудим ваш проект." },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <SiteLayout solidNav>
      <section className="page-hero lime">
        <div className="container">
          <div className="page-hero-label reveal">Контакты</div>
          <h1 className="reveal reveal-d1">Давайте обсудим ваш проект</h1>
          <p className="page-hero-sub reveal reveal-d2">
            Выберите удобный мессенджер — отвечу в течение 2 часов.
          </p>
          <div className="hero-contact-actions reveal reveal-d2">
            <a
              href={CONTACTS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glow"
            >
              💬 Telegram
            </a>
            <a
              href={CONTACTS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              📱 WhatsApp
            </a>
            <a
              href={CONTACTS.max}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              🚀 MAX
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <a
              href={CONTACTS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="cap-card contact-card reveal"
            >
              <div className="cap-icon">💬</div>
              <h3>Telegram</h3>
              <p>Самый быстрый способ связи</p>
            </a>
            <a
              href={CONTACTS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cap-card contact-card reveal reveal-d1"
            >
              <div className="cap-icon">📱</div>
              <h3>WhatsApp</h3>
              <p>Для тех, кому удобнее здесь</p>
            </a>
            <a
              href={CONTACTS.max}
              target="_blank"
              rel="noopener noreferrer"
              className="cap-card contact-card reveal reveal-d2"
            >
              <div className="cap-icon">🚀</div>
              <h3>MAX</h3>
              <p>Российский мессенджер</p>
            </a>
          </div>

          <div className="contact-info reveal reveal-d3">
            <p>
              <strong>Как это работает:</strong>
              <br />
              1. Вы пишете, что хотите сделать
              <br />
              2. Я задаю уточняющие вопросы (обычно 3-5)
              <br />
              3. Даю оценку по срокам и стоимости
              <br />
              4. Если подходит — стартуем. Если нет — без обид.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
