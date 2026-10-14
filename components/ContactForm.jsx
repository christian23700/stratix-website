"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitContact } from "@/app/actions/contact";
import { topics } from "@/lib/contact-topics";
import { buttonClass } from "./ui/Button";
import Icon from "./ui/Icon";

const inputClass =
  "focus-ring w-full rounded-lg border border-line bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/70 outline-none transition-colors focus:border-accent aria-[invalid=true]:border-red-500";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

const initialState = { status: "idle", errors: {} };

function SubmitButton({ label, sending }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={`${buttonClass("primary", "lg")} w-full sm:w-auto disabled:opacity-60`}>
      {pending ? sending : label}
      {!pending && <Icon name="arrow" size={18} className="rtl-flip" />}
    </button>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({ dict, locale, defaultTopic }) {
  const f = dict.contact.form;
  const [state, formAction] = useFormState(submitContact, initialState);
  const formRef = useRef(null);
  const err = (key) => (state.errors[key] ? f.errors[state.errors[key]] : null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  if (state.status === "success") {
    return (
      <div className="bg-surface p-8 text-center shadow-hard-lg ring-1 ring-line sm:p-12" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-tint text-accent">
          <Icon name="check" size={28} strokeWidth={2.2} />
        </span>
        <h2 className="mt-5 font-display text-2xl font-bold text-ink">{f.success.title}</h2>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">{f.success.text}</p>
      </div>
    );
  }

  const selected = topics.includes(defaultTopic) ? defaultTopic : "";

  return (
    <form ref={formRef} action={formAction} noValidate className="bg-surface p-6 shadow-hard-lg ring-1 ring-line sm:p-10">
      <h2 className="font-display text-2xl font-bold text-ink">{f.title}</h2>
      <p className="mt-2 text-ink-soft">{f.subtitle}</p>

      {(state.status === "error" || state.status === "rate_limited") && (
        <p className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-700" role="alert">
          {state.status === "error" ? f.errors.send : f.errors.rate}
        </p>
      )}

      <input type="hidden" name="locale" value={locale} />
      {/* Honeypot for bots — hidden from people and assistive tech */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 space-y-5">
        <Field id="topic" label={f.fields.topic} error={err("topic")}>
          <select
            id="topic"
            name="topic"
            defaultValue={selected}
            required
            className={inputClass}
            aria-invalid={!!state.errors.topic}
          >
            <option value="" disabled>
              {f.fields.topicPlaceholder}
            </option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {f.topics[t]}
              </option>
            ))}
          </select>
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label={f.fields.name} error={err("name")}>
            <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} aria-invalid={!!state.errors.name} />
          </Field>
          <Field id="email" label={f.fields.email} error={err("email")}>
            <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} aria-invalid={!!state.errors.email} />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="phone" label={f.fields.phone}>
            <input id="phone" name="phone" type="tel" autoComplete="tel" dir="ltr" className={inputClass} />
          </Field>
          <Field id="country" label={f.fields.country}>
            <input id="country" name="country" type="text" autoComplete="country-name" className={inputClass} />
          </Field>
        </div>

        <Field id="organisation" label={f.fields.organisation}>
          <input id="organisation" name="organisation" type="text" autoComplete="organization" className={inputClass} />
        </Field>

        <Field id="message" label={f.fields.message} error={err("message")}>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder={f.fields.messagePlaceholder}
            className={inputClass}
            aria-invalid={!!state.errors.message}
          />
        </Field>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <SubmitButton label={f.fields.submit} sending={f.fields.sending} />
          <p className="text-xs text-ink-muted">{f.privacy}</p>
        </div>
      </div>
    </form>
  );
}
