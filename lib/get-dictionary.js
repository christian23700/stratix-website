import en from "./dictionaries/en";
import fr from "./dictionaries/fr";
import ar from "./dictionaries/ar";

const dictionaries = { en, fr, ar };

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries.en;
}
