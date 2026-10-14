"use server";

import { headers } from "next/headers";
import { sendMail } from "@/lib/mailer";
import { topics } from "@/lib/contact-topics";
import en from "@/lib/dictionaries/en";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

const escape = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/**
 * Contact / support form handler. Returns { status, errors } where errors are
 * field → code pairs; the client maps codes to localized messages.
 */
export async function submitContact(_prev, formData) {
  const get = (key) => String(formData.get(key) || "").trim();
  const data = {
    topic: get("topic"),
    name: get("name"),
    email: get("email"),
    phone: get("phone"),
    organisation: get("organisation"),
    country: get("country"),
    message: get("message"),
    locale: get("locale")
  };

  // Honeypot: real visitors never see or fill this field.
  if (get("website")) return { status: "success", errors: {} };

  const errors = {};
  if (!topics.includes(data.topic)) errors.topic = "required";
  if (data.name.length < 2) errors.name = "required";
  if (!EMAIL_RE.test(data.email)) errors.email = "email";
  if (data.message.length < 10) errors.message = "short";
  if (data.message.length > 5000) errors.message = "long";
  if (Object.keys(errors).length) return { status: "invalid", errors };

  const ip = (headers().get("x-forwarded-for") || "local").split(",")[0].trim();
  if (rateLimited(ip)) return { status: "rate_limited", errors: {} };

  const rows = [
    ["Topic", en.contact.form.topics[data.topic]],
    ["Name", data.name],
    ["Email", data.email],
    ["Phone / WhatsApp", data.phone],
    ["Company / organisation", data.organisation],
    ["Country", data.country],
    ["Site language", data.locale]
  ].filter(([, v]) => v);

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${data.message}`;
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows
    .map(([k, v]) => `<tr><td style="color:#6b778c">${k}</td><td><strong>${escape(v)}</strong></td></tr>`)
    .join("")}</table><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escape(data.message)}</p>`;

  try {
    await sendMail({
      to: process.env.CONTACT_TO || "stratixdigitalsolution@gmail.com",
      replyTo: `${data.name} <${data.email}>`,
      subject: `[Stratix website] ${en.contact.form.topics[data.topic]} — ${data.name}`,
      text,
      html
    });
    return { status: "success", errors: {} };
  } catch (err) {
    console.error("[contact] sendMail failed:", err.message);
    return { status: "error", errors: {} };
  }
}
