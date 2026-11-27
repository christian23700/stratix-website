import { company } from "./company";
import { productById } from "./shop";

/** wa.me link to Stratix with a ready-to-send message. */
export function whatsappLink(text) {
  return text ? `${company.whatsappUrl}?text=${encodeURIComponent(text)}` : company.whatsappUrl;
}

export const fill = (text, values) => text.replace(/\{(\w+)\}/g, (_, key) => (values[key] ?? `{${key}}`));

/** One line of the list, as written in the WhatsApp message. */
export function lineText(line, copy) {
  if (line.custom) {
    const what = [line.name, line.brand, line.size].filter(Boolean).join(", ");
    return `${copy.message.onRequest}: ${what} × ${line.qty}${line.note ? ` (${line.note})` : ""}`;
  }
  const p = productById[line.productId];
  if (!p) return null;
  const name = p.ref ? `${p.ref}${p.description ? ` (${p.description})` : ""}` : [p.name, p.brand].filter(Boolean).join(" · ");
  return `${name}${line.size ? `, ${copy.size} ${line.size}` : ""} × ${line.qty}`;
}

/** The whole message: greeting, purchase type, delivery place and one bullet per line. */
export function listMessage({ lines, mode, city }, copy) {
  const bullets = lines.map((l) => lineText(l, copy)).filter(Boolean);
  if (!bullets.length) return copy.message.empty;
  const details = [mode === "wholesale" ? copy.message.wholesale : copy.message.retail];
  if (city?.trim()) details.push(fill(copy.message.delivery, { city: city.trim() }));
  return `${copy.message.hello} (${details.join(", ")}):\n${bullets.map((b) => `• ${b}`).join("\n")}`;
}
