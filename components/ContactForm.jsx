"use client";

import { useState } from "react";

const inputClass =
  "focus-ring w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate/50 outline-none focus:border-cyan transition-colors";
const labelClass = "block text-xs font-semibold text-slate-dark mb-1.5";

export default function ContactForm({ dict, defaultTab = "b2b" }) {
  const [tab, setTab] = useState(defaultTab);
  const [submitted, setSubmitted] = useState(false);
  const f = dict.contact.form;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl bg-white shadow-xl shadow-navy/5 ring-1 ring-navy/5 overflow-hidden">
      <div className="grid grid-cols-2">
        <button
          type="button"
          onClick={() => { setTab("b2b"); setSubmitted(false); }}
          className={`focus-ring px-4 py-4 text-xs sm:text-sm font-semibold transition-colors ${
            tab === "b2b" ? "bg-navy text-mist-100" : "bg-mist-200 text-slate-dark hover:bg-mist-300"
          }`}
        >
          {dict.contact.tabB2B}
        </button>
        <button
          type="button"
          onClick={() => { setTab("b2c"); setSubmitted(false); }}
          className={`focus-ring px-4 py-4 text-xs sm:text-sm font-semibold transition-colors ${
            tab === "b2c" ? "bg-navy text-mist-100" : "bg-mist-200 text-slate-dark hover:bg-mist-300"
          }`}
        >
          {dict.contact.tabB2C}
        </button>
      </div>

      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan/15">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#0B93A3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-display text-lg text-navy">
              {tab === "b2b" ? f.b2bTitle : f.b2cTitle}
            </p>
            <p className="mt-2 text-sm text-slate max-w-sm mx-auto">{f.note}</p>
          </div>
        ) : (
          <>
            <h3 className="font-display text-xl text-navy">{tab === "b2b" ? f.b2bTitle : f.b2cTitle}</h3>
            <p className="mt-1 text-sm text-slate">{tab === "b2b" ? f.b2bSubtitle : f.b2cSubtitle}</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} htmlFor="name">{f.fields.name}</label>
                  <input id="name" name="name" required className={inputClass} type="text" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">{f.fields.email}</label>
                  <input id="email" name="email" required className={inputClass} type="email" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} htmlFor="phone">{f.fields.phone}</label>
                  <input id="phone" name="phone" className={inputClass} type="tel" />
                </div>

                {tab === "b2b" ? (
                  <div>
                    <label className={labelClass} htmlFor="company">{f.fields.company}</label>
                    <input id="company" name="company" className={inputClass} type="text" />
                  </div>
                ) : (
                  <div>
                    <label className={labelClass} htmlFor="destination">{f.fields.destination}</label>
                    <select id="destination" name="destination" className={inputClass}>
                      {f.destinationOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {tab === "b2b" ? (
                <div>
                  <label className={labelClass} htmlFor="projectType">{f.fields.projectType}</label>
                  <select id="projectType" name="projectType" className={inputClass}>
                    {f.projectTypeOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className={labelClass} htmlFor="studentLevel">{f.fields.studentLevel}</label>
                  <select id="studentLevel" name="studentLevel" className={inputClass}>
                    {f.studentLevelOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className={labelClass} htmlFor="message">{f.fields.message}</label>
                <textarea id="message" name="message" rows={4} className={inputClass} />
              </div>

              <button
                type="submit"
                className="focus-ring w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-mist-100 hover:bg-navy-light transition-colors"
              >
                {f.fields.submit}
              </button>

              <p className="text-xs text-slate/70 pt-1">{f.note}</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
