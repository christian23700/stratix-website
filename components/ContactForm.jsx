"use client";

import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { submitContact } from "@/app/actions/contact";
import { topics } from "@/lib/contact-topics";
import { Field, FormAlert, FormSuccess, Honeypot, inputClass, SubmitButton } from "./ui/FormFields";

const initialState = { status: "idle", errors: {} };

export default function ContactForm({ dict, locale, defaultTopic }) {
  const f = dict.contact.form;
  const [state, formAction] = useFormState(submitContact, initialState);
  const formRef = useRef(null);
  const err = (key) => (state.errors[key] ? f.errors[state.errors[key]] : null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  if (state.status === "success") return <FormSuccess title={f.success.title} text={f.success.text} />;

  const selected = topics.includes(defaultTopic) ? defaultTopic : "";

  return (
    <form ref={formRef} action={formAction} noValidate className="bg-surface p-6 shadow-hard-lg ring-1 ring-line sm:p-10">
      <h2 className="font-display text-2xl font-bold text-ink">{f.title}</h2>
      <p className="mt-2 text-ink-soft">{f.subtitle}</p>

      <FormAlert status={state.status} errors={f.errors} />
      <input type="hidden" name="locale" value={locale} />
      <Honeypot />

      <div className="mt-8 space-y-5">
        <Field id="topic" label={f.fields.topic} error={err("topic")}>
          <select id="topic" name="topic" defaultValue={selected} required className={inputClass} aria-invalid={!!state.errors.topic}>
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
