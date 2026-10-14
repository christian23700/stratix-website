import "server-only";
import { headers } from "next/headers";

// Shared helpers for the public form actions (contact, booking).
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map();

/** Simple per-IP limit: at most 5 submissions per 10 minutes (per server instance). */
export function rateLimited() {
  const ip = (headers().get("x-forwarded-for") || "local").split(",")[0].trim();
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

const escape = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/** Builds the text and HTML bodies of a notification email from label/value rows and a free-text message. */
export function mailBody(rows, message = "") {
  const filled = rows.filter(([, v]) => v);
  const text = `${filled.map(([k, v]) => `${k}: ${v}`).join("\n")}${message ? `\n\n${message}` : ""}`;
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${filled
    .map(([k, v]) => `<tr><td style="color:#6b778c">${k}</td><td><strong>${escape(String(v))}</strong></td></tr>`)
    .join("")}</table>${message ? `<p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escape(message)}</p>` : ""}`;
  return { text, html };
}
