# AI-диагностик запуска (лид-магнит)

Бесплатное приложение: 5 вопросов → Claude API → короткий диагноз (2-3 зоны потерь) → CTA на трипваер 3 900 ₽.

## Стек

- React + Vite
- Serverless-функция Vercel (`/api/analyze`) — ключ API не светится в браузере
- Claude API, модель `claude-sonnet-4-6`

## Локальный запуск

```bash
npm install
npx vercel dev   # фронт + serverless вместе (нужен Vercel CLI)
```

> `npm run dev` поднимет только фронт без `/api/analyze` — на экране результата сработает запасной диагноз.

## Деплой

1. В Vercel → Settings → Environment Variables добавить `ANTHROPIC_API_KEY`.
2. `vercel --prod` из папки `lead-magnet/` (или GitHub → Vercel автодеплой, root directory = `lead-magnet`).

## Связка с трипваером

Кнопка «Получить полный разбор» ведёт на `TRIPWIRE_URL` (константа в начале `src/App.jsx`) с UTM-метками `utm_source=lead-magnet`. Поменяй на реальный адрес трипваера.
