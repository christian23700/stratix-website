"use server";

import { sendMail } from "@/lib/mailer";
import { perfumes } from "@/lib/catalogue";
import { EMAIL_RE, mailBody, rateLimited } from "@/lib/form-guard";

const KINDS = ["retail", "wholesale"];

/**
 * Perfume booking (reservation): the team confirms availability and price on WhatsApp.
 * Returns { status, errors } like the contact action.
 */
export async function submitBooking(_prev, formData) {
  const get = (key) => String(formData.get(key) || "").trim();
  const data = {
    perfume: get("perfume"),
    kind: get("kind"),
    quantity: Number.parseInt(get("quantity"), 10),
    name: get("name"),
    phone: get("phone"),
    email: get("email"),
    city: get("city"),
    message: get("message"),
    locale: get("locale")
  };

  if (get("website")) return { status: "success", errors: {} };

  const perfume = perfumes.find((p) => p.slug === data.perfume);
  const errors = {};
  if (!perfume) errors.perfume = "required";
  if (!KINDS.includes(data.kind)) errors.kind = "required";
  if (!Number.isInteger(data.quantity) || data.quantity < 1 || data.quantity > 1000) errors.quantity = "quantity";
  if (data.name.length < 2) errors.name = "required";
  if (data.phone.replace(/\D/g, "").length < 8) errors.phone = "phone";
  if (data.email && !EMAIL_RE.test(data.email)) errors.email = "email";
  if (data.city.length < 2) errors.city = "required";
  if (data.message.length > 2000) errors.message = "long";
  if (Object.keys(errors).length) return { status: "invalid", errors };

  if (rateLimited()) return { status: "rate_limited", errors: {} };

  const label = `${perfume.name} (${perfume.brand}, ${perfume.size})`;
  const whatsapp = `https://wa.me/${data.phone.replace(/\D/g, "")}`;
  const { text, html } = mailBody(
    [
      ["Perfume", label],
      ["Type", data.kind === "wholesale" ? "Wholesale (reseller)" : "Retail"],
      ["Quantity", data.quantity],
      ["Name", data.name],
      ["Phone / WhatsApp", data.phone],
      ["Reply on WhatsApp", whatsapp],
      ["Email", data.email],
      ["City / country", data.city],
      ["Site language", data.locale]
    ],
    data.message
  );

  try {
    await sendMail({
      to: process.env.BOOKING_TO || process.env.CONTACT_TO || "stratixdigitalsolution@gmail.com",
      replyTo: data.email ? `${data.name} <${data.email}>` : undefined,
      subject: `[Stratix booking] ${perfume.name} × ${data.quantity} — ${data.name} (${data.city})`,
      text,
      html
    });
    return { status: "success", errors: {} };
  } catch (err) {
    console.error("[booking] sendMail failed:", err.message);
    return { status: "error", errors: {} };
  }
}
