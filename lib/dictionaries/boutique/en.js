// Copy of the "boutique" revamp (November 2026), merged over lib/dictionaries/en.js.
// Words in [[double brackets]] show in gold. {n}, {name}, {city} are replaced in code.
const en = {
  seo: {
    home: {
      title: "Stratix | Perfumes and abayas from Dubai, delivered to Africa",
      description:
        "Perfumes, abayas and perfume oils bought in Dubai, retail or wholesale for resellers, delivered to Cameroon and across Africa. Order on WhatsApp."
    },
    catalogue: {
      title: "Shop: perfumes and abayas from Dubai",
      description:
        "Lattafa and French Avenue perfumes, 88 abaya models, velvet and embroidered fabrics. Build your list and send it on WhatsApp: price and delivery confirmed before you pay."
    },
    resellers: {
      title: "Resellers: wholesale perfumes, abayas and perfume oils",
      description:
        "Buy wholesale in Dubai: bottled perfumes, abayas and 305 perfume oils by the litre. Get the price list in FCFA or USD on WhatsApp."
    },
    list: {
      title: "My list",
      description: "Your list of Stratix items, ready to send on WhatsApp."
    }
  },
  nav: {
    shop: "Shop",
    resellers: "Resellers",
    mobility: "Trips to Dubai",
    services: "Digital services",
    list: "My list",
    cta: "Order"
  },
  home: {
    hero: {
      eyebrow: "From Dubai to Africa",
      title: "Perfumes and abayas from [[Dubai]], delivered to you.",
      lead: "Picked in Dubai's shops, retail for you or wholesale for your business. You order on WhatsApp, we confirm the price and delivery.",
      primary: "Visit the shop",
      secondary: "Wholesale",
      trust: ["Bought directly in Dubai", "Retail and wholesale", "Follow-up on WhatsApp"],
      imageAlt: "Brown abaya with a lace border"
    },
    universes: [
      { id: "perfumes", title: "Perfumes", text: "Lattafa, French Avenue and many more" },
      { id: "abayas", title: "Abayas", text: "Embroidered, beaded, velvet, lace" },
      { id: "wholesale", title: "Wholesale", text: "Cartons and perfume oils by the litre" },
      { id: "travel", title: "Trips to Dubai", text: "Stays, Abu Dhabi, shopping" }
    ],
    perfumes: {
      badge: "In the shop",
      title: "Our perfumes from Dubai",
      cta: "Full catalogue"
    },
    abayas: {
      badge: "Abaya collection 2026",
      title: "Dubai elegance, for every day and for special occasions.",
      text: "Embroidery, beads, guipure lace, velvet: every model has its reference. Pick the size, add it to your list, and we send more photos on WhatsApp before you buy.",
      cta: "See the {n} models"
    },
    resellers: {
      badge: "Resellers and wholesale",
      title: "Sell Dubai perfumes and abayas in your city.",
      text: "Bottled perfumes, abayas and perfume oils by the litre, bought for you in Dubai at wholesale prices.",
      stat: "{n} references",
      statText: "of perfume oils by the litre, price list in FCFA and USD",
      steps: [
        { title: "Get the price list", text: "In FCFA or USD, on WhatsApp." },
        { title: "Pick your references", text: "Bottles, abayas or oils by the litre." },
        { title: "We ship", text: "Lead time and costs confirmed before you buy." }
      ],
      cta: "Get the price list",
      more: "All about wholesale"
    },
    travel: {
      badge: "Trips and stays",
      title: "Come and discover Dubai with us",
      text: "A tailor-made programme, hotels and excursions. Visas go through licensed agencies.",
      cta: "Plan my trip",
      trips: [
        { id: "dubai", title: "A stay in Dubai", text: "Burj Khalifa, the Marina, the desert: a programme at your own pace.", alt: "The Burj Khalifa between palm trees" },
        { id: "abudhabi", title: "A day in Abu Dhabi", text: "National Aquarium, Grand Mosque and the Corniche.", alt: "The tunnel of the National Aquarium in Abu Dhabi" },
        { id: "shopping", title: "Shopping and festivals", text: "Global Village, souks and markets for your purchases.", alt: "Global Village in Dubai" }
      ]
    },
    digital: {
      badge: "Also at Stratix",
      title: "Digital services and training",
      items: [
        { href: "/services#software", title: "Websites and apps", text: "With MboaSoft" },
        { href: "/services#marketing", title: "Online marketing", text: "Social media and video ads" },
        { href: "/services#training", title: "Training", text: "Import and sell online" }
      ]
    },
    faq: {
      badge: "FAQ",
      title: "Frequently asked questions",
      lead: "Another question? We are one message away."
    },
    cta: {
      title: "A perfume, an abaya, a wholesale order?",
      text: "Write to us, we reply within one working day.",
      button: "Message us on WhatsApp"
    }
  },
  shop: {
    hero: {
      badge: "Shop",
      title: "The [[Stratix]] shop",
      lead: "Add items to your list or ask for one that is not on the site, then send the list on WhatsApp. We confirm availability, price and delivery before any payment."
    },
    categories: {
      all: "All",
      perfume: "Perfumes",
      abaya: "Abayas",
      velvet: "Velvet",
      embroidered: "Embroidered fabrics",
      home: "Home"
    },
    filterLabel: "Category",
    search: "Search a name or a reference (e.g. A-12)",
    noResults: "No item matches your search.",
    showMore: "Show more items",
    count: "{n} items",
    countOne: "{n} item",
    price: "Price on WhatsApp",
    video: "Watch the video",
    closeVideo: "Close the video",
    add: "Add to my list",
    inList: "{n} in my list",
    plus: "Add one {name}",
    minus: "Remove one {name}",
    size: "Size",
    custom: {
      title: "Looking for something else?",
      text: "Give us the name and the brand: we find it for you in Dubai.",
      cta: "Ask for an item",
      dialogTitle: "Ask for an item",
      name: "Item name",
      namePlaceholder: "E.g. Khamrah",
      brand: "Brand",
      brandPlaceholder: "E.g. Lattafa",
      size: "Format or size",
      sizePlaceholder: "E.g. 100 ml, size M",
      qty: "Quantity",
      note: "Note",
      notePlaceholder: "Colour, budget, \"the same as in my photo\"…",
      add: "Add to my list",
      close: "Close",
      added: "Added to your list"
    }
  },
  list: {
    title: "My list",
    open: "My list ({n})",
    count: "{n} item",
    countPlural: "{n} items",
    empty: "Your list is empty. Add an item from the shop or ask for one.",
    browse: "Visit the shop",
    mode: "Type of purchase",
    retail: "Retail",
    wholesale: "Wholesale (reseller)",
    city: "Delivery city or country",
    cityPlaceholder: "E.g. Douala",
    preview: "WhatsApp message preview",
    send: "Send my list on WhatsApp",
    note: "No online payment. Do you have a photo of the item? Send it right after the message.",
    clear: "Clear the list",
    remove: "Remove {name} from the list",
    onRequest: "On request",
    size: "size",
    message: {
      hello: "Hello Stratix, here is my list",
      retail: "retail",
      wholesale: "wholesale",
      delivery: "delivery to {city}",
      onRequest: "On request",
      empty: "Hello Stratix, I would like some information."
    }
  },
  resellers: {
    hero: {
      badge: "Resellers and wholesale",
      title: "Buy in [[Dubai]], sell in your city",
      lead: "Bottled perfumes, abayas, velvet, embroidered fabrics and perfume oils by the litre: we buy for you in Dubai at wholesale prices and ship to Africa.",
      primary: "Get the price list",
      secondary: "Visit the shop",
      imageAlt: "Cartons of perfumes ready to ship"
    },
    supply: {
      badge: "What we supply",
      title: "Three ranges for your business",
      items: [
        { id: "perfumes", title: "Bottled perfumes", text: "Lattafa, French Avenue and the shop's new arrivals, by the carton or by the piece.", href: "/catalogue?category=perfume" },
        { id: "abayas", title: "Abayas and fabrics", text: "{n} referenced models: abayas, the velvet collection and embroidered fabrics.", href: "/catalogue?category=abaya" },
        { id: "oils", title: "Perfume oils by the litre", text: "To make and fill your own bottles.", href: "#huiles" }
      ]
    },
    oils: {
      badge: "Price list",
      title: "{n} perfume oils by the litre",
      text: "Our wholesale price list, updated every month, comes in FCFA and USD. Ask for it on WhatsApp and tell us your country.",
      edition: "November 2026 edition",
      references: "ref."
    },
    how: {
      title: "How to order wholesale",
      steps: [
        { title: "Ask for the price list", text: "On WhatsApp, with your country: we send it in FCFA or USD." },
        { title: "Build your list", text: "References from the price list, shop items or products you are looking for." },
        { title: "Approve the quote", text: "Prices, quantities, costs and shipping time confirmed in writing before any payment." },
        { title: "Receive your parcel", text: "We ship from Dubai and keep you posted on WhatsApp." }
      ]
    },
    conditions: {
      title: "Minimum quantities and discounts",
      text: "They depend on the items and your country: we give them to you with the price list."
    },
    cta: {
      title: "Ready to start your business?",
      text: "Ask for the price list: we reply within one working day.",
      button: "Get the price list"
    }
  },
  whatsapp: {
    pages: {
      shop: "Hello Stratix, I have a question about an item in the shop.",
      resellers: "Hello Stratix, I would like the wholesale price list.",
      mobility: "Hello Stratix, I am planning a trip to Dubai.",
      services: "Hello Stratix, I have a digital project.",
      products: "Hello Stratix, I have a question about MboaMeet or E-Farmer."
    }
  },
  footer: {
    tagline: "Perfumes, abayas and trips between Dubai and Africa, plus digital services with MboaSoft.",
    columns: { shop: "Shop" },
    links: { perfumes: "Perfumes", abayas: "Abayas", resellers: "Wholesale", list: "My list" }
  }
};

export default en;
