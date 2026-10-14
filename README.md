# Stratix — Site Web Officiel

Site vitrine multilingue (EN / FR / AR) de **Stratix Digital Solutions FZ-LLC**, en partenariat avec **MboaSoft Solutions Cameroun**.
Next.js 14 (App Router) + Tailwind CSS, thème inspiré de la structure de genuka.com.

Contenu couvert :
- **Services** : logiciels & apps (avec MboaSoft), e-commerce Dubaï ⇄ Afrique (parfums, cosmétiques, abayas, sourcing), marketing en ligne, mobilité EAU, formations
- **Mobilité EAU** : touristes, entreprises, étudiants — mise en relation avec le bon prestataire
- **Produits partenaires** : MboaMeet et E-Farmer, produits de MboaSoft Solutions Cameroun (Douala · +237 698 92 44 16 · contact@mboasoft.com), + solutions ERP / LMS / MLM / boutiques
- **Contact & support** : formulaire envoyé par e-mail via Nodemailer (server action `"use server"`)

## Démarrage

```bash
npm install
cp .env.example .env.local   # puis renseignez SMTP_USER / SMTP_PASS
npm run dev
```

Le site s'ouvre sur `http://localhost:3000` (redirige vers `/en`).

## Formulaire de contact (Nodemailer)

- Action serveur : `app/actions/contact.js` — validation, anti-spam (champ piège + limite de 5 envois / 10 min par IP), e-mail HTML + texte, `Reply-To` = l'expéditeur.
- Transport SMTP : `lib/mailer.js`, configuré par les variables de `.env.example`.
- Gmail : activez la validation en 2 étapes puis créez un **mot de passe d'application** à utiliser comme `SMTP_PASS`.
- Sujets du formulaire : `lib/contact-topics.js` (libellés dans les dictionnaires). `/contact?topic=support` présélectionne un sujet.

## Thème (structure type Genuka)

| Fichier | Rôle |
|---|---|
| `app/theme.css` | Jetons de couleur (RVB) — changez la palette ici uniquement |
| `tailwind.config.js` | Mappe les jetons vers `bg-canvas`, `text-ink`, `bg-accent`, `shadow-hard`… |
| `components/ui/` | Primitives : `Button`, `SectionHeader`, `Highlight`, `Steps`, `Faq`, `CtaBanner`, `PageHero`, `Icon` |

Signature visuelle : barre de navigation flottante arrondie, mots clés en couleur d'accent dans les titres
(écrire `[[mots]]` dans les dictionnaires), boutons plats à ombre décalée, police Bricolage Grotesque,
pied de page sombre.

## Visuels (services, solutions, produits partenaires)

Les 14 images de `public/images/visuals/` sont générées à partir de compositions HTML/CSS :

| Fichier source | Usage |
|---|---|
| `design/visuals/{software,ecommerce,marketing,mobility,training}.html` | Page Services + accueil |
| `design/visuals/{tourists,businesses,students}.html` | Page Mobilité EAU |
| `design/visuals/{erp,lms,mlm,shop}.html` | Solutions (page Produits partenaires) |
| `design/visuals/partner-{mboameet,efarmer}.html` | Bannières MboaMeet et E-Farmer (thèmes de chaque produit) |

Kit commun : `design/visuals/base.css` (jetons, cartes, téléphone, navigateur), `base.js` (icônes), `assets/`.
Après modification d'une composition :

```bash
npm run visuals              # tout régénérer
npm run visuals -- software  # une seule image
```

Le rendu utilise Playwright (`playwright-core`, Chromium de `PLAYWRIGHT_BROWSERS_PATH` ou Chrome installé).
La correspondance image ↔ section est dans `lib/visuals.js`.

## Modifier les textes

Tout le contenu est dans `lib/dictionaries/en.js`, `fr.js`, `ar.js` (même structure).
Coordonnées Stratix et MboaSoft, liens des produits partenaires : `lib/company.js`.

## Avant la mise en ligne

1. Renseigner les variables SMTP sur l'hébergeur.
2. Vérifier le domaine dans `lib/company.js` (`siteUrl`), utilisé par le sitemap et robots.
3. Les photos du catalogue Lattafa (dossier Stratix Business) n'ont pas été reprises : droits à vérifier avant usage.

---
Stratix Digital Solutions FZ-LLC — Ras Al Khaimah, EAU · stratixdigitalsolution@gmail.com · +971 55 391 0708
