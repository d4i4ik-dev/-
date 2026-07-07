import { Link } from "@tanstack/react-router";
import { CONTACTS } from "@/lib/contacts";

interface ContactCtaProps {
  title?: string;
  text?: string;
}

/** Финальная CTA-полоса — единый вид на всех страницах. */
export function ContactCta({
  title = "Расскажите задачу — подберём инструмент вместе",
  text = "Опишите, что хочется улучшить в бизнесе. Я отвечу, что реально поможет, сколько это займёт и сколько будет стоить.",
}: ContactCtaProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="btn-row center">
            <Link to="/contacts" className="btn btn-on-ink btn-lg">Обсудить проект</Link>
            <a
              href={CONTACTS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-on-ink-ghost btn-lg"
            >
              Написать задачу
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
