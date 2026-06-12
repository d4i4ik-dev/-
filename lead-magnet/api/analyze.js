import Anthropic from '@anthropic-ai/sdk'

// ВАЖНО: модель из ТЗ (claude-sonnet-4-20250514) выводится из эксплуатации
// 15 июня 2026 и начнёт возвращать 404. Используем официальную замену.
const MODEL = 'claude-sonnet-4-6'

const SYSTEM_PROMPT = `Ты — AI-аналитик запусков от имени Дарьи Попельнюк, архитектора системных запусков через AI.

Задача: по 5 ответам определить 2-3 главные зоны потерь в запуске пользователя и вернуть КОРОТКИЙ диагноз. БЕЗ решений — только обозначить проблему. Решения продаются в платном трипваере.

Зоны потерь (выбери 2-3 самые критичные):
- Зависимость от личного участия (бизнес держится на эксперте)
- Потеря заявок (нет системы дожима)
- Слепая воронка (нет аналитики, не видно где утекает)
- Операционная перегрузка (слишком много времени на рутину)
- Потолок роста (система не масштабируется)

Тон: прямой, конкретный, на «ты». Без воды. Каждую зону — одним ёмким предложением которое цепляет за живое.

Отвечай ТОЛЬКО валидным JSON без markdown:

{
  "headline": "Короткий цепляющий вывод одной фразой",
  "zones": [
    { "title": "Название зоны", "pain": "Одно предложение что именно не так и почему это стоит денег" }
  ],
  "teaser": "Одна фраза которая создаёт желание узнать решение"
}`

// JSON-схема ответа: structured outputs гарантируют валидный JSON от модели.
const RESULT_SCHEMA = {
  type: 'object',
  properties: {
    headline: { type: 'string' },
    zones: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          pain: { type: 'string' },
        },
        required: ['title', 'pain'],
        additionalProperties: false,
      },
    },
    teaser: { type: 'string' },
  },
  required: ['headline', 'zones', 'teaser'],
  additionalProperties: false,
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { answers } = req.body || {}
  if (!Array.isArray(answers) || answers.length !== 5 || answers.some((a) => typeof a !== 'string' || !a.trim())) {
    return res.status(400).json({ error: 'Expected { answers: [5 strings] }' })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY is not set')
    return res.status(500).json({ error: 'Server misconfigured' })
  }

  const userMessage = answers
    .map((a, i) => `Вопрос ${i + 1}: ${a.slice(0, 200)}`)
    .join('\n')

  const client = new Anthropic() // ключ берётся из ANTHROPIC_API_KEY

  try {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 800,
      temperature: 0.3,
      system: SYSTEM_PROMPT,
      output_config: {
        format: { type: 'json_schema', schema: RESULT_SCHEMA },
      },
      messages: [{ role: 'user', content: userMessage }],
    })

    const textBlock = response.content.find((b) => b.type === 'text')
    if (!textBlock) throw new Error('No text block in response')

    const result = JSON.parse(textBlock.text)

    // Подстраховка: 2-3 зоны, не больше
    result.zones = (result.zones || []).slice(0, 3)
    if (result.zones.length === 0) throw new Error('No zones in result')

    return res.status(200).json(result)
  } catch (err) {
    console.error('Claude API error:', err)
    return res.status(502).json({ error: 'Analysis failed' })
  }
}
