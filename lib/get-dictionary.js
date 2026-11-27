import en from "./dictionaries/en";
import fr from "./dictionaries/fr";
import ar from "./dictionaries/ar";
import boutiqueEn from "./dictionaries/boutique/en";
import boutiqueFr from "./dictionaries/boutique/fr";
import boutiqueAr from "./dictionaries/boutique/ar";

/** Deep-merges the boutique copy over the base dictionary (objects merge, everything else is replaced). */
function merge(base, extra) {
  const out = { ...base };
  for (const [key, value] of Object.entries(extra)) {
    const isObject = value && typeof value === "object" && !Array.isArray(value);
    out[key] = isObject && base[key] && typeof base[key] === "object" ? merge(base[key], value) : value;
  }
  return out;
}

const dictionaries = {
  en: merge(en, boutiqueEn),
  fr: merge(fr, boutiqueFr),
  ar: merge(ar, boutiqueAr)
};

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries.en;
}
