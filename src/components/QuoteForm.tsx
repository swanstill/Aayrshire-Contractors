"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const steps = [
  { num: 1, label: "Property Type" },
  { num: 2, label: "Service Type" },
  { num: 3, label: "Timeframe" },
  { num: 4, label: "Postcode" },
  { num: 5, label: "Your Name" },
  { num: 6, label: "Email" },
  { num: 7, label: "Phone Number" },
];

const propertyOptions = [
  { value: "Detached", img: "/icons/Detached.png" },
  { value: "Semi Detached", img: "/icons/semi-detached.png" },
  { value: "Terraced", img: "/icons/Terraced.png" },
  { value: "Bungalow", img: "/icons/Bungalow.png" },
  { value: "Cottage", img: "/icons/Cottage.png" },
  { value: "Flat", img: "/icons/Flat.png" },
  { value: "Commercial", img: "/icons/Commercial-Building.png" },
  { value: "Other", img: "/icons/Others.png" },
];

const serviceOptions = [
  { value: "Landscaping", icon: "fa-seedling" },
  { value: "Patios & Paving", icon: "fa-mountain-sun" },
  { value: "Both", icon: "fa-check-double" },
];

const timeframeOptions = [
  { value: "As soon as possible", icon: "fa-calendar-day" },
  { value: "Within 1 month", icon: "fa-calendar-week" },
  { value: "Within 3 months", icon: "fa-calendar" },
  { value: "Just looking for ideas", icon: "fa-lightbulb" },
];

