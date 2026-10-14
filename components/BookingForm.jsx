"use client";

import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { submitBooking } from "@/app/actions/booking";
import { perfumes } from "@/lib/catalogue";
import { Field, FormAlert, FormSuccess, Honeypot, inputClass, SubmitButton } from "./ui/FormFields";

const initialState = { status: "idle", errors: {} };

export default function BookingForm({ dict, locale, defaultPerfume }) {
  const b = dict.catalogue.booking;
  const errorsText = dict.contact.form.errors;
  const [state, formAction] = useFormState(submitBooking, initialState);
  const formRef = useRef(null);
  const err = (key) => (state.errors[key] ? errorsText[state.errors[key]] : null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  if (state.status === "success") return <FormSuccess title={b.success.title} text={b.success.text} />;

  const selected = perfumes.some((p) => p.slug === defaultPerfume) ? defaultPerfume : perfumes[0].slug;

  return (
    <form ref={formRef} action={formAction} noValidate className="bg-surface p-6 shadow-hard-lg ring-1 ring-line sm:p-10">
      <h2 className="font-display text-2xl font-bold text-ink">{b.title}</h2>
      <p className="mt-2 text-ink-soft">{b.subtitle}</p>

      <FormAlert status={state.status} errors={errorsText} />
      <input type="hidden" name="locale" value={locale} />
      <Honeypot />

      <div className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-[1.4fr_1fr_0.7fr]">
          <Field id="perfume" label={b.fields.perfume} error={err("perfume")}>
            {/* key: re-mount when a "Book" button preselects another perfume */}
            <select key={selected} id="perfume" name="perfume" defaultValue={selected} className={inputClass}>
              {perfumes.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} · {p.brand}
                </option>
              ))}
            </select>
          </Field>
          <Field id="kind" label={b.fields.kind} error={err("kind")}>
            <select id="kind" name="kind" defaultValue="retail" className={inputClass}>
              <option value="retail">{b.fields.retail}</option>
              <option value="wholesale">{b.fields.wholesale}</option>
            </select>
          </Field>
          <Field id="quantity" label={b.fields.quantity} error={err("quantity")}>
            <input id="quantity" name="quantity" type="number" min={1} max={1000} defaultValue={1} inputMode="numeric" className={inputClass} aria-invalid={!!state.errors.quantity} />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label={b.fields.name} error={err("name")}>
            <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} aria-invalid={!!state.errors.name} />
          </Field>
          <Field id="phone" label={b.fields.phone} error={err("phone")}>
            <input id="phone" name="phone" type="tel" autoComplete="tel" dir="ltr" required placeholder="+237 6XX XX XX XX" className={inputClass} aria-invalid={!!state.errors.phone} />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="city" label={b.fields.city} error={err("city")}>
            <input id="city" name="city" type="text" autoComplete="address-level2" required className={inputClass} aria-invalid={!!state.errors.city} />
          </Field>
          <Field id="email" label={b.fields.email} error={err("email")}>
            <input id="email" name="email" type="email" autoComplete="email" className={inputClass} aria-invalid={!!state.errors.email} />
          </Field>
        </div>

        <Field id="message" label={b.fields.message} error={err("message")}>
          <textarea id="message" name="message" rows={3} placeholder={b.fields.messagePlaceholder} className={inputClass} aria-invalid={!!state.errors.message} />
        </Field>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <SubmitButton label={b.fields.submit} sending={dict.contact.form.fields.sending} />
          <p className="text-xs text-ink-muted sm:max-w-xs">{b.note}</p>
        </div>
      </div>
    </form>
  );
}
