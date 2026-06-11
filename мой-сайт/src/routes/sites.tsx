import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { CONTACTS } from "@/lib/contacts";
import detoxImg from "@/assets/portfolio/detox.png";
import winterImg from "@/assets/portfolio/winter.png";
import aviaImg from "@/assets/portfolio/avia.png";
import saleDetoxImg from "@/assets/portfolio/sale-detox.png";
import baseofhealthImg from "@/assets/portfolio/baseofhealth.jpg";
import vedenieImg from "@/assets/portfolio/vedenie.png";
import coachImg from "@/assets/portfolio/coach.png";
import detiImg from "@/assets/portfolio/deti.png";
import intensivPitanieImg from "@/assets/portfolio/intensiv-pitanie.png";
import shopImg from "@/assets/portfolio/shop.png";
import vzroslyImg from "@/assets/portfolio/vzrosly.png";

export const Route = createFileRoute("/sites")({
  head: () => ({
    meta: [
      { title: "Сайты и лендинги — VIBE" },
      { name: "description", content: "От лендинга до корпоративного портала. Дизайн, скорость, конверсия." },
      { property: "og:title", content: "Сайты и лендинги — VIBE" },
      { property: "og:description", content: "От лендинга до корпоративного портала. Дизайн, скорость, конверсия." },
    ],
  }),
  component: () => (
    <ServicePage
      accent="lime"
      label="Сайты и лендинги"
      title="Сайты, которые продают, пока вы спите"
      sub="От лендинга до корпоративного портала — с дизайном, скоростью и мобильной адаптацией без компромиссов."
      stats={[
        { num: "50+", label: "сайтов запущено" },
        { num: "< 3с", label: "скорость загрузки" },
        { num: "от 3 дн", label: "лендинг под ключ" },
      ]}
      capabilities={[
        {
          icon: "🖥️",
          title: "Лендинги",
          priceFrom: "от 9 000 ₽",
          term: "Срок: 1 день",
          text: "Идеально для тестирования гипотез и запуска рекламы. Мощная смысловая упаковка, цепляющий визуал и продуманная архитектура конверсии. Ваш продукт начнёт продавать себя сам уже завтра. Одностраничники для взрывных запусков и рекламных кампаний. Идеальная типографика, смыслы и конверсия.",
        },
        {
          icon: "🏢",
          title: "Корпоративные сайты",
          priceFrom: "от 30 000 ₽",
          term: "Срок: 5–7 дней",
          text: "Цифровой офис вашей компании. Формируем доверие B2B-партнёров, транслируем масштаб и статус. Удобная админка, безупречный стиль и железобетонная SEO-база.",
        },
        {
          icon: "🛒",
          title: "Интернет-магазины",
          priceFrom: "от 30 000 ₽",
          term: "Срок: 7–10 дней",
          text: "Полноценная торговая площадка. Эстетичный каталог, корзина, онлайн-оплата и интеграция доставок. Делаем путь клиента к покупке гладким и безотказным.",
        },
        {
          icon: "👤",
          title: "Портфолио и блоги",
          priceFrom: "от 15 000 ₽",
          term: "Срок: от 1 дня",
          text: "Премиальная упаковка вашей экспертности. Выделяем среди конкурентов, обосновываем высокий чек. Ваша цифровая визитка, работающая на репутацию.",
        },
        {
          icon: "🔄",
          title: "Редизайн и миграция",
          priceFrom: "от 13 000 ₽",
          term: "Срок: от 3 дней",
          text: "Переезд с тяжёлых шаблонов на современный чистый код. Освежение визуального стиля, ускорение загрузки и сохранение всего наработанного SEO-трафика.",
        },
        {
          icon: "⚡",
          title: "Высоконагруженные",
          priceFrom: "от 70 000 ₽",
          term: "Срок: 7–13 дней",
          text: "Масштабная архитектура для крупных запусков. Сервер выдержит 20 000+ одновременных пользователей без падений и потери оплат в самые пиковые моменты.",
        },
      ]}
      capabilitiesCta={{ text: "🚀 Рассчитать стоимость проекта" }}
      process={[
        { num: "01", title: "Бриф и анализ", text: "Разбираю вашу задачу, аудиторию и конкурентов. Формирую логичную структуру и интерактивный прототип." },
        { num: "02", title: "Дизайн", text: "Создаю уникальный премиальный визуал. Согласовываем каждую деталь. Идеальная мобильная адаптация продумывается сразу." },
        { num: "03", title: "Вёрстка и разработка", text: "Чистый код, молниеносная загрузка, плавные анимации. Переношу макет в жизнь пиксель в пиксель." },
        { num: "04", title: "Тестирование", text: "Проверяю сайт на всех устройствах и браузерах. Устраняю баги до полного идеала перед запуском." },
        { num: "05", title: "Запуск и поддержка", text: "Деплою на мощный хостинг, настраиваю метрики и SEO. Передаю доступы и понятную видеоинструкцию." },
      ]}
      processCta={{ text: "Получить пошаговый план разработки" }}
      portfolio={[
        {
          emoji: "🌿",
          title: "Экосистема Detox Coach",
          text: "Комплексная платформа. Имиджевый сайт, магазин курсов и личный кабинет в одном месте.",
          tag: "Здоровье",
          href: "https://xn--d1aalolbfgcbhmi7ji.xn--p1ai/",
          image: detoxImg,
          miniHero: {
            variant: "detox",
            badge: "Platform",
            heading: "Detox Coach",
            subheading: "Мудрость природы. Онлайн-программы и магазин здоровья.",
          },
        },
        {
          emoji: "❄️",
          title: "Winter Detox",
          text: "Лендинг для запуска сезонного интенсива с упором на максимальную конверсию в заявку.",
          tag: "Лендинг",
          href: "https://wnterdetox.tilda.ws/p0",
          image: winterImg,
          miniHero: {
            variant: "winter",
            badge: "Landing",
            heading: "WINTER DETOX",
            subheading: "Тёплый интенсив для холодного сезона.",
          },
        },
        {
          emoji: "✈️",
          title: "Проект «Мир Полёта»",
          text: "Сайт для центра авиатренажёров. Передаём эмоции полёта через экран и продаём сертификаты.",
          tag: "Развлечения",
          href: "https://mirpoleta.ru/",
          image: aviaImg,
          miniHero: {
            variant: "avia",
            badge: "Corporate",
            heading: "МИР ПОЛЁТА",
            subheading: "Авиатренажёры в Москве. Эмоции и бронирование.",
          },
        },
        {
          emoji: "🔥",
          title: "Sale Detox Coach",
          text: "Промо-лендинг распродажи 11.11. Яркий визуал Black Friday и фокус на конверсию в покупку курсов.",
          tag: "Промо-лендинг",
          href: "https://saledetoxcoach.lovable.app",
          image: saleDetoxImg,
          miniHero: {
            variant: "detox",
            badge: "Promo",
            heading: "11.11 SALE",
            subheading: "Грандиозная распродажа курсов и программ здоровья.",
          },
        },
        {
          emoji: "🌱",
          title: "База здоровья",
          text: "Лендинг курса о фундаментальных основах здоровья. Чистая структура и понятная навигация по программе.",
          tag: "Курс",
          href: "https://xn--d1aalolbfgcbhmi7ji.xn--p1ai/baseofhealth",
          image: baseofhealthImg,
          miniHero: {
            variant: "detox",
            badge: "Course",
            heading: "БАЗА ЗДОРОВЬЯ",
            subheading: "Фундамент крепкого здоровья на каждый день.",
          },
        },
        {
          emoji: "🌿",
          title: "Ведение Юлии Сурминой",
          text: "Премиальный лендинг индивидуального ведения. Натуральная палитра, акцент на доверие и экспертность.",
          tag: "Лендинг услуги",
          href: "https://xn--d1aalolbfgcbhmi7ji.xn--p1ai/vedenie",
          image: vedenieImg,
          miniHero: {
            variant: "detox",
            badge: "Service",
            heading: "ВЕДЕНИЕ",
            subheading: "Интегративная 3D-терапия от первопричины болезни.",
          },
        },
        {
          emoji: "🎓",
          title: "Школа коучей",
          text: "Лендинг международной школы обучения. Эмоциональный визуал и фокус на трансформацию профессии.",
          tag: "Образование",
          href: "https://xn--d1aalolbfgcbhmi7ji.xn--p1ai/coach",
          image: coachImg,
          miniHero: {
            variant: "detox",
            badge: "School",
            heading: "ОБУЧИСЬ",
            subheading: "Самой востребованной профессии — коуч по здоровью.",
          },
        },
        {
          emoji: "👶",
          title: "Курс детского здоровья",
          text: "Лендинг для родителей. Тёплая природная эстетика и понятная воронка к покупке курса.",
          tag: "Курс",
          href: "https://xn--d1aalolbfgcbhmi7ji.xn--p1ai/deti",
          image: detiImg,
          miniHero: {
            variant: "detox",
            badge: "Kids",
            heading: "ДЕТИ",
            subheading: "Курс детского здоровья от Юлии Сурминой.",
          },
        },
        {
          emoji: "🥦",
          title: "Интенсив «Питание — это просто»",
          text: "Сезонный лендинг 10-дневного интенсива. Сильная типографика и чёткая ценностная упаковка.",
          tag: "Интенсив",
          href: "https://xn--d1aalolbfgcbhmi7ji.xn--p1ai/intensiv_pitanie",
          image: intensivPitanieImg,
          miniHero: {
            variant: "detox",
            badge: "Intensive",
            heading: "ПИТАНИЕ — ЭТО ПРОСТО",
            subheading: "10-дневный интенсив для мам.",
          },
        },
        {
          emoji: "🛍️",
          title: "Магазин здоровья",
          text: "Каталог натуральных продуктов и услуг. Чистый минимализм, удобная навигация и эстетика wellness.",
          tag: "Магазин",
          href: "https://xn--d1aalolbfgcbhmi7ji.xn--p1ai/shop",
          image: shopImg,
          miniHero: {
            variant: "detox",
            badge: "Shop",
            heading: "МАГАЗИН",
            subheading: "Натуральные продукты для здоровой жизни.",
          },
        },
        {
          emoji: "🌅",
          title: "Очищение для взрослых",
          text: "Промо-лендинг легендарной программы. Сочный градиентный визуал и эмоциональный посыл.",
          tag: "Программа",
          href: "https://xn--d1aalolbfgcbhmi7ji.xn--p1ai/vzrosly",
          image: vzroslyImg,
          miniHero: {
            variant: "detox",
            badge: "Program",
            heading: "ВЗРОСЛЫЕ",
            subheading: "Очистите организм и обновите здоровье.",
          },
        },
      ]}
      portfolioCta={{ text: "Записаться на консультацию" }}
      specialOffer={{
        badge: "Весеннее предложение до 31.05",
        title: "Лендинг под ключ",
        features: [
          "Маркетинговый анализ и архитектура",
          "Премиальный UX/UI дизайн",
          "Адаптивная вёрстка (Mobile-first)",
          "Базовая SEO-настройка и подключение домена",
        ],
        oldPrice: "40 000 ₽",
        newPrice: "20 000 ₽",
        ctaText: "Зафиксировать цену",
      }}
      ctaBanner={{
        title: "Давайте обсудим вашу цифровую архитектуру",
        text: "Опишите вашу бизнес-задачу, и я предложу элегантное технологическое решение.",
        buttons: [
          { label: "Telegram", href: CONTACTS.telegram, primary: true },
          { label: "WhatsApp", href: CONTACTS.whatsapp },
          { label: "MAX", href: CONTACTS.max },
        ],
      }}
      faq={[
        { q: "Сколько стоит лендинг?", a: "Зависит от сложности: простой — от 20 000 ₽, с анимациями и интерактивом — от 50 000 ₽. Напишите задачу — дам точную оценку." },
        { q: "Сколько времени занимает?", a: "Лендинг — от 3 дней. Многостраничный сайт — от 2 недель. Интернет-магазин — от 3 недель." },
        { q: "Вы делаете дизайн или только вёрстку?", a: "Полный цикл: от концепции и дизайна до работающего сайта. Могу работать и по вашему макету." },
        { q: "Что с SEO?", a: "Семантическая вёрстка, мета-теги, скорость, мобильная версия — базовая SEO-оптимизация входит в каждый проект." },
        { q: "А если нужно что-то поменять после запуска?", a: "Даю инструкцию по редактированию. Мелкие правки — бесплатно в течение 2 недель. Дальше — по договорённости." },
        { q: "Работаете с Tilda / WordPress?", a: "Могу, но рекомендую кастом: быстрее, гибче, без ежемесячных платежей за платформу." },
      ]}
    />
  ),
});
