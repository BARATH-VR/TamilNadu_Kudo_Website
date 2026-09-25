# Tamil Nadu State Kudo Association (TNSKA) — Official Platform Documentation

> **Official Web Platform & Content Management System for the Governing Body of Kudo in Tamil Nadu**  
> *Affiliated with Kudo International Federation India (KIFI) and Kudo International Federation (KIF) Japan.*

---

## 📌 Executive Summary

The **Tamil Nadu State Kudo Association (TNSKA)** web platform is a modern, high-performance, full-stack web application designed to serve as the digital headquarters for Kudo athletes, dojo instructors, district representatives, and sports governing bodies across Tamil Nadu.

The application delivers:
1. **Public Athletic Portal**: Bilingual (English / தமிழ்) access to state tournament calendars, district dojo directories, official SGFI circulars, belt grading syllabi, and athlete achievements.
2. **Interactive Inquiries System**: Zero-friction inquiry engine with custom gold theme validation, WhatsApp integration, and automated email dispatch.
3. **No-Code Admin Content Management System (CMS)**: Lightweight, passcode-protected (`kudo2026`) portal allowing state officials to publish circulars, manage tournament dates, upload real PDF documents, and register district academies without technical knowledge.

---

## 🌐 Live Deployment & Repository Information

- **Live Production URL**: [https://tnska-website.onrender.com/](https://tnska-website.onrender.com/)
- **GitHub Repository**: [https://github.com/BARATH-VR/TamilNadu_Kudo_Website.git](https://github.com/BARATH-VR/TamilNadu_Kudo_Website.git)
- **Primary Administrative Passcode**: `kudo2026` *(Secondary fallback: `admin`)*
- **Administrative Inquiry Recipient**: `barathvr385@gmail.com`

---

## 🛠️ Technology Stack & Architecture

```
┌────────────────────────────────────────────────────────────┐
│                      Next.js 16 (App Router)               │
│                                                            │
│   ┌───────────────────┐               ┌────────────────┐   │
│   │   TypeScript 5    │               │ Tailwind CSS 4 │   │
│   │ Strict Type Safety│               │ Obsidian & Gold│   │
│   └───────────────────┘               └────────────────┘   │
├────────────────────────────────────────────────────────────┤
│                       Client Layer                         │
│                                                            │
│   ┌───────────────────┐               ┌────────────────┐   │
│   │  LanguageContext  │               │  AdminContext  │   │
│   │  (English / தமிழ்)│               │  LocalStorage  │   │
│   └───────────────────┘               └────────────────┘   │
├────────────────────────────────────────────────────────────┤
│                    Backend & Delivery                      │
│                                                            │
│   ┌───────────────────┐               ┌────────────────┐   │
│   │  /api/contact     │               │   FormSubmit   │   │
│   │  Next Route API   │               │   Client AJAX  │   │
│   └───────────────────┘               └────────────────┘   │
└────────────────────────────────────────────────────────────┘
```

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack) | High-performance React framework with server-side optimization and static generation. |
| **Language** | TypeScript 5 | End-to-end strict type safety across components, models, and dictionaries. |
| **Styling** | Tailwind CSS v4 & Vanilla CSS | Bespoke Obsidian Dark (`#09090b`) & Imperial Gold (`#f59e0b` / `#fbbf24`) theme with glassmorphic cards. |
| **Icons** | Lucide React | Lightweight, scalable vector iconography. |
| **State Management** | React Context API | `LanguageContext` (bilingual i18n) and `AdminContext` (dynamic CMS state with LocalStorage persistence). |
| **File Storage** | Base64 Data URL Storage | In-browser document uploader for `.pdf`, `.doc`, and `.docx` files up to 15MB. |
| **Hosting & CI/CD** | Render Web Services | Automated git-push CI/CD deployment configured via `render.yaml`. |

---

## 📁 Repository Structure

```
tamilnadu-website/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # Server-side contact & dispatch endpoint
│   │   ├── contact/
│   │   │   └── page.tsx              # Standalone /contact route page
│   │   ├── globals.css               # Design tokens, custom scrollbars, animations
│   │   ├── layout.tsx                # Root layout with metadata and font imports
│   │   └── page.tsx                  # Main single-page application controller
│   ├── components/
│   │   ├── AdminPanel.tsx            # Protected CMS management workspace (4 Tabs)
│   │   ├── Footer.tsx                # Trust seals, quick links, secretariat info
│   │   ├── Header.tsx                # Sticky navbar, language switcher, mobile drawer
│   │   ├── Hero.tsx                  # Cinematic banner, action triggers, notice badge
│   │   ├── HomeView.tsx              # Dynamic home feed, trust lineage, highlights
│   │   ├── LightboxModal.tsx         # High-resolution image/photo zoom viewer
│   │   ├── SearchModal.tsx           # Global search across news, events, & academies
│   │   ├── TrustChain.tsx            # Visual affiliation trail (KIF -> KIFI -> TNSKA)
│   │   └── Views.tsx                 # Modular views (About, Districts, Events, Contact, Media)
│   ├── context/
│   │   ├── AdminContext.tsx          # Real-time state provider & persistence
│   │   └── LanguageContext.tsx       # Bilingual translation controller
│   └── data/
│       ├── dictionary.ts             # English & Tamil dictionary terms
│       └── kudoData.ts               # Default seed data (academies, circulars, committee)
├── public/                           # Static assets, logos, and icons
├── render.yaml                       # Infrastructure-as-code deployment specification
├── package.json                      # Project dependencies and build scripts
├── tsconfig.json                     # TypeScript compiler configuration
└── DOCUMENTATION.md                  # Master project reference manual
```

---

## 🚀 Key Modules & Engineering Features

### 1. Bilingual Internationalization Engine (`LanguageContext`)
- **Real-Time Translation**: Users can switch instantly between **English** and **தமிழ்** (`Globe` toggle in header) without page reloads.
- **Deep Dictionary Structure**: All core UI components, committee designations, tournament categories, and navigation tags are mapped via `src/data/dictionary.ts`.

### 2. No-Code Content Management System (`AdminPanel.tsx`)
Accessible via the **`Admin Portal`** button in the header using passcode `kudo2026`:
- **Tab 1: News & Circulars**: Publish official state announcements and circular dates.
- **Tab 2: Tournaments / Events**: Manage upcoming championships, venues, registration dates, and rules.
- **Tab 3: District Academies Directory**: Add and manage district dojos, Chief Instructors (Senseis), contact numbers, and **Google Maps Navigation URLs**.
- **Tab 4: PDF Forms & Downloads**:
  - Drag-and-drop / file picker uploader.
  - Strict file type restriction enforcing `.pdf`, `.doc`, and `.docx`.
  - Max file size guard (15MB) with custom error handling.
  - Automatically generates base64 Data URLs so uploaded documents can be downloaded instantly by athletes on the public Media page.

### 3. District Dojo & Academy Directory (`DistrictsView`)
- **Interactive Search & Filter**: Real-time search by district name or academy title.
- **Direct Navigation Links**: Every academy card features a gold **`📍 GET DIRECTIONS`** button that opens Google Maps navigation with exact GPS coordinates or address queries.

### 4. Official Inquiry & Contact System (`ContactView`)
- **Theme-Matched Form Validation**: Replaced default browser tooltip popups with gold/amber glowing borders (`border-amber-500 bg-amber-950/20`) and inline error messages (`Please fill in this field.`).
- **Clean Executive Typography**: Removed all informal emojis from notification alerts and form helpers.
- **Generic Standard Placeholders**: Input fields utilize clean standard placeholders (`Enter your full name`, `Enter your email address`, `+91 98400 00000`, `Enter inquiry subject`).
- **Multi-Channel Dispatch**:
  - **Primary**: Direct client browser dispatch to `FormSubmit` (`https://formsubmit.co/ajax/barathvr385@gmail.com`).
  - **Secondary**: Next.js Server Route Handler (`/api/contact`) with fallback support for Web3Forms and SMTP.
  - **WhatsApp Integration**: Instant chat launch link (`https://wa.me/...`) included in notification payloads.
- **Anti-Bot Security**: Invisible honeypot field (`website_hp`) blocks automated spam scripts with zero friction for human users (no annoying puzzle captchas).

### 5. Media, Gallery & Lightbox Viewer (`MediaResourcesView` & `LightboxModal`)
- **Resource Downloads**: Categorized downloads for official constitution, belt syllabi, and tournament medical forms.
- **Photo & Video Gallery**: High-resolution gallery with full-screen zoom, keyboard navigation, and responsive mobile gesture support.

---

## 🔐 Administrative & Security Controls

| Feature | Mechanism | Purpose |
| :--- | :--- | :--- |
| **CMS Authentication** | SHA-standard passcode comparison (`kudo2026`) | Restricts admin editing capabilities to authorized secretariat staff. |
| **File Upload Safety** | MIME & extension filter (`.pdf`, `.doc`, `.docx`, <=15MB) | Prevents executable file injection and memory overflow. |
| **Spam Protection** | Hidden honeypot field (`website_hp`) | Discards bot submissions silently without degrading user experience. |
| **Input Sanitization** | Regex telephone & email format validators | Ensures valid contact details for secretariat follow-ups. |

---

## 📦 Local Development & Maintenance Guide

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### 1. Installation
```bash
git clone https://github.com/BARATH-VR/TamilNadu_Kudo_Website.git
cd TamilNadu_Kudo_Website
npm install
```

### 2. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Creating a Production Build
```bash
npm run build
npm run start
```

---

## 🚢 Continuous Deployment (Render)

The project is configured for automated continuous deployment on Render using `render.yaml`:
```yaml
services:
  - type: web
    name: tnska-website
    env: node
    plan: free
    buildCommand: npm run build
    startCommand: npm start
    envVars:
      - key: NODE_VERSION
        value: 20.10.0
```

Every `git push origin main` triggers an automatic build and zero-downtime deployment to **[https://tnska-website.onrender.com/](https://tnska-website.onrender.com/)**.

---

## 📞 Administrative Support & Governance

- **Governing Body**: Tamil Nadu State Kudo Association (TNSKA)
- **Headquarters**: Jawaharlal Nehru Stadium Complex, Periamet, Chennai, Tamil Nadu 600003
- **Official Inquiries**: `barathvr385@gmail.com`
- **Technical Maintainer**: BARATH VR ([GitHub](https://github.com/BARATH-VR))

---
*Documentation compiled and verified for TNSKA Production Release.*
