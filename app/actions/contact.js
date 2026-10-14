"use server";

import { sendMail } from "@/lib/mailer";
import { topics } from "@/lib/contact-topics";
import { EMAIL_RE, mailBody, rateLimited } from "@/lib/form-guard";
import en from "@/lib/dictionaries/en";

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

  if (rateLimited()) return { status: "rate_limited", errors: {} };

  const { text, html } = mailBody(
    [
      ["Topic", en.contact.form.topics[data.topic]],
      ["Name", data.name],
      ["Email", data.email],
      ["Phone / WhatsApp", data.phone],
      ["Company / organisation", data.organisation],
      ["Country", data.country],
      ["Site language", data.locale]
    ],
    data.message
  );

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
