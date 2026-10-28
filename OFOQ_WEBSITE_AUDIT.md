# OFOQ (أفق) — Phase 1: Technical Reconnaissance & Website Audit Report

**Role:** Senior Frontend Engineer, Creative Technologist & Digital Brand Strategist  
**Subject:** Complete Redesign Reconnaissance of [https://ofoq-site-web.web.app/](https://ofoq-site-web.web.app/)  
**Environment:** `c:/Users/Esraa/ofoq` (Vite 8.3.4 + React 19.3.1)  
**Status:** Audit & Strategic Planning Complete — Awaiting Approval for Phase 2  
**Date:** October 2026  

---

## Executive Summary

A comprehensive multi-vector inspection of both the live production site ([https://ofoq-site-web.web.app/](https://ofoq-site-web.web.app/)) and the local development workspace (`c:/Users/Esraa/ofoq`) was performed. 

Every asset, CSS token, DOM node, translation dictionary (AR/EN), project link, and API contract has been extracted and cross-examined. The findings reveal a crucial brand dissonance: **Ofoq possesses genuine production-grade credentials (3 live store apps, verified clients, cross-platform capabilities)**, but its current digital manifestation relies on a dark-cyan generic SaaS layout that clashes with its foundational brand mark (emerald green `#1C5D4E` & desert gold `#CBA16A`).

Below is the verified audit and technical brand architecture for the redesign.

---

## A. Existing Website Overview

| Property | Details |
| :--- | :--- |
| **Live Target URL** | `https://ofoq-site-web.web.app/` |
| **Domain Canonical** | `https://ofoq.dev/` |
| **Primary Language** | Arabic (`lang="ar" dir="rtl"`), full English switcher (`lang="en" dir="ltr"`) |
| **Site Type** | Single-page scroll architecture with anchors (`#top`, `#about`, `#services`, `#work`, `#packages`, `#contact`) + 6 linked static subpages for services (`services/*.html`) |
| **Hosting / Infrastructure** | Firebase Hosting (`web.app`) |
| **Meta Title (AR)** | `أفق | Ofoq — تطوير تطبيقات ومواقع وأنظمة` |
| **Meta Title (EN)** | `Ofoq | Mobile Apps, Websites & Desktop Software` |
| **Meta Description** | "أفق نحوّل أفكارك إلى منتجات رقمية. تطبيقات موبايل، مواقع إلكترونية، وبرامج سطح مكتب — من الفكرة حتى الإطلاق." |
| **Tagline / Slogan** | **Beyond Code. Beyond Limits.** (عبر الكود. بلا حدود) |

---

## B. Verified Brand Colors & Available Assets

### 1. The Core Brand Identity (Logo SVG Analysis)
Direct inspection of `assets/ofoq-mark.svg` reveals the true corporate identity: a stylized horizon ("أفق") featuring an orbital sun and layered topography.

```
┌────────────────────────────────────────────────────────┐
│  OFOQ TRADEMARK COLOR CODES (Extracted from SVG Mark)  │
├─────────────────────────┬──────────────────────────────┤
│ Deep Emerald Green      │ #1C5D4E                      │
│ Desert Amber Gold       │ #CBA16A                      │
└─────────────────────────┴──────────────────────────────┘
```

### 2. Live Web Stylesheet Palette (`css/styles.css`)
The live CSS declares the following custom properties:

```css
:root {
  --bg: #070b16;          /* Deep Midnight Obsidian */
  --bg-soft: #0d1424;     /* Elevated Surface Navy */
  --panel: #121a2e;       /* Card Background */
  --panel-2: #182238;     /* Hover Surface */
  --line: rgba(120, 180, 255, 0.14); /* Subtle Border */
  --text: #eef3ff;        /* Primary Text */
  --muted: #9aa8c7;       /* Secondary / Description Text */
  --cyan: #2ec7ff;        /* Electric Accent Cyan */
  --cyan-deep: #1496d4;   /* Secondary Cyan */
  --green: #1c5d4e;       /* Ofoq Brand Emerald */
  --gold: #cba16a;        /* Ofoq Brand Gold */
  --white: #ffffff;
}
```

> [!WARNING]
> **Brand Disconnect Identified:** The logo uses `#1C5D4E` (Emerald) and `#CBA16A` (Gold). However, because these warm/earth tones have poor contrast on the midnight `#070b16` background, the live site wrapped the logo in an ad-hoc `#F7F3EE` circular badge (`.logo img { background: #f7f3ee; border-radius: 50%; }`) and defaulted to generic electric blue/cyan (`#2ec7ff` to `#3b82f6`) for all CTAs and glow effects.

### 3. Font Families & Typography Stack
- **Display Headings (`--font-display`):** `"Noto Kufi Arabic"`, `"IBM Plex Sans Arabic"`, system-ui, sans-serif (Weights: 500, 600, 700).
- **Body Text (`--font-body`):** `"IBM Plex Sans Arabic"`, `"Noto Sans Arabic"`, system-ui, sans-serif (Weights: 300, 400, 500).

### 4. Available Media Assets Catalog
- `assets/ofoq-mark.svg` — Official vector brand mark.
- `assets/ofoq-logo.png` — Rasterized logo mark.
- `assets/hero-fullbleed-dark.png` — Dark abstract gradient hero backdrop.
- `assets/work-visgo.png` — Visgo showcase graphic (1200×675).
- `assets/work-weport.png` — WePort showcase graphic (1200×675).
- `assets/work-wealth.png` — Wealth App showcase graphic (1200×675).
- `assets/services/card-mobile.png`, `card-web.png`, `card-desktop.png`, `card-uiux.png`, `card-systems.png`, `card-support.png` — Service card thumbnails (800×600).

---

## C. Current Content Inventory

### 1. Navigation Structure
- **Links:** Home (`#top`), About (`#about`), Services (`#services`), Work (`#work`), Packages (`#packages`), Contact (`#contact`).
- **Interactive Controls:**
  - Language Switcher: `[AR | EN]` button group.
  - Primary CTA: "طلب عرض سعر" / "Request a Quote".
  - Mobile Menu: Hamburger toggle opening collapsible drawer.

### 2. Hero Section
- **Kicker:** "Ofoq — Beyond Code. Beyond Limits."
- **Headline (AR):** "نحوّل أفكارك إلى منتجات رقمية قوية"
- **Headline (EN):** "We turn your ideas into powerful digital products"
- **Sub-headline:** "نبني تطبيقات موبايل، مواقع إلكترونية، وبرامج سطح مكتب عالية الأداء — من الـ MVP إلى حلول جاهزة للإطلاق على المتاجر."
- **Actions:**
  - Primary CTA: "اطلب مشروعك" / "Start your project" (`#contact`)
  - Secondary CTA: "شاهد أعمالنا" / "View our work" (`#work`)

### 3. Verified Company Metrics
Four concrete, auditable metrics are published across both the Hero stats bar and the About section:
- **`+5`** — Projects delivered (مشاريع مُسلَّمة)
- **`24h`** — Reply on business days (رد في أيام العمل)
- **`3`** — Live store products (منتجات على المتاجر)
- **`+2`** — Years in the market (سنوات في السوق)

### 4. Services Offered (6 Modules)
1. **Mobile App Development (برمجة تطبيقات الهاتف):** Cross-platform iOS & Android, polished flows, store publishing (Google Play & App Store).
2. **Website Design & Development (تصميم المواقع الإلكترونية):** High-speed responsive business sites, conversion optimization, SEO foundation.
3. **Desktop Software (برامج سطح المكتب):** Windows & macOS internal tools, inventory/billing dashboards, offline-first data caching.
4. **UI / UX Design (تصميم واجهات وتجربة مستخدم):** Design systems, user flow wireframes, high-fidelity prototypes.
5. **Custom Systems & Backend (أنظمة وبرمجة خاصة):** Scalable REST APIs, auth, database architecture, third-party integrations (payments, maps).
6. **Maintenance & Support (صيانة ودعم مستمر):** SLA maintenance, store updates, performance monitoring, dependency patching.

### 5. Pricing Plans (Packages)
- **Starter (`From $299`):** 1-page site or simple app screens, responsive design, contact/WhatsApp integration, 7–10 days turnaround.
- **Growth (`From $799` — Most Popular / الأكثر طلباً):** Multi-page site or app MVP, SEO setup / store readiness, forms/catalog/core flows, 2–3 weeks turnaround.
- **Custom (`Custom Quote` / حسب المشروع):** Full mobile, web, or desktop platform, custom APIs & admin management portal, ongoing support, scheduled milestone roadmap.

### 6. Company Positioning & Pillars (About Section)
- **Positioning:** A software engineering house that builds and ships market-ready digital products, guiding clients through Discovery → UX/Architecture → Engineering → Store Deployment.
- **Key Tenets:**
  - Precise, easy-to-use interfaces (واجهات دقيقة وسهلة الاستخدام).
  - Scalable and maintainable solutions (حلول قابلة للتوسع والصيانة).
  - Commitment to deadlines and transparent communication (التزام بالمواعيد وتواصل واضح).
  - Store submission, deployment, and post-launch support (إطلاق على المتاجر ودعم بعد التسليم).

### 7. Contact Details & Social Links
- **Email:** `hello@ofoq.dev`
- **Phone / WhatsApp:** `+20 111 507 7582` (direct WhatsApp deep link: `https://wa.me/201115077582`)
- **Headquarters:** Cairo, Egypt (القاهرة، مصر)
- **Form Controls:** Name, Email, Phone, Project Type (dropdown), Package selector (pre-selects from package click), Message details.
- **Quick Floating Actions:** Bottom-anchored WhatsApp button & direct Phone dialer.
- **Social Media Availability:** No LinkedIn, GitHub, or X/Twitter links are configured on the existing site (only WhatsApp and email).

---

## D. Verified Project Inventory & Live Links

All 3 listed projects were verified against public app stores and domains:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                             VERIFIED PORTFOLIO AUDIT                             │
├────────────┬────────────────────┬───────────────────────┬────────────────────────┤
│ Project    │ Category           │ Verified Scope        │ Live Verification Link │
├────────────┼────────────────────┼───────────────────────┼────────────────────────┤
│ Visgo      │ Mobile App & Web   │ GPS audio tour app +  │ • https://visgo.app/   │
│            │                    │ tourism web platform  │ • Google Play Store    │
├────────────┼────────────────────┼───────────────────────┼────────────────────────┤
│ WePort     │ Mobile (Cross-plat)│ P2P international     │ • Google Play Store    │
│            │                    │ traveler shopping     │ • Apple App Store      │
├────────────┼────────────────────┼───────────────────────┼────────────────────────┤
│ Wealth App │ Mobile App         │ Real-time Egypt gold  │ • Google Play Store    │
│            │                    │ market tracker & P&L  │                        │
└────────────┴────────────────────┴───────────────────────┴────────────────────────┘
```

---

## E. Current Technical Environment (`c:/Users/Esraa/ofoq`)

### 1. Workspace Configuration
- **Tooling:** Vite `v8.3.4` (ESM module mode)
- **Runtime Framework:** React `v19.3.1` + React DOM `v19.3.1`
- **Compiler / Plugins:** `@vitejs/plugin-react` `v6.1.2`
- **Linter:** `oxlint` `v1.88.0`
- **State of Repository:** Pristine starter workspace. The default Vite counter demo is in `src/App.jsx`. No legacy dependencies, custom CSS frameworks, or routing libraries exist yet.
- **Node Modules:** Populated and functional.
- **Build Scripts:** `npm run dev` (`vite`), `npm run build` (`vite build`), `npm run lint` (`oxlint`), `npm run preview` (`vite preview`).

---

## F. Problems & Improvement Opportunities

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CRITICAL AUDIT DEFICIENCIES & OPPORTUNITIES                     │
├───────────────────────┬────────────────────────────────────────────────────────────────┤
│ Area                  │ Diagnosis & Strategic Remedy                                   │
├───────────────────────┼────────────────────────────────────────────────────────────────┤
│ 1. Color Discordance  │ Logo is Emerald & Gold, but site is standard electric cyan.    │
│                       │ We must unify the palette into a cohesive, high-end "Cyber-    │
│                       │ Obsidian" system: deep slate backgrounds, metallic emerald,    │
│                       │ radiant gold circuitry, and luminous cyan data accents.        │
├───────────────────────┼────────────────────────────────────────────────────────────────┤
│ 2. Technical Depth &  │ Current site looks like a standard freelance agency template.  │
│    Credibility        │ It lacks visual proof of software engineering expertise        │
│                       │ (interactive system topology, API contract visualizers, mobile │
│                       │ device frames showing real apps, architecture blueprints).     │
├───────────────────────┼────────────────────────────────────────────────────────────────┤
│ 3. Static Service     │ 6 separate static HTML pages (`services/*.html`) break the SPA │
│    Presentation       │ experience and duplicate code. We should unify these into an   │
│                       │ interactive, tabbed/modal engineering matrix in React.         │
├───────────────────────┼────────────────────────────────────────────────────────────────┤
│ 4. Motion & Tactility │ Currently uses basic CSS opacity/translate classes. There are  │
│                       │ no magnetic buttons, smooth layout morphs, viewport telemetry, │
│                       │ or refined micro-interactions.                                 │
├───────────────────────┼────────────────────────────────────────────────────────────────┤
│ 5. Portfolio Depth    │ Projects only show a static banner and store button. There are │
│                       │ no architecture breakdowns, tech stack badges (e.g. Flutter,   │
│                       │ Node.js, WebSockets), or live metrics.                         │
├───────────────────────┼────────────────────────────────────────────────────────────────┤
│ 6. RTL/LTR Harmony    │ The current site toggles RTL by resetting fonts and dirs via   │
│                       │ JS string injection. A unified React context with fluid flex/  │
│                       │ grid logical properties (`margin-inline`, etc.) will ensure    │
│                       │ flawless bidirectional rendering.                              │
└───────────────────────┴────────────────────────────────────────────────────────────────┘
```

---

## G. Recommended Creative Direction for the Redesign

### Concept: "The Horizon Engine" (محرك الأفق)
Ofoq translates to **Horizon** — the boundary where code meets boundless digital scale. Instead of generic "matrix green code" or empty terminal windows, the redesign will adopt an **Architectural Glass & Precision Engineering** aesthetic:

```
                              ┌─────────────────────────┐
                              │    THE HORIZON ENGINE   │
                              │   Design System Matrix  │
                              └────────────┬────────────┘
                                           │
         ┌─────────────────────────────────┼────────────────────────────────┐
         ▼                                 ▼                                ▼
┌──────────────────┐             ┌──────────────────┐             ┌──────────────────┐
│ Obsidian Canvas  │             │ Emerald Horizon  │             │ Solar Gold &     │
│ & Neural Mesh    │             │ Deep Tech Core   │             │ Cyan Telemetry   │
├──────────────────┤             ├──────────────────┤             ├──────────────────┤
│ #060911 Base     │             │ #1C5D4E Emerald  │             │ #CBA16A Solar    │
│ #0C1222 Panels   │             │ Metallic Glass   │             │ #2EC7FF Data Bus │
│ Micro-dot grids  │             │ System Nodes     │             │ Luminous accents │
└──────────────────┘             └──────────────────┘             └──────────────────┘
```

1. **Color Hierarchy:**
   - **Base Canvas:** Deep obsidian space (`#050811` to `#0A0F1D`).
   - **Brand Anchor:** Ofoq Emerald (`#1C5D4E`) transformed into deep glassmorphic panels, glowing conduit lines, and structural badges.
   - **Prestige Accent:** Ofoq Gold (`#CBA16A` / `#DFB87E`) reserved for high-value highlights, ratings, and featured tier cards.
   - **Engineering Signal:** Electric Cyan (`#2EC7FF`) used purely as an active "signal / data / telemetry" accent (pings, active filters, status pills).
2. **Visual Motifs:**
   - **System Architecture Diagrams:** Interactive live node-graphs connecting client apps to API gateways, databases, and third-party services.
   - **Mobile Product Showcases:** Realistic bezel frames displaying Visgo, WePort, and Wealth App with live feature tabs.
   - **Hardware/CAD Precision Accents:** Hairline crosshairs, coordinates (`30.0444° N, 31.2357° E` Cairo HQ), circuit traces, and technical metadata labels (`SYSTEM: ACTIVE`, `STATUS: 200 OK`).

---

## H. Recommended React Architecture & Technical Stack

```
c:/Users/Esraa/ofoq/src/
├── assets/                  # Verified SVG marks, project mockups, optimized vectors
├── components/
│   ├── layout/              # Navbar, Footer, Container, LanguageSwitcher
│   ├── hero/                # HorizonEngineHero, TelemetryPills, MetricStrip
│   ├── services/            # EngineeringMatrix, ServiceInspectorModal/Tab
│   ├── portfolio/           # LiveProjectCard, StoreLinks, ArchitectureDrawer
│   ├── pricing/             # InteractivePackageCalculator, TierCards
│   ├── about/               # EngineeringPhilosophy, CairoHQBadge
│   ├── contact/             # ProjectBriefForm, WhatsAppQuickConnect
│   └── ui/                  # GlassCard, GlowButton, Badge, AnimatedCounter
├── context/
│   └── LanguageContext.jsx  # Zero-dependency, instantaneous RTL/LTR bilingual state
├── data/
│   ├── content.ar.js        # Comprehensive Arabic dictionary & project metadata
│   └── content.en.js        # Comprehensive English dictionary & project metadata
├── styles/
│   └── index.css            # Precision CSS tokens, glassmorphism, responsive typography
├── App.jsx                  # Composition root
└── main.jsx                 # Entrypoint
```

- **Motion & Interaction Philosophy:**
  - Standard, performant CSS transforms and hardware-accelerated transitions for ultra-fast frame rates.
  - Smooth layout morphs and entrance reveals, ensuring 60fps performance on mobile.
- **Bilingual React Engine:**
  - First-class Arabic (RTL) and English (LTR) switching without page reload.
  - Automatic `dir="rtl"` / `dir="ltr"` HTML attribute sync and font-family swapping (`Noto Kufi Arabic` for AR, `Outfit` / `Inter` for EN).

---

## I. Information & Assets for Clarification

1. **Social Media Profiles:** Does Ofoq maintain official handles for LinkedIn, GitHub, X (Twitter), or Facebook that should be integrated into the redesign, or should we continue to prioritize direct WhatsApp/Email conversions?
2. **Additional Client Work:** Are there other client products or internal proprietary platforms that can be listed alongside Visgo, WePort, and Wealth App?
3. **Contact Submission Endpoint:** The current site references `http://localhost:4000/api/contact` with a static fallback. In Phase 3, we can support direct WhatsApp message synthesis (pre-filled formatted inquiry) alongside a client-side mailto / webhook format without requiring a custom backend.

---

## J. Implementation Roadmap: Next Steps (Phase 2 & Beyond)

```
[Phase 1: Audit & Reconnaissance] ──► COMPLETE (Current Step)
         │
         ▼
[Phase 2: Visual Identity & Design System Tokens]
  • Establish cohesive palette: Emerald (#1C5D4E) + Gold (#CBA16A) + Obsidian (#070B16) + Cyan
  • Configure typography: Google Fonts ("Noto Kufi Arabic" + "Outfit" / "Inter")
  • Ingest verified assets (SVG logo, project mockups) into project public/assets
         │
         ▼
[Phase 3: React Core & Component Architecture]
  • Implement LanguageProvider (AR/EN instant toggle with RTL/LTR styling)
  • Build Horizon Hero, Engineering Matrix, Live Work Showcase, Pricing, and Contact Form
         │
         ▼
[Phase 4: Motion Design & Interactive Engineering Polish]
  • Micro-interactions, telemetry effects, card hover glow, smooth scroll navigation
         │
         ▼
[Phase 5: Production Validation & Verification]
  • Mobile responsiveness, Oxlint validation, production build test
```
