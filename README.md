# Stratix Digital Solutions — Site Web Officiel

Site vitrine multilingue (EN / FR / AR) développé avec **Next.js 14** (App Router) et **Tailwind CSS**, conforme au cahier des charges CDC-WEB-2026-V1.

## Démarrage rapide

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000` (redirige automatiquement vers `/en`).

## Build de production

```bash
npm run build
npm run start
```

> Le build nécessite un accès Internet lors de la compilation car les polices (Space Grotesk, Inter, Noto Kufi Arabic, IBM Plex Sans Arabic) sont chargées via `next/font/google`.

## Structure du projet

```
app/
  [locale]/            → toutes les pages, dupliquées pour en / fr / ar
    page.jsx            → Accueil
    about/page.jsx       → À propos
    services/page.jsx    → Nos Services (Software, E-commerce, Mobilité)
    solutions/page.jsx   → Solutions (MLM, LMS, ERP)
    contact/page.jsx     → Contact & prise de rendez-vous
    layout.jsx           → Layout de la locale (polices, header, footer, RTL)
  layout.jsx             → Layout racine (html/body)
  page.jsx               → Redirection "/" → "/en"
  sitemap.js / robots.js → SEO
components/               → Header, Footer, formulaires, cartes, etc.
lib/
  dictionaries/{en,fr,ar}.js → Tout le contenu texte du site, par langue
  i18n-config.js              → Liste des langues, direction RTL/LTR
```

## Modifier les textes

Tout le contenu (titres, paragraphes, boutons, formulaires) se trouve dans
`lib/dictionaries/en.js`, `fr.js` et `ar.js`. Modifiez directement ces fichiers
pour changer un texte — la structure est identique dans les trois langues.

## Connecter les intégrations tierces (à faire avant mise en ligne)

1. **Formulaires (`components/ContactForm.jsx`)** — actuellement un aperçu
   statique. Reliez le `onSubmit` à votre CRM, HubSpot Forms, ou à un endpoint
   API (`/api/lead` par exemple) pour recevoir réellement les demandes B2B et B2C.
2. **Prise de rendez-vous (`components/AppointmentSection.jsx`)** — le bouton
   "Ouvrir le module de rendez-vous" est prêt à recevoir votre lien Calendly ou
   HubSpot Meetings (widget intégré ou redirection).
3. **WhatsApp flottant (`components/WhatsAppButton.jsx`)** — déjà connecté au
   numéro +971 55 391 0708 avec message pré-rempli, aucune action requise.
4. **Domaine & sitemap** — remplacez `https://www.stratixdigitalsolutions.com`
   dans `app/sitemap.js` et `app/robots.js` par le nom de domaine définitif.

## Multilingue & RTL

- Langue par défaut : **anglais** (`/en`)
- Bascule disponible : **français** (`/fr`) et **arabe** (`/ar`)
- Le mode RTL (arabe) est automatiquement appliqué (`dir="rtl"`) avec une
  police arabe dédiée (Noto Kufi Arabic / IBM Plex Sans Arabic).

## Design system

| Rôle | Valeur |
|---|---|
| Navy Deep | `#0A1930` |
| Navy (fond header/sections sombres) | `#060F1F` |
| Cyan Électrique | `#00D4E5` |
| Fond clair | `#F4F7FA` |
| Police titres | Space Grotesk |
| Police texte | Inter |

## Déploiement

Le projet est compatible avec tout hébergeur supportant Next.js (Vercel,
Netlify, serveur Node.js). Certificat SSL à activer côté hébergeur/DNS.

---
Stratix Digital Solutions FZ-LLC — Ras Al Khaimah, EAU
stratixdigitalsolution@gmail.com · +971 55 391 0708
