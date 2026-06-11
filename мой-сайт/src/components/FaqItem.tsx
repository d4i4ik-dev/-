import { useState, type ReactNode } from "react";

interface FaqItemProps {
  question: string;
  children: ReactNode;
}

export function FaqItem({ question, children }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen((v) => !v)}>
        {question}
      </button>
      <div className="faq-a">{children}</div>
    </div>
  );
}