export default function QuoteForm() {
  const [step, setStep] = useState<Step>(1);
  const [propertyType, setPropertyType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [postcode, setPostcode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showToast, setShowToast] = useState(false);

  const canNext = () => {
    switch (step) {
      case 1: return !!propertyType;
      case 2: return !!serviceType;
      case 3: return !!timeframe;
      case 4: return postcode.trim().length >= 3;
      case 5: return name.trim().length >= 2;
      case 6: return email.includes("@") && email.includes(".");
      case 7: return phone.trim().length >= 7;
      default: return false;
    }
  };

  const handleNext = () => {
    if (!canNext()) return;
    if (step < 7) setStep((step + 1) as Step);
  };

  const handleBack = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  const handleSubmit = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
    setTimeout(() => {
      setStep(1);
      setPropertyType("");
      setServiceType("");
      setTimeframe("");
      setPostcode("");
      setName("");
      setEmail("");
      setPhone("");
    }, 500);
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return "What type of property do you have?";
      case 2: return "What service do you need?";
      case 3: return "What's your preferred timeframe?";
      case 4: return "What's your postcode?";
      case 5: return "What's your name?";
      case 6: return "What's your email address?";
      case 7: return "What's your phone number?";
    }
  };

  return (
    <section id="quote" className="py-[50px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] glow-orange opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* ═══ ROW 1 — Header ═══ */}
        <Reveal>
          <div className="text-center mb-14">
            <div className="marker-line justify-center mb-4">Get Started Today</div>
            <h2 className="font-display font-extrabold text-4xl lg:text-6xl leading-tight tracking-tight text-[var(--fg)]">
              Get Your Free{" "}
              <span className="text-gradient">No-Obligation Quote</span>
            </h2>
            <p className="text-[var(--muted)] mt-4 leading-relaxed text-lg max-w-2xl mx-auto">
              Fill out the form and one of our specialists will be in touch
              within 24 hours to arrange your free consultation.
            </p>
          </div>
        </Reveal>

        {/* ═══ ROW 2 — Form ═══ */}
        <Reveal>
          <div className="max-w-4xl mx-auto w-full" style={{ backgroundColor: "#0D0D0D" }}>
              {/* White form card */}
              <div className="bg-white rounded-xl w-full mx-auto p-3 md:p-6 shadow-xl overflow-hidden">
                {/* Step indicator */}
                <div className="w-full mx-auto py-1 px-1 md:py-3 md:px-3">
                  <div className="relative">
                    {/* Progress bar — desktop only */}
                    <div className="hidden md:block absolute top-3.5 left-0 right-0 h-[6px] -translate-y-1/2 pointer-events-none z-0">
                      <div
                        className="absolute top-0 bottom-0 bg-[#ccc] rounded-full"
                        style={{
                          left: "calc(100% / 7 / 2)",
                          right: "calc(100% / 7 / 2)",
                        }}
                      />
                      <div
                        className="absolute top-0 bottom-0 h-full rounded-full transition-all duration-300"
                        style={{
                          background: "#c6ac79",
                          left: "calc(100% / 7 / 2)",
                          width: `calc((100% - 100% / 7) * ${(step - 1) / 6})`,
                        }}
                      />
                    </div>

                    {/* Step circles */}
                    <div className="flex items-start justify-center relative z-10 gap-0.5 md:gap-2 overflow-x-auto pb-0.5">
                      {steps.map((s) => (
                        <div
                          key={s.num}
                          className="shrink-0 md:flex-1 flex flex-col items-center"
                          style={{ minWidth: "40px" }}
                        >
                          <div
                            className="w-7 h-7 md:w-8 md:h-8 shrink-0 flex items-center justify-center rounded-full transition-all duration-300 text-white text-xs md:text-sm font-bold"
                            style={{
                              backgroundColor:
                                step === s.num
                                  ? "#010203"
                                  : step > s.num
                                    ? "#c6ac79"
                                    : "#ccc",
                            }}
                          >
                            {step > s.num ? (
                              <i className="fa-solid fa-check text-[9px] md:text-[11px]"></i>
                            ) : (
                              s.num
                            )}
                          </div>
                          <h6
                            className="text-[7px] md:text-xs font-semibold mt-1 text-center leading-tight hidden md:block"
                            style={{
                              color: step === s.num ? "#010203" : "#6b7280",
                            }}
                          >
                            {s.label}
                          </h6>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step title */}
              <div className="text-center px-2 mt-5 mb-3">
                <h3 className="text-lg md:text-2xl font-bold text-white">
                  {getStepTitle()}
                </h3>
              </div>

              {/* Options / Inputs */}
              <div className="min-h-[180px] flex items-start justify-center mb-4 relative z-10" style={{ touchAction: "manipulation" }}>
                {/* Step 1 - Property Type */}
                {step === 1 && (
                  <div className="flex flex-wrap items-center justify-center gap-3 w-full px-2">
                    {propertyOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setPropertyType(opt.value);
                          setTimeout(() => handleNext(), 200);
                        }}
                        className="flex flex-col gap-1.5 py-3 px-3 items-center justify-center rounded-xl transition-all border-2 select-none cursor-pointer bg-white"
                        style={{
                          width: "calc(33.333% - 10px)",
                          maxWidth: "140px",
                          minHeight: "120px",
                          backgroundColor: propertyType === opt.value ? "#c6ac79" : "white",
                          borderColor: propertyType === opt.value ? "#c6ac79" : "#e5e7eb",
                        }}
                      >
                        <img
                          src={opt.img}
                          alt={opt.value}
                          className="w-10 h-10 md:w-12 md:h-12 object-contain"
                          style={{
                            filter: propertyType === opt.value
                              ? "brightness(0) invert(1)"
                              : "brightness(0) saturate(100%) invert(64%) sepia(20%) saturate(546%) hue-rotate(356deg) brightness(93%) contrast(87%)",
                          }}
                        />
                        <p
                          className="w-full px-1 font-bold text-center text-[10px] md:text-xs leading-tight pointer-events-none"
                          style={{
                            color: propertyType === opt.value ? "white" : "#111827",
                          }}
                        >
                          {opt.value}
                        </p>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 2 - Service Type */}
                {step === 2 && (
                  <div className="flex flex-wrap items-center justify-center gap-3 w-full px-4">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setServiceType(opt.value);
                          setTimeout(() => handleNext(), 200);
                        }}
                        className="flex flex-col gap-2 py-4 px-5 items-center justify-center rounded-xl transition-all border-2 select-none cursor-pointer bg-white"
                        style={{
                          width: "calc(50% - 8px)",
                          maxWidth: "180px",
                          minHeight: "130px",
                          backgroundColor: serviceType === opt.value ? "#c6ac79" : "white",
                          borderColor: serviceType === opt.value ? "#c6ac79" : "#e5e7eb",
                        }}
                      >
                        <i
                          className={`fa-solid ${opt.icon} text-3xl md:text-4xl`}
                          style={{
                            color: serviceType === opt.value ? "white" : "#4b5563",
                          }}
                        ></i>
                        <p
                          className="w-full px-1 font-bold text-center text-xs md:text-sm leading-tight pointer-events-none"
                          style={{
                            color: serviceType === opt.value ? "white" : "#111827",
                          }}
                        >
                          {opt.value}
                        </p>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 3 - Timeframe */}
                {step === 3 && (
                  <div className="flex flex-wrap items-center justify-center gap-3 w-full px-4">
                    {timeframeOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setTimeframe(opt.value);
                          setTimeout(() => handleNext(), 200);
                        }}
                        className="flex flex-col gap-2 py-4 px-5 items-center justify-center rounded-xl transition-all border-2 select-none cursor-pointer bg-white"
                        style={{
                          width: "calc(50% - 8px)",
                          maxWidth: "200px",
                          minHeight: "110px",
                          backgroundColor: timeframe === opt.value ? "#c6ac79" : "white",
                          borderColor: timeframe === opt.value ? "#c6ac79" : "#e5e7eb",
                        }}
                      >
                        <i
                          className={`fa-solid ${opt.icon} text-2xl md:text-3xl`}
                          style={{
                            color: timeframe === opt.value ? "white" : "#4b5563",
                          }}
                        ></i>
                        <p
                          className="w-full px-1 font-bold text-center text-[11px] md:text-sm leading-tight pointer-events-none"
                          style={{
                            color: timeframe === opt.value ? "white" : "#111827",
                          }}
                        >
                          {opt.value}
                        </p>
                      </button>
                    ))}
                  </div>
                )}

                {/* Steps 4-7 - Text inputs */}
                {(step === 4 || step === 5 || step === 6 || step === 7) && (
                  <div className="w-full max-w-sm mx-auto px-2">
                    <input
                      type={
                        step === 4 ? "text" :
                        step === 5 ? "text" :
                        step === 6 ? "email" : "tel"
                      }
                      className="w-full px-5 py-4 rounded-xl border-2 text-base md:text-lg outline-none transition-all bg-white"
                      style={{
                        borderColor: "#e5e7eb",
                        color: "#111827",
                      }}
                      placeholder={
                        step === 4 ? "e.g. KA1 1AB" :
                        step === 5 ? "Your full name" :
                        step === 6 ? "your@email.com" :
                        "e.g. 07427 009786"
                      }
                      value={
                        step === 4 ? postcode :
                        step === 5 ? name :
                        step === 6 ? email : phone
                      }
                      onChange={(e) => {
                        const val = e.target.value;
                        if (step === 4) setPostcode(val);
                        else if (step === 5) setName(val);
                        else if (step === 6) setEmail(val);
                        else if (step === 7) setPhone(val);
                      }}
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && canNext()) {
                          e.preventDefault();
                          if (step === 7) handleSubmit();
                          else handleNext();
                        }
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Navigation — Back + hint text */}
              <div className="flex justify-center items-center max-w-2xl mx-auto w-full px-2 pb-2 gap-4">
                {step > 1 && (
                <button
                  onClick={handleBack}
                  className="px-6 md:px-8 py-3 rounded-full font-semibold transition-all text-sm md:text-base cursor-pointer"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "white",
                  }}
                >
                  &larr; Back
                </button>
                )}

                {step >= 4 && step < 7 && (
                  <span className="text-sm text-white/40 hidden sm:block">
                    press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/60 text-xs font-mono">Enter</kbd> to continue
                  </span>
                )}

                {step === 7 && (
                  <span className="text-sm text-white/40 hidden sm:block">
                    press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/60 text-xs font-mono">Enter</kbd> to submit
                  </span>
                )}
              </div>
            </div>
        </Reveal>
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-[var(--bg-2)] border border-[var(--accent)] rounded-xl px-6 py-4 flex items-center gap-3 shadow-2xl transition-all duration-500 z-[100] ${
          showToast
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <i className="fa-solid fa-circle-check text-[var(--accent)] text-xl"></i>
        <div>
          <div className="font-semibold text-sm text-[var(--fg)]">
            Quote request received!
          </div>
          <div className="text-xs text-[var(--muted)]">
            We&apos;ll be in touch within 24 hours.
          </div>
        </div>
      </div>
    </section>
  );
}
