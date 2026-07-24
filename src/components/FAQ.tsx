"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    question: "How long does a driveway installation take?",
    answer:
      "Most driveway installations take around 3–5 days, depending on your property size and the type of surfacing. We provide a clear timescale beforehand and keep you updated throughout the project.",
  },
  {
    question: "Do you handle cleanup after the job?",
    answer:
      "Yes — our team takes care of all waste and cleanup once your driveway or landscaping work is finished. We always leave your property tidy, safe, and looking its best.",
  },
  {
    question: "Are you fully insured?",
    answer:
      "Absolutely. We're fully insured and qualified, and every job comes with a full workmanship guarantee for complete peace of mind.",
  },
  {
    question: "What happens if it rains during the job?",
    answer:
      "If the weather changes, we use temporary coverings to protect the work area. Work resumes as soon as conditions are safe and dry.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes — all our inspections and quotes are completely free and no-obligation. You'll know exactly what's needed and the cost before any work begins.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-[50px] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] glow-soft opacity-50"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative">
        <Reveal>
          <div className="text-center mb-14">
            <div className="marker-line justify-center mb-4">FAQ</div>
            <h2 className="font-display font-extrabold text-4xl lg:text-6xl leading-tight tracking-tight text-[var(--fg)]">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-[var(--muted)] mt-4 leading-relaxed text-lg max-w-2xl mx-auto">
              Got questions? We&apos;ve got answers. Here&apos;s everything you
              need to know before getting started.
            </p>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i}>
              <div
                className="rounded-2xl border transition-all duration-300 cursor-pointer select-none"
                style={{
                  backgroundColor:
                    openIndex === i
                      ? "var(--bg-2)"
                      : "var(--bg)",
                  borderColor:
                    openIndex === i
                      ? "rgba(198,172,121,0.3)"
                      : "var(--line)",
                }}
                onClick={() => toggle(i)}
              >
                <div className="flex items-center justify-between px-6 lg:px-8 py-5">
                  <h3
                    className="font-display font-bold text-base lg:text-lg pr-4"
                    style={{
                      color:
                        openIndex === i
                          ? "var(--fg)"
                          : "var(--fg-2)",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor:
                        openIndex === i
                          ? "var(--accent)"
                          : "var(--bg-3)",
                      transform:
                        openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <i
                      className="fa-solid fa-plus text-sm"
                      style={{
                        color:
                          openIndex === i ? "#fff" : "var(--muted)",
                      }}
                    ></i>
                  </div>
                </div>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openIndex === i ? "300px" : "0px",
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <div className="px-6 lg:px-8 pb-6">
                    <p className="text-[var(--muted)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
