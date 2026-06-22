# Clear ITR Tax — Website

Static website for **Clear ITR Tax**, serving clients across India.

## Tech Stack

- [Astro](https://astro.build/) — static site generator
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first CSS

## Pages

| Page | Path |
|---|---|
| Home | `/` |
| Income Tax Services | `/income-tax-services/` |
| GST Services | `/gst-services/` |
| Business & Advisory | `/business-advisory-services/` |
| About Us | `/about/` |
| Contact | `/contact/` |
| 404 | `/404` |

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site generates fully static output. Deploy the `dist/` folder to any static hosting provider:

- **Netlify**: Connect the repository → set build command `npm run build` and publish directory `dist`
- **Vercel**: Same as Netlify — auto-detected for Astro projects
- **Cloudflare Pages**: Build command `npm run build`, output directory `dist`
- **GitHub Pages**: Run `npm run build` and deploy the `dist` folder (or use a GitHub Action)

## Configuration

### Required

Set the `SITE_URL` environment variable before building for production:

```bash
SITE_URL=https://clearitrtax.com npm run build
```

Or update the fallback value in `astro.config.mjs`.

### Content Editing

All business information is centralised in data files:

| File | Contents |
|---|---|
| `src/data/business.ts` | Brand names, phone, email, address, map URLs, SEO metadata |
| `src/data/services.ts` | All service items for Income Tax, GST, and Business pages |
| `src/data/navigation.ts` | Navigation menu links |

### Google Maps

Replace `googleMapsUrl` in `src/data/business.ts` with the verified Google Business Profile URL when available.

### WhatsApp

The WhatsApp button is disabled by default. Set `whatsappEnabled: true` in `src/data/business.ts` once the phone number is confirmed as WhatsApp-enabled.

### Images

- **Logo**: `public/images/logo.svg` — replace with the actual brand logo
- **Storefront**: `public/images/storefront.png` — replace with the actual office photo
- **OG Image**: `public/images/og-image.png` — social sharing image
- **Favicon**: `public/favicon.svg`

## Project Structure

```
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── logo.svg
│       ├── storefront.png
│       └── og-image.png
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── MobileContactBar.astro
│   │   ├── Breadcrumbs.astro
│   │   ├── ConsultationCTA.astro
│   │   ├── ContactForm.astro
│   │   ├── MapEmbed.astro
│   │   └── WhatsAppButton.astro
│   ├── data/
│   │   ├── business.ts
│   │   ├── services.ts
│   │   └── navigation.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── income-tax-services.astro
│   │   ├── gst-services.astro
│   │   ├── business-advisory-services.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Licence

Private — © 2026 Clear ITR Tax.
