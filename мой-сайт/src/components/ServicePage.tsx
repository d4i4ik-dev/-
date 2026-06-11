import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "./SiteLayout";
import { FaqItem } from "./FaqItem";
import { CONTACTS } from "@/lib/contacts";

export interface Capability {
  icon: string;
  title: string;
  text: string;
  /** e.g. "от 9 000 ₽" */
  priceFrom?: string;
  /** e.g. "Срок: 1 день" */
  term?: string;
}
export interface ProcessStep { num: string; title: string; text: string }
export interface PortfolioItem {
  emoji: string;
  title: string;
  text: string;
  tag: string;
  /** External URL — when set, the card becomes a clickable link opening in a new tab. */
  href?: string;
  /** Background image URL for the mini-hero card. */
  image?: string;
  /** Optional mini-hero variant: renders a styled preview card instead of an emoji block. */
  miniHero?: {
    variant: "detox" | "winter" | "avia";
    badge: string;
    heading: string;
    subheading: string;
  };
}
export interface Faq { q: string; a: ReactNode }
export interface PageStat { num: string; label: string }
export interface InlineCta { text: string; href?: string }

export interface SpecialOffer {
  badge: string;
  title: string;
  features: string[];
  oldPrice: string;
  newPrice: string;
  ctaText: string;
  ctaHref?: string;
}

export interface CtaBannerConfig {
  title: string;
  text: string;
  buttons: Array<{ label: string; href: string; primary?: boolean }>;
}

export interface ServicePageProps {
  accent: "lime" | "cool" | "violet" | "warm";
  label: string;
  title: string;
  sub: string;
  stats: PageStat[];
  capabilities: Capability[];
  capabilitiesCta?: InlineCta;
  process: ProcessStep[];
  processCta?: InlineCta;
  portfolio: PortfolioItem[];
  portfolioCta?: InlineCta;
  /** Optional "special offer" block shown after portfolio. */
  specialOffer?: SpecialOffer;
  faq: Faq[];
  /** Override the final CTA banner (title/subtitle/buttons). */
  ctaBanner?: CtaBannerConfig;
}

function InlineCtaBtn({ cta }: { cta: InlineCta }) {
  const href = cta.href ?? "/contacts";
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  if (isExternal) {
    return (
      <div className="inline-cta reveal">
        <a href={href} className="btn btn-glow" target="_blank" rel="noopener noreferrer">
          {cta.text}
        </a>
      </div>
    );
  }
  return (
    <div className="inline-cta reveal">
      <Link to={href} preload="render" className="btn btn-glow">{cta.text}</Link>
    </div>
  );
}

function MiniHero({ mh, image }: { mh: NonNullable<PortfolioItem["miniHero"]>; image?: string }) {
  const style = image ? { backgroundImage: `url(${image})` } : undefined;
  return (
    <div className={`port-img mini-hero mh-${mh.variant}`} style={style}>
      <div className="mini-nav">
        <span className="mini-nav-l"></span>
        <span className="mini-nav-r">
          <span className="mini-nav-i"></span>
          <span className="mini-nav-i"></span>
          <span className="mini-nav-i"></span>
        </span>
      </div>
      <div className="mini-h-tag">{mh.badge}</div>
      <div className="mini-h-title">{mh.heading}</div>
      <div className="mini-h-sub">{mh.subheading}</div>
    </div>
  );
}

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const inner = (
    <>
      {item.miniHero ? (
        <MiniHero mh={item.miniHero} image={item.image} />
      ) : item.image ? (
        <div className="port-img port-img-photo">
          <img
            src={item.image}
            alt={item.title}
            width={1024}
            height={768}
            loading="eager"
            decoding="async"
            // @ts-expect-error fetchpriority is a valid HTML attribute not yet in React types
            fetchpriority="high"
          />
        </div>
      ) : (
        <div className="port-img">{item.emoji}</div>
      )}
      <div className="port-body">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <span className="port-tag">{item.tag}</span>
      </div>
    </>
  );
  const className = `port-card reveal reveal-d${Math.min(index, 5)}`;
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return <div className={className}>{inner}</div>;
}

