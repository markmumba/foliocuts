"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Plus } from "lucide-react";

export default function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const id = useId();
  const content = useRef<HTMLParagraphElement>(null);
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const element = content.current;
    if (!element) return;
    // Keep the target accurate when the viewport, font, or answer changes.
    const measure = () => setHeight(element.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="faq-item" data-instant={instant || undefined}>
      <h3>
        <button
          type="button"
          className="faq-trigger"
          id={`${id}-question`}
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={(event) => {
            setInstant(event.detail === 0);
            if (content.current) {
              setHeight(content.current.getBoundingClientRect().height);
            }
            setOpen((current) => !current);
          }}
        >
          {question}
          <Plus size={18} aria-hidden="true" />
        </button>
      </h3>
      <div
        id={`${id}-answer`}
        className="faq-answer"
        role="region"
        aria-labelledby={`${id}-question`}
        aria-hidden={!open}
        inert={!open}
        style={{ height: open ? height : 0, opacity: open ? 1 : 0 }}
      >
        <p ref={content}>{answer}</p>
      </div>
    </article>
  );
}
