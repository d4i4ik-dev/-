import { useEffect, useRef, useState } from "react";
import { DIAGNOSTICS } from "@/data/diagnostics";
import { CONTACTS } from "@/lib/contacts";

export function Diagnostics() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [nicheIdx, setNicheIdx] = useState<number | null>(null);
  const [problemIdx, setProblemIdx] = useState<number | null>(null);

  const niche = nicheIdx !== null ? DIAGNOSTICS[nicheIdx] : null;
  const item = niche && problemIdx !== null ? niche.items[problemIdx] : null;

  // Skip the very first render so opening the home page does NOT auto-scroll
  // down to #diagnostics. Only scroll when the user actually interacts with
  // the diagnostics widget (changing step).
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    requestAnimationFrame(() => {
      document
        .querySelectorAll(".diag .reveal:not(.visible)")
        .forEach((el) => el.classList.add("visible"));

      const section = document.getElementById("diagnostics");
      if (section) {
        const navOffset = 80;
        const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  }, [step]);

  return (
    <section className="section diag" id="diagnostics">
      <div className="container">
        <div className="diag-head reveal">
          <h2>Найдите решение для своей ниши</h2>
          <p>Выберите сферу — увидьте проблему — получите готовое решение</p>
        </div>

        <div className="diag-steps reveal">
          <div className={`diag-step${step >= 1 ? " active" : ""}`}>
            <div className="diag-step-dot"></div>Ниша
          </div>
          <div className="diag-step-line"></div>
          <div className={`diag-step${step >= 2 ? " active" : ""}`}>
            <div className="diag-step-dot"></div>Проблема
          </div>
          <div className="diag-step-line"></div>
          <div className={`diag-step${step >= 3 ? " active" : ""}`}>
            <div className="diag-step-dot"></div>Решение
          </div>
        </div>

        {step === 1 && (
          <div className="niche-grid reveal">
            {DIAGNOSTICS.map((n, i) => (
              <button
                key={n.name}
                className="niche-btn"
                onClick={() => {
                  setNicheIdx(i);
                  setStep(2);
                }}
              >
                <span className="niche-emoji">{n.emoji}</span>
                {n.name}
                <span className="niche-count">{n.items.length}</span>
              </button>
            ))}
          </div>
        )}

        {step === 2 && niche && (
          <div>
            <button className="problems-back" onClick={() => setStep(1)}>
              ← Все ниши
            </button>
            <h3 className="problems-title">
              {niche.emoji} {niche.name}
            </h3>
            <div className="problems-list">
              {niche.items.map((it, j) => (
                <button
                  key={j}
                  className="problem-btn"
                  onClick={() => {
                    setProblemIdx(j);
                    setStep(3);
                  }}
                >
                  {it.p}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && item && (
          <div>
            <button className="problems-back" onClick={() => setStep(2)}>
              ← Назад к проблемам
            </button>
            <div className="sol-card">
              <div className="sol-problem">
                <strong>Проблема:</strong> {item.p}
              </div>
              <div className="sol-section">
                <div className="sol-label green">Решение</div>
                <div className="sol-text">{item.s}</div>
              </div>
              <div className="sol-result">
                <div className="sol-label blue">Результат</div>
                <div className="sol-text">{item.r}</div>
              </div>
              <div className="sol-cta">
                <a
                  href={CONTACTS.telegram}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Обсудить это решение
                </a>
                <button className="btn btn-ghost" onClick={() => setStep(1)}>
                  Посмотреть другие ниши
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
