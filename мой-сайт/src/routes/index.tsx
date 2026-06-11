import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Diagnostics } from "@/components/Diagnostics";
import { CONTACTS } from "@/lib/contacts";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout solidNav={false}>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge reveal">
            <span>●</span> 7+ лет в бизнесе · 200+ проектов · 18 ниш
          </div>
          <h1 className="reveal reveal-d1">
            Освободите время для&nbsp;жизни.{" "}
            <em>Умные веб&#8209;решения</em> для&nbsp;вашего бизнеса.
          </h1>
          <p className="hero-sub reveal reveal-d2">
            Вайбкодинг — это когда технологии работают на вас, а не вы на них.
            Сайты, приложения, AI&#8209;агенты и автоматизация под ключ.
          </p>
          <div className="hero-actions reveal reveal-d3">
            <a href="#diagnostics" className="btn btn-primary">
              Найти своё решение ↓
            </a>
            <a
              href={CONTACTS.telegram}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
        <div className="hero-scroll">scroll</div>
      </section>

      <section className="section about" id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="about-label reveal">Цифровой архитектор</div>
              <h2 className="reveal reveal-d1">
                Я не просто пишу код — я строю системы, которые приносят деньги
              </h2>
              <p className="about-text reveal reveal-d2">
                Более 7 лет в бизнесе. Мой бэкграунд — маркетинг, управление
                проектами и продажи. Я понимаю, как работает каждый винтик
                вашего бизнеса, поэтому создаю не просто «красивый код», а
                инструменты, которые решают задачи.
              </p>
              <div className="about-highlight reveal reveal-d3">
                Объединила креативность и жёсткую системность, чтобы ваш бизнес
                работал без сбоев.
              </div>
            </div>
            <div className="about-stats">
              <div className="stat reveal">
                <div className="stat-num">7+</div>
                <div className="stat-label">лет в бизнесе</div>
              </div>
              <div className="stat reveal reveal-d1">
                <div className="stat-num">200+</div>
                <div className="stat-label">проектов</div>
              </div>
              <div className="stat reveal reveal-d2">
                <div className="stat-num">18</div>
                <div className="stat-label">ниш</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="services-head">
            <div className="about-label reveal">Что я делаю</div>
            <h2 className="s-title reveal reveal-d1">
              Полный арсенал цифровых решений
            </h2>
            <p className="s-sub reveal reveal-d2">
              От лендинга до корпоративной системы — всё, что нужно вашему
              бизнесу в цифровом мире.
            </p>
          </div>
          <div className="services-grid">
            {[
            { to: "/sites" as const, icon: "🌐", h: "Сайты и лендинги", t: "От визитки до корпоративного портала. Дизайн, который продаёт, и скорость, которая не раздражает. Одностраничники для взрывных запусков и рекламных кампаний. Идеальная типографика, смыслы и конверсия.", price: "от 9 000 ₽", term: "от 3 часов" },
            { to: "/apps" as const, icon: "📱", h: "Приложения и сервисы", t: "Личные кабинеты, CRM, платформы. Замена подпискам — софт, который принадлежит только вам.", price: "от 70 000 ₽", term: "от 2 недель" },
            { to: "/ai" as const, icon: "🤖", h: "AI-агенты и боты", t: "Чат-боты, голосовые ассистенты, «цифровые двойники». Автоматизация рутины с обучением и внедрением.", price: "от 7 000 ₽", term: "от 3 дней" },
            { to: "/games" as const, icon: "🎮", h: "Мини-игры и геймификация", t: "Квизы, тренажёры, геймифицированные воронки. Дофамин как маркетинговый инструмент.", price: "от 30 000 ₽", term: "от 7 дней" },
            { to: "/systems" as const, icon: "⚙️", h: "Системы и автоматизация", t: "CRM, ERP, дашборды, складские системы. Порядок вместо хаоса.", price: "от 70 000 ₽", term: "от 2 недель" },
            { to: "/consulting" as const, icon: "🎓", h: "Консалтинг и обучение", t: "Обучу вас и команду работать с нейросетями. Покажу, как AI может сэкономить часы каждый день.", price: "Цена индивидуально", term: "Срок индивидуально" },
            ].map((s, i) => (
              <Link
                key={s.to}
                to={s.to}
                className={`svc-card reveal reveal-d${Math.min(i, 5)}`}
              >
                <div className="svc-icon">{s.icon}</div>
                <h3>{s.h}</h3>
                <p>{s.t}</p>
                <div className="svc-foot">
                  <div className="svc-arrow">Подробнее →</div>
                  <div className="svc-meta">
                    <span className="svc-meta-price">{s.price}</span>
                    <span className="svc-meta-term">{s.term}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Diagnostics />

      <section className="section cta-section" id="contacts">
        <div className="container">
          <h2 className="reveal">Давайте обсудим ваш проект</h2>
          <p className="reveal reveal-d1">
            Напишите, что хотите сделать — и я скажу, возможно ли это, сколько
            займёт и сколько стоит. Обычно отвечаю в течение 2 часов.
          </p>
          <div
            className="reveal reveal-d2"
            style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
          >
            <a href={CONTACTS.telegram} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href={CONTACTS.whatsapp} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={CONTACTS.max} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">MAX</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
