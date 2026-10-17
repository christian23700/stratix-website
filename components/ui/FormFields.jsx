"use client";

import { useFormStatus } from "react-dom";
import { buttonClass } from "./Button";
import Icon from "./Icon";

// Shared building blocks of the public forms (contact, booking).
export const inputClass =
  "focus-ring w-full rounded-lg border border-line bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/70 outline-none transition-colors focus:border-accent aria-[invalid=true]:border-red-500";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

export function Field({ id, label, error, children }) {
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function SubmitButton({ label, sending }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={`${buttonClass("primary", "lg")} w-full sm:w-auto disabled:opacity-60`}>
      {pending ? sending : label}
      {!pending && <Icon name="arrow" size={18} className="rtl-flip" />}
    </button>
  );
}

/** Off-screen field that only bots fill in. */
export function Honeypot() {
  return (
    <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
      <label htmlFor="website">Website</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function FormSuccess({ title, text }) {
  return (
    <div className="bg-surface p-8 text-center shadow-hard-lg ring-1 ring-line sm:p-12" role="status">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-tint text-accent">
        <Icon name="check" size={28} strokeWidth={2.2} />
      </span>
      <h2 className="mt-5 font-display text-2xl font-bold text-ink">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-ink-soft">{text}</p>
    </div>
  );
}

export function FormAlert({ status, errors }) {
  if (status !== "error" && status !== "rate_limited") return null;
  return (
    <p className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300" role="alert">
      {status === "error" ? errors.send : errors.rate}
    </p>
  );
}
