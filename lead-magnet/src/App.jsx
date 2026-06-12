import { useEffect, useRef, useState } from 'react'
import { QUESTIONS } from './questions.js'

// Платёжная ссылка трипваера (ЮKassa). Открывается в новой вкладке.
const TRIPWIRE_URL = 'https://yookassa.ru/my/i/aiwtL6QItk4c/l'

const ANALYZE_PHRASES = ['Анализирую...', 'Ищу зоны потерь...', 'Готовлю результат...']
const MIN_ANALYZE_MS = 3000

// Запасной диагноз, если API недоступен — воронка не должна умирать.
const FALLBACK_RESULT = {
  headline: 'Твой запуск работает. Но деньги утекают.',
  zones: [
    {
      title: 'Зависимость от тебя',
      pain: 'Без твоего ежедневного участия продажи проседают — бизнес держится на тебе, а не на системе.',
    },
    {
      title: 'Потеря заявок',
      pain: 'Люди пишут «интересно» и пропадают — каждый недожатый лид это минус в кассе.',
    },
    {
      title: 'Слепая воронка',
      pain: 'Ты не видишь на каком этапе теряешь прибыль — а значит не можешь это исправить.',
    },
  ],
  teaser: 'Это только то что видно на поверхности. За каждой зоной — конкретная сумма которую ты теряешь каждый месяц.',
}

export default function App() {
  // screen: 'landing' | 0..4 (вопросы) | 'analyzing' | 'result'
  const [screen, setScreen] = useState('landing')
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)
  const [phraseIdx, setPhraseIdx] = useState(0)
  const analyzeStarted = useRef(false)

  const start = () => {
    setAnswers([])
    setResult(null)
    analyzeStarted.current = false
    setScreen(0)
  }

  const answer = (questionIdx, option) => {
    const next = [...answers]
    next[questionIdx] = option
    setAnswers(next)
    if (questionIdx < QUESTIONS.length - 1) {
      setScreen(questionIdx + 1)
    } else {
      setScreen('analyzing')
    }
  }

  const goBack = (questionIdx) => {
    if (questionIdx === 0) setScreen('landing')
    else setScreen(questionIdx - 1)
  }

  // Экран анализа: крутим фразы + запрос к API, минимум 3 секунды
  useEffect(() => {
    if (screen !== 'analyzing' || analyzeStarted.current) return
    analyzeStarted.current = true
    setPhraseIdx(0)

    const phraseTimer = setInterval(() => {
      setPhraseIdx((i) => Math.min(i + 1, ANALYZE_PHRASES.length - 1))
    }, 1000)

    const startedAt = Date.now()

    const fetchResult = async () => {
      try {
        const res = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers }),
        })
        if (!res.ok) throw new Error(`API ${res.status}`)
        const data = await res.json()
        if (!data || !Array.isArray(data.zones) || data.zones.length === 0) {
          throw new Error('Bad payload')
        }
        return data
      } catch (e) {
        console.error('analyze failed:', e)
        return FALLBACK_RESULT
      }
    }

    fetchResult().then((data) => {
      const elapsed = Date.now() - startedAt
      const wait = Math.max(0, MIN_ANALYZE_MS - elapsed)
      setTimeout(() => {
        clearInterval(phraseTimer)
        setResult(data)
        setScreen('result')
      }, wait)
    })

    return () => clearInterval(phraseTimer)
  }, [screen, answers])

  if (screen === 'landing') return <Landing onStart={start} />
  if (typeof screen === 'number') {
    return (
      <Question
        idx={screen}
        total={QUESTIONS.length}
        question={QUESTIONS[screen]}
        selected={answers[screen]}
        onAnswer={(opt) => answer(screen, opt)}
        onBack={() => goBack(screen)}
      />
    )
  }
  if (screen === 'analyzing') return <Analyzing phrase={ANALYZE_PHRASES[phraseIdx]} />
  return <Result result={result || FALLBACK_RESULT} />
}

function Landing({ onStart }) {
  return (
    <main className="screen landing fade-in">
      <p className="eyebrow">AI-диагностика запуска</p>
      <h1 className="landing-title">
        Где твой запуск <em>теряет деньги?</em>
      </h1>
      <p className="landing-sub">5 вопросов — и AI покажет 3 зоны где утекает прибыль</p>
      <button className="btn-gold" onClick={onStart}>
        Начать диагностику — бесплатно
      </button>
      <p className="fine-print">Займёт 1 минуту</p>
    </main>
  )
}

function Question({ idx, total, question, selected, onAnswer, onBack }) {
  return (
    <main className="screen question fade-in" key={question.id}>
      <div className="progress-row">
        <button className="btn-back" onClick={onBack} aria-label="Назад">
          ← Назад
        </button>
        <span className="progress-label">
          {idx + 1}/{total}
        </span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((idx + 1) / total) * 100}%` }} />
      </div>
      <h2 className="question-text">{question.text}</h2>
      <div className="options">
        {question.options.map((opt) => (
          <button
            key={opt}
            className={`option-btn${selected === opt ? ' selected' : ''}`}
            onClick={() => onAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </main>
  )
}

function Analyzing({ phrase }) {
  return (
    <main className="screen analyzing fade-in">
      <div className="pulse-ring">
        <div className="pulse-core" />
      </div>
      <p className="analyzing-text" key={phrase}>
        {phrase}
      </p>
    </main>
  )
}

function Result({ result }) {
  return (
    <main className="screen result fade-in">
      <p className="eyebrow">Вот что нашёл AI</p>
      <h1 className="result-headline">{result.headline}</h1>

      <div className="zones">
        {result.zones.map((zone, i) => (
          <div className="zone-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="zone-title">
              <span className="zone-dot" aria-hidden="true">
                🔴
              </span>
              {zone.title}
            </div>
            <p className="zone-pain">{zone.pain}</p>
          </div>
        ))}
      </div>

      <p className="teaser">{result.teaser}</p>

      <div className="cta-block">
        <h2 className="cta-title">Хочешь полную карту?</h2>
        <ul className="cta-list">
          <li>✓ Твой архетип эксперта</li>
          <li>✓ Полную карту дыр с приоритетами</li>
          <li>✓ AI-решение под каждую проблему</li>
          <li>✓ План действий на 14 дней</li>
        </ul>
        <div className="cta-price">3 900 ₽</div>
        <a
          className="btn-gold cta-btn"
          href={TRIPWIRE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Получить полный разбор →
        </a>
        <p className="fine-print">После самоаудита — скидка 50% на стратегический аудит</p>
        <p className="fine-print pay-note">
          После оплаты напиши <strong>ОПЛАЧЕНО</strong> в личку{' '}
          <a className="pay-link" href="https://t.me/Dary_chik" target="_blank" rel="noopener noreferrer">
            @Dary_chik
          </a>{' '}
          — пришлю доступ к аудиту в течение часа
        </p>
      </div>
    </main>
  )
}
