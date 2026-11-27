// Boutique catalogue: perfumes and abayas sold on WhatsApp (no online payment).
// Language-independent facts here; category names and perfume copy live in the dictionaries.
// Abaya photos and names come from the Stratix abaya catalogue (Collection 2026: A-01..A-69 abayas,
// V-01..V-08 velvet, T-01..T-11 embroidered fabrics); descriptions are in French, as in the catalogue.
import { perfumes as lattafa } from "./catalogue";

export const categories = ["perfume", "abaya", "velvet", "embroidered", "home"];

/** Categories sold by size (the visitor picks one before adding to the list). */
export const sizedCategories = ["abaya", "velvet"];
export const sizes = ["S", "M", "L", "XL", "XXL"];

const perfume = (id, name, brand, image, extra = {}) => ({
  id,
  category: "perfume",
  name,
  brand,
  image,
  width: 675,
  height: 900,
  ...extra
});

export const products = [
  // Lattafa perfumes with their catalogue video (copy in dict.catalogue.items)
  ...lattafa.map((p) =>
    perfume(p.slug, p.name, p.brand, p.poster, { size: p.size, video: p.video, width: 720, height: 1280, copyKey: p.slug })
  ),
  perfume("veneno", "Veneno", "French Avenue", "/shop/perfumes/veneno.jpg"),
  perfume("vulcan-sable", "Vulcan Sable", "French Avenue", "/shop/perfumes/vulcan-sable.jpg"),
  perfume("meilleur", "Meilleur pour homme", "", "/shop/perfumes/meilleur.jpg"),
  perfume("golden-palace", "Golden Palace", "", "/shop/perfumes/golden-palace.jpg"),
  perfume("now-rouge", "Now Rouge", "", "/shop/perfumes/now-rouge.jpg"),
  perfume("pure-love", "Pure Love", "", "/shop/perfumes/pure-love.jpg"),
  perfume("eskoda-pink", "Eskoda Pink", "", "/shop/perfumes/eskoda-pink.jpg"),
  perfume("beautiful-girl", "Beautiful Girl", "", "/shop/perfumes/beautiful-girl.jpg"),
  perfume("blue", "Blue", "", "/shop/perfumes/blue.jpg"),
  perfume("8-element", "8 Element", "", "/shop/perfumes/8-element.jpg"),
  { id: "diffuseurs", category: "home", name: "Diffuseurs", brand: "", image: "/shop/perfumes/diffuseurs.jpg", width: 900, height: 675 },
  ...abayas()
];

function piece(ref, category, description, width, height) {
  return { id: ref.toLowerCase(), ref, category, name: ref, description, image: `/shop/abayas/${ref.toLowerCase()}.jpg`, width, height };
}