function SpecialOfferBlock({ offer }: { offer: SpecialOffer }) {
  const href = offer.ctaHref ?? "/contacts";
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <section className="section sec-divider">
      <div className="container">
        <div className="special-offer reveal">
          <div className="so-badge">★ {offer.badge}</div>
          <h2 className="so-title">{offer.title}</h2>
          <ul className="so-list">
            {offer.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <div className="so-price">
            <span className="so-price-old">{offer.oldPrice}</span>
            <span className="so-price-new">{offer.newPrice}</span>
          </div>
          <div className="so-cta">
            {isExternal ? (
              <a href={href} className="btn btn-glow" target="_blank" rel="noopener noreferrer">
                {offer.ctaText}
              </a>
            ) : (
              <Link to={href} preload="render" className="btn btn-glow">
                {offer.ctaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBannerBlock({ banner }: { banner: CtaBannerConfig }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner reveal">
          <h2>{banner.title}</h2>
          <p>{banner.text}</p>
          <div className="cta-actions">
            {banner.buttons.map((b, i) => (
              <a
                key={i}
                href={b.href}
                className={`btn ${b.primary ? "btn-primary" : "btn-ghost"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const DEFAULT_CTA_BANNER: CtaBannerConfig = {
  title: "Давайте обсудим ваш проект",
  text: "Напишите, что хотите сделать — отвечу в течение 2 часов.",
  buttons: [
    { label: "Telegram", href: CONTACTS.telegram, primary: true },
    { label: "WhatsApp", href: CONTACTS.whatsapp },
    { label: "MAX", href: CONTACTS.max },
  ],
};

export function ServicePage(p: ServicePageProps) {
  const banner = p.ctaBanner ?? DEFAULT_CTA_BANNER;
  return (
    <SiteLayout solidNav>
      <section className={`page-hero ${p.accent}`}>
        <div className="container">
          <div className="page-hero-label reveal">{p.label}</div>
          <h1 className="reveal reveal-d1">{p.title}</h1>
          <p className="page-hero-sub reveal reveal-d2">{p.sub}</p>
          <div className="page-hero-stats reveal reveal-d3">
            {p.stats.map((s, i) => (
              <div className="ph-stat" key={i}>
                <div className="ph-stat-num">{s.num}</div>
                <div className="ph-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sec-divider">
        <div className="container">
          <div className="sec-label reveal">Возможности</div>
          <div className="sec-title reveal reveal-d1">Что входит</div>
          <div className="sec-sub reveal reveal-d2">
            Каждый проект — уникальный, но вот направления, в которых я работаю.
          </div>
          <div className="cap-grid">
            {p.capabilities.map((c, i) => (
              <div className={`cap-card reveal reveal-d${Math.min(i, 5)}`} key={i}>
                <div className="cap-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                {(c.priceFrom || c.term) && (
                  <div className="cap-price">
                    {c.priceFrom && <span className="cap-price-from">{c.priceFrom}</span>}
                    {c.term && <span className="cap-price-term">{c.term}</span>}
                  </div>
                )}
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          {p.capabilitiesCta && <InlineCtaBtn cta={p.capabilitiesCta} />}
        </div>
      </section>

      <section className="section sec-divider">
        <div className="container">
          <div className="sec-label reveal">Процесс</div>
          <div className="sec-title reveal reveal-d1">Как мы работаем</div>
          <div className="sec-sub reveal reveal-d2">
            Прозрачно, итеративно, с демо на каждом этапе.
          </div>
          <div className="timeline reveal reveal-d2">
            {p.process.map((step, i) => (
              <div className="tl-step" key={i}>
                <div className="tl-dot"></div>
                <div className="tl-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          {p.processCta && <InlineCtaBtn cta={p.processCta} />}
        </div>
      </section>

      <section className="section sec-divider">
        <div className="container">
          <div className="sec-label reveal">Портфолио</div>
          <div className="sec-title reveal reveal-d1">Реализованные проекты</div>
          <div className="sec-sub reveal reveal-d2">Некоторые из проектов, которыми горжусь.</div>
          <div className="port-grid">
            {p.portfolio.map((item, i) => (
              <PortfolioCard key={i} item={item} index={i} />
            ))}
          </div>
          {p.portfolioCta && <InlineCtaBtn cta={p.portfolioCta} />}
        </div>
      </section>

      {p.specialOffer && <SpecialOfferBlock offer={p.specialOffer} />}

      <section className="section sec-divider">
        <div className="container">
          <div className="sec-label reveal">FAQ</div>
          <div className="sec-title reveal reveal-d1">Частые вопросы</div>
          <div className="faq-list reveal reveal-d2">
            {p.faq.map((f, i) => (
              <FaqItem key={i} question={f.q}>{f.a}</FaqItem>
            ))}
          </div>
        </div>
      </section>

      <CtaBannerBlock banner={banner} />
    </SiteLayout>
  );
}
