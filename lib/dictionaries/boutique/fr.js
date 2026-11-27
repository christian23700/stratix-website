// Textes de la refonte « boutique » (novembre 2026), fusionnés par-dessus lib/dictionaries/fr.js.
// Les mots entre [[doubles crochets]] s'affichent en doré. {n}, {name}, {city} sont remplacés dans le code.
const fr = {
  seo: {
    home: {
      title: "Stratix | Parfums et abayas de Dubaï, livrés en Afrique",
      description:
        "Parfums, abayas et huiles de parfum achetés à Dubaï, au détail ou en gros pour les revendeurs, livrés au Cameroun et dans toute l'Afrique. Commande sur WhatsApp."
    },
    catalogue: {
      title: "Boutique : parfums et abayas de Dubaï",
      description:
        "Parfums Lattafa et French Avenue, 88 modèles d'abayas, velours et tissus brodés. Faites votre liste et envoyez-la sur WhatsApp : prix et livraison confirmés avant paiement."
    },
    resellers: {
      title: "Revendeurs : parfums, abayas et huiles de parfum en gros",
      description:
        "Achetez en gros à Dubaï : parfums en flacon, abayas et 305 huiles de parfum au litre. Recevez la liste de prix en FCFA ou en USD sur WhatsApp."
    },
    list: {
      title: "Ma liste",
      description: "Votre liste d'articles Stratix, à envoyer sur WhatsApp."
    }
  },
  nav: {
    shop: "Boutique",
    resellers: "Revendeurs",
    mobility: "Voyages à Dubaï",
    services: "Services digitaux",
    list: "Ma liste",
    cta: "Commander"
  },
  home: {
    hero: {
      eyebrow: "De Dubaï à l'Afrique",
      title: "Parfums et abayas de [[Dubaï]], livrés chez vous.",
      lead: "Choisis directement dans les boutiques de Dubaï, au détail pour vous ou en gros pour votre commerce. Vous commandez sur WhatsApp, nous confirmons le prix et la livraison.",
      primary: "Voir la boutique",
      secondary: "Vente en gros",
      trust: ["Achat direct à Dubaï", "Détail et gros", "Suivi sur WhatsApp"],
      imageAlt: "Abaya marron à bordure de dentelle"
    },
    universes: [
      { id: "perfumes", title: "Parfums", text: "Lattafa, French Avenue et bien d'autres" },
      { id: "abayas", title: "Abayas", text: "Brodées, perlées, velours, dentelle" },
      { id: "wholesale", title: "Vente en gros", text: "Cartons et huiles de parfum au litre" },
      { id: "travel", title: "Voyages à Dubaï", text: "Séjours, Abu Dhabi, shopping" }
    ],
    perfumes: {
      badge: "En boutique",
      title: "Nos parfums de Dubaï",
      cta: "Tout le catalogue"
    },
    abayas: {
      badge: "Collection abayas 2026",
      title: "L'élégance de Dubaï, pour tous les jours et les grandes occasions.",
      text: "Broderies, perles, dentelle guipure, velours : chaque modèle a sa référence. Choisissez la taille, ajoutez-le à votre liste, nous vous envoyons d'autres photos sur WhatsApp avant l'achat.",
      cta: "Voir les {n} modèles"
    },
    resellers: {
      badge: "Revendeurs et vente en gros",
      title: "Vendez les parfums et les abayas de Dubaï dans votre ville.",
      text: "Parfums en flacon, abayas et huiles de parfum au litre, achetés pour vous à Dubaï au prix de gros.",
      stat: "{n} références",
      statText: "d'huiles de parfum au litre, liste de prix en FCFA et en USD",
      steps: [
        { title: "Recevez la liste de prix", text: "En FCFA ou en USD, sur WhatsApp." },
        { title: "Choisissez vos références", text: "Flacons, abayas ou huiles au litre." },
        { title: "Nous expédions", text: "Délai et frais confirmés avant l'achat." }
      ],
      cta: "Recevoir la liste de prix",
      more: "Tout savoir sur la vente en gros"
    },
    travel: {
      badge: "Voyages et séjours",
      title: "Venez découvrir Dubaï avec nous",
      text: "Programme sur mesure, hôtels et excursions. Les visas passent par des agences agréées.",
      cta: "Préparer mon séjour",
      trips: [
        { id: "dubai", title: "Séjour à Dubaï", text: "Burj Khalifa, Marina, désert : un programme à votre rythme.", alt: "Le Burj Khalifa entre les palmiers" },
        { id: "abudhabi", title: "Journée à Abu Dhabi", text: "National Aquarium, Grande Mosquée et corniche.", alt: "Le tunnel du National Aquarium d'Abu Dhabi" },
        { id: "shopping", title: "Shopping et fêtes", text: "Global Village, souks et marchés pour vos achats.", alt: "Global Village à Dubaï" }
      ]
    },
    digital: {
      badge: "Aussi chez Stratix",
      title: "Services digitaux et formations",
      items: [
        { href: "/services#software", title: "Sites et applis", text: "Avec MboaSoft" },
        { href: "/services#marketing", title: "Marketing en ligne", text: "Réseaux sociaux et pubs vidéo" },
        { href: "/services#training", title: "Formations", text: "Importer et vendre en ligne" }
      ]
    },
    faq: {
      badge: "FAQ",
      title: "Questions fréquentes",
      lead: "Une autre question ? Nous sommes à un message de vous."
    },
    cta: {
      title: "Un parfum, une abaya, une commande en gros ?",
      text: "Écrivez-nous, nous répondons sous un jour ouvré.",
      button: "Écrire sur WhatsApp"
    }
  },
  shop: {
    hero: {
      badge: "Boutique",
      title: "La boutique [[Stratix]]",
      lead: "Ajoutez des articles à votre liste ou demandez un article qui n'est pas sur le site, puis envoyez la liste sur WhatsApp. Nous confirmons la disponibilité, le prix et la livraison avant tout paiement."
    },
    categories: {
      all: "Tout",
      perfume: "Parfums",
      abaya: "Abayas",
      velvet: "Velours",
      embroidered: "Tissus brodés",
      home: "Maison"
    },
    filterLabel: "Catégorie",
    search: "Chercher un nom ou une référence (ex. A-12)",
    noResults: "Aucun article ne correspond à votre recherche.",
    showMore: "Afficher plus d'articles",
    count: "{n} articles",
    countOne: "{n} article",
    price: "Prix sur WhatsApp",
    video: "Voir la vidéo",
    closeVideo: "Fermer la vidéo",
    add: "Ajouter à ma liste",
    inList: "{n} dans ma liste",
    plus: "Ajouter un {name}",
    minus: "Retirer un {name}",
    size: "Taille",
    custom: {
      title: "Vous cherchez autre chose ?",
      text: "Donnez le nom et la marque : nous le trouvons pour vous à Dubaï.",
      cta: "Demander un article",
      dialogTitle: "Demander un article",
      name: "Nom de l'article",
      namePlaceholder: "Ex. Khamrah",
      brand: "Marque",
      brandPlaceholder: "Ex. Lattafa",
      size: "Format ou taille",
      sizePlaceholder: "Ex. 100 ml, taille M",
      qty: "Quantité",
      note: "Remarque",
      notePlaceholder: "Couleur, budget, « le même que sur ma photo »…",
      add: "Ajouter à ma liste",
      close: "Fermer",
      added: "Ajouté à votre liste"
    }
  },
  list: {
    title: "Ma liste",
    open: "Ma liste ({n})",
    count: "{n} article",
    countPlural: "{n} articles",
    empty: "Votre liste est vide. Ajoutez un article de la boutique ou demandez-en un.",
    browse: "Voir la boutique",
    mode: "Type d'achat",
    retail: "Au détail",
    wholesale: "En gros (revendeur)",
    city: "Ville ou pays de livraison",
    cityPlaceholder: "Ex. Douala",
    preview: "Aperçu du message WhatsApp",
    send: "Envoyer ma liste sur WhatsApp",
    note: "Aucun paiement en ligne. Vous avez une photo de l'article ? Envoyez-la juste après le message.",
    clear: "Vider la liste",
    remove: "Retirer {name} de la liste",
    onRequest: "Sur demande",
    size: "taille",
    message: {
      hello: "Bonjour Stratix, voici ma liste",
      retail: "au détail",
      wholesale: "en gros",
      delivery: "livraison {city}",
      onRequest: "Sur demande",
      empty: "Bonjour Stratix, je voudrais des informations."
    }
  },
  resellers: {
    hero: {
      badge: "Revendeurs et vente en gros",
      title: "Achetez à [[Dubaï]], vendez dans votre ville",
      lead: "Parfums en flacon, abayas, velours, tissus brodés et huiles de parfum au litre : nous achetons pour vous à Dubaï au prix de gros et nous expédions en Afrique.",
      primary: "Recevoir la liste de prix",
      secondary: "Voir la boutique",
      imageAlt: "Cartons de parfums prêts pour l'envoi"
    },
    supply: {
      badge: "Ce que nous fournissons",
      title: "Trois rayons pour votre commerce",
      items: [
        { id: "perfumes", title: "Parfums en flacon", text: "Lattafa, French Avenue et les nouveautés de la boutique, au carton ou au détail.", href: "/catalogue?category=perfume" },
        { id: "abayas", title: "Abayas et tissus", text: "{n} modèles avec référence : abayas, collection velours et tissus brodés.", href: "/catalogue?category=abaya" },
        { id: "oils", title: "Huiles de parfum au litre", text: "Pour fabriquer et remplir vos propres flacons.", href: "#huiles" }
      ]
    },
    oils: {
      badge: "Liste de prix",
      title: "{n} huiles de parfum au litre",
      text: "Notre liste de prix de gros, mise à jour chaque mois, existe en FCFA et en USD. Demandez-la sur WhatsApp en indiquant votre pays.",
      edition: "Édition de novembre 2026",
      references: "réf."
    },
    how: {
      title: "Comment commander en gros",
      steps: [
        { title: "Demandez la liste de prix", text: "Sur WhatsApp, avec votre pays : nous l'envoyons en FCFA ou en USD." },
        { title: "Faites votre liste", text: "Références de la liste de prix, articles de la boutique ou produits que vous cherchez." },
        { title: "Validez le devis", text: "Prix, quantités, frais et délai d'envoi confirmés par écrit avant tout paiement." },
        { title: "Recevez votre colis", text: "Nous expédions depuis Dubaï et vous tenons au courant sur WhatsApp." }
      ]
    },
    conditions: {
      title: "Quantités minimum et remises",
      text: "Elles dépendent des articles et de votre pays : nous vous les donnons avec la liste de prix."
    },
    cta: {
      title: "Envie de lancer votre commerce ?",
      text: "Demandez la liste de prix : nous répondons sous un jour ouvré.",
      button: "Recevoir la liste de prix"
    }
  },
  whatsapp: {
    pages: {
      shop: "Bonjour Stratix, j'ai une question sur un article de la boutique.",
      resellers: "Bonjour Stratix, je voudrais la liste de prix de gros.",
      mobility: "Bonjour Stratix, je prépare un séjour à Dubaï.",
      services: "Bonjour Stratix, j'ai un projet digital.",
      products: "Bonjour Stratix, j'ai une question sur MboaMeet ou E-Farmer."
    }
  },
  footer: {
    tagline: "Parfums, abayas et voyages entre Dubaï et l'Afrique, et services digitaux avec MboaSoft.",
    columns: { shop: "Boutique" },
    links: { perfumes: "Parfums", abayas: "Abayas", resellers: "Vente en gros", list: "Ma liste" }
  }
};

export default fr;