function abayas() {
  return [
    piece("A-01", "abaya", "Taupe à plastron vert perlé", 509, 900),
    piece("A-02", "abaya", "Noire brodée bleu", 509, 900),
    piece("A-03", "abaya", "Marron bordure dentelle", 674, 900),
    piece("A-04", "abaya", "Chocolat dentelle crème", 674, 900),
    piece("A-05", "abaya", "Chocolat fleurs brodées", 505, 900),
    piece("A-06", "abaya", "Marron dentelle guipure", 642, 900),
    piece("A-07", "abaya", "Bordeaux satinée guipure", 683, 900),
    piece("A-08", "abaya", "Bordeaux dentelle ton sur ton", 505, 900),
    piece("A-09", "abaya", "Vert sauge dentelle fleurie", 457, 900),
    piece("A-10", "abaya", "Vieux rose galon fleuri", 505, 900),
    piece("A-11", "abaya", "Lilas galon dentelle", 505, 900),
    piece("A-12", "abaya", "Grise perlée sur robe blanche", 505, 900),
    piece("A-13", "abaya", "Prune fleurs en relief", 506, 900),
    piece("A-14", "abaya", "Vert d eau perlée", 506, 900),
    piece("A-15", "abaya", "Noire fleurs violettes", 506, 900),
    piece("A-16", "abaya", "Noire tulle brodé", 651, 900),
    piece("A-17", "abaya", "Noire dentelle roses", 521, 900),
    piece("A-18", "abaya", "Noire dentelle festonnée", 674, 900),
    piece("A-19", "abaya", "Noire broderie perlée", 674, 900),
    piece("A-20", "abaya", "Noire dentelle crème", 674, 900),
    piece("A-21", "abaya", "Noire jacquard boutons bijoux", 674, 900),
    piece("A-22", "abaya", "Beige feuilles en relief", 674, 900),
    piece("A-23", "abaya", "Turquoise boutons recouverts", 674, 900),
    piece("A-24", "abaya", "Bleu glacier brodée", 701, 900),
    piece("A-25", "abaya", "Satin chocolat jacquard", 701, 900),
    piece("A-26", "abaya", "Duo fuchsia et mauve fleuri", 675, 900),
    piece("A-27", "abaya", "Noire et rose dentelle", 505, 900),
    piece("A-28", "abaya", "Noire liseré strass", 505, 900),
    piece("A-29", "abaya", "Marine guipure dorée", 505, 900),
    piece("A-30", "abaya", "Noire dentelle brodée", 505, 900),
    piece("A-31", "abaya", "Grège boutons velours", 505, 900),
    piece("A-32", "abaya", "Jaune pâle fleurs peintes", 508, 900),
    piece("A-33", "abaya", "Rose poudré galon festonné", 505, 900),
    piece("A-34", "abaya", "Imprimé rose dentelle prune", 506, 900),
    piece("A-35", "abaya", "Noire bordure fleurie", 507, 900),
    piece("A-36", "abaya", "Marine fleurs strass", 675, 900),
    piece("A-37", "abaya", "Crème imprimée galon bleu", 479, 900),
    piece("A-38", "abaya", "Crème fleurie avec foulard", 696, 900),
    piece("A-39", "abaya", "Crème fleurs bleues", 541, 900),
    piece("A-40", "abaya", "Bleu ciel guipure", 629, 900),
    piece("A-41", "abaya", "Rose perles nacrées", 675, 900),
    piece("A-42", "abaya", "Imprimé fleuri mauve", 900, 900),
    piece("A-43", "abaya", "Grise géométrique", 599, 900),
    piece("A-44", "abaya", "Rose pâle dentelle grise", 682, 900),
    piece("A-45", "abaya", "Noire dentelle cils", 675, 900),
    piece("A-46", "abaya", "Noire et bordeaux guipure", 675, 900),
    piece("A-47", "abaya", "Noire bordure guipure", 675, 900),
    piece("A-48", "abaya", "Jaune fleurs roses", 675, 900),
    piece("A-49", "abaya", "Crème tulipes chocolat", 675, 900),
    piece("A-50", "abaya", "Bordeaux galon fin", 675, 900),
    piece("A-51", "abaya", "Noire étoiles strass", 675, 900),
    piece("A-52", "abaya", "Terracotta", 515, 900),
    piece("A-53", "abaya", "Lin naturel", 516, 900),
    piece("A-54", "abaya", "Kaki", 512, 900),
    piece("A-55", "abaya", "Noire à fines rayures", 675, 900),
    piece("A-56", "abaya", "Chocolat à fines rayures", 675, 900),
    piece("A-57", "abaya", "Bordeaux à fines rayures", 675, 900),
    piece("A-58", "abaya", "Velours côtelé camel", 675, 900),
    piece("A-59", "abaya", "Velours côtelé chocolat", 675, 900),
    piece("A-60", "abaya", "Taupe gaufrée", 505, 900),
    piece("A-61", "abaya", "Taupe bleuets brodés", 780, 900),
    piece("A-62", "abaya", "Marine à capuche dentelle", 684, 900),
    piece("A-63", "abaya", "Ivoire satinée", 675, 900),
    piece("A-64", "abaya", "Anthracite roses brodées", 675, 900),
    piece("A-65", "abaya", "Imprimé floral rose", 676, 900),
    piece("A-66", "abaya", "Noire manches fleuries", 676, 900),
    piece("A-67", "abaya", "Marine arbres brodés", 667, 900),
    piece("A-68", "abaya", "Orange fleurs perlées", 509, 900),
    piece("A-69", "abaya", "Crème fleurs en relief", 509, 900),
    piece("T-01", "embroidered", "Lot de 4 imprimés strass", 675, 900),
    piece("T-02", "embroidered", "Lot de 4 brodés", 675, 900),
    piece("T-03", "embroidered", "Lot de 4 brodés", 675, 900),
    piece("T-04", "embroidered", "Lot de 4 brodés", 675, 900),
    piece("T-05", "embroidered", "Lot de 4 brodés", 675, 900),
    piece("T-06", "embroidered", "Lot de 4 imprimés strass", 675, 900),
    piece("T-07", "embroidered", "Lot de 4 imprimés strass", 675, 900),
    piece("T-08", "embroidered", "Lilas broderie turquoise", 675, 900),
    piece("T-09", "embroidered", "Pêche roses orangées", 675, 900),
    piece("T-10", "embroidered", "Rose grandes roses brodées", 900, 675),
    piece("T-11", "embroidered", "Rose et vert broderie perlée", 900, 675),
    piece("V-01", "velvet", "Velours arabesques argent", 697, 900),
    piece("V-02", "velvet", "Velours branches fleuries", 697, 900),
    piece("V-03", "velvet", "Velours fleurs ajourées", 697, 900),
    piece("V-04", "velvet", "Velours rayures perlées", 697, 900),
    piece("V-05", "velvet", "Velours grandes fleurs", 697, 900),
    piece("V-06", "velvet", "Velours losanges bleus", 697, 900),
    piece("V-07", "velvet", "Velours motifs éventail", 697, 900),
    piece("V-08", "velvet", "Velours feuillage bleuté", 697, 900),
  ];
}

export const productById = Object.fromEntries(products.map((p) => [p.id, p]));

/** Figures of the wholesale perfume-oil price list (Liste de prix Stratix, November 2026). */
export const oilPriceList = {
  references: 305,
  edition: "2026-11",
  groups: [
    { id: "oils", name: "Huiles de parfum", count: 254 },
    { id: "luzi", name: "Luzi Collection", count: 28 },
    { id: "diffusers", name: "Diffuseurs", count: 9 },
    { id: "dehn", name: "Dehn Al Oud", count: 8 },
    { id: "single", name: "Single Note", count: 6 }
  ]
};
