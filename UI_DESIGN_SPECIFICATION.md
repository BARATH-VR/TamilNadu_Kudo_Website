# Tamil Nadu State Kudo Association (TNSKA)
## Official UI/UX Design System & Specification Document

**Version:** 2.0 (Modern Federation Redesign)  
**Author:** TNSKA Frontend Architecture & Design Team  
**Target Platform:** Web (Desktop, Tablet, Mobile Responsive)  
**Date:** September 2026  

---

## 1. Executive Vision & Brand Identity

The Tamil Nadu State Kudo Association (TNSKA) website serves as the authoritative digital portal for athletes, parents, senseis, district secretaries, and sports authorities (SGFI, SDAT, MYAS).

### Design Philosophy
1. **Official Authority, Not AI Slop:** No generic cartoonish martial arts stock clips or neon gimmicks. The site conveys the solemn discipline and physical rigor of Daido Juku / Kudo.
2. **60-30-10 Color Discipline:**
   - **60% Dominant Canvas:** Deep obsidian slate (`#080c14`) providing a clean, glare-free, cinematic backdrop.
   - **30% Structural Surfaces:** Elevated midnight cards (`#0e1524`) with razor-thin hairline borders (`rgba(255, 255, 255, 0.08)`).
   - **10% Federation Accents:** Japanese martial crimson (`#e11d48`) for high-intent actions and championship gold (`#d4af37` / `#e5c378`) for medals and honors.
3. **Institutional Trust Lineage:** The UI clearly communicates the governance link from local district dojos up to KIFI India and KIF Japan World HQ (Tokyo).

---

## 2. Color Palette & Theme Tokens

The application features an integrated multi-theme system controlled via `data-theme` attributes on the root HTML element.

### Theme 1: Midnight Crimson (Default)
| Token Name | Hex / Value | Purpose |
| :--- | :--- | :--- |
| `--bg-main` | `#080c14` | Global background canvas |
| `--bg-surface` | `#0e1524` | Primary card, modal, and drawer background |
| `--bg-surface-elevated` | `#151e33` | Popovers, active dropdowns, elevated states |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Grid dividers, card borders |
| `--border-hover` | `rgba(255, 255, 255, 0.18)` | Interactive hover borders |
| `--accent-primary` | `#e11d48` | Primary CTA buttons, badges, kicker markers |
| `--accent-secondary` | `#f59e0b` | Gold medal highlights, trophy accents |
| `--text-main` | `#f8fafc` | Headlines (H1, H2, H3), key metrics |
| `--text-secondary` | `#94a3b8` | Body copy, addresses, secondary descriptions |
| `--text-muted` | `#64748b` | Timestamps, micro-labels, breadcrumbs |

### Theme 2: Obsidian Gold (Prestige Championship)
- **Canvas:** `#0b0b0d` (Jet Charcoal)
- **Surfaces:** `#141418` (Dark Graphite)
- **Accents:** `#d4af37` (Championship Gold) with `#fef08a` highlights.
- **Mood:** Dignified, historic, tournament medal podium aesthetic.

### Theme 3: Tatami Emerald (Traditional Budo)
- **Canvas:** `#060e0a` (Deep Evergreen)
- **Surfaces:** `#0d1a13` (Dark Moss)
- **Accents:** `#10b981` (Dojo Mat Green) with `#34d399` text highlights.
- **Mood:** Traditional Japanese dojo training discipline.

### Theme 4: Federal Ivory (High-Contrast Light Mode)
- **Canvas:** `#f8fafc` (Soft Crisp Paper)
- **Surfaces:** `#ffffff` (Pure White with subtle drop shadows)
- **Accents:** `#be123c` (Imperial Federation Maroon)
- **Text:** `#0f172a` (Deep Slate Slate Black for optimal daylight reading)

---

## 3. Typography & Hierarchy Rules

The UI relies on system font stacks headed by Inter with strict hierarchical sizing:

| Level | Size (Mobile $\rightarrow$ Desktop) | Weight | Line Height | Case / Tracking | Example Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Kicker / Overline** | `11px` - `12px` | 600 SemiBold | Normal | UPPERCASE / +0.05em | `"OFFICIAL STATE GOVERNING BODY"` |
| **H1 Display** | `32px` $\rightarrow$ `60px` | 900 Black | 1.12 | Normal / -0.03em | Hero main banner with balanced wrap |
| **H2 Section** | `24px` $\rightarrow$ `36px` | 900 Black | 1.2 | Normal / -0.02em | Section titles (`"Pillars of the Sport"`) |
| **H3 Card Header** | `16px` $\rightarrow$ `20px` | 700 Bold | 1.3 | Normal / -0.01em | Bento feature title, dojo name |
| **Body Large** | `15px` $\rightarrow$ `18px` | 400 Regular | 1.6 | Normal | Hero subheading description |
| **Body Regular** | `13px` $\rightarrow$ `14px` | 400 Regular | 1.5 | Normal | Card paragraphs, circular excerpts |
| **Tabular Numbers** | `24px` $\rightarrow$ `36px` | 900 Black | 1.0 | Monospace / tabular-nums | Quantitative stats (`14+`, `3,500+`) |
| **Micro Labels** | `10px` $\rightarrow$ `11px` | 500 Medium | 1.4 | Normal | File size (`1.2 MB`), Date (`Oct 15, 2026`) |

---

## 4. Layout Architecture & Component Specifications

### 4.1 Top Navigation Bar (The Top-Bar Contract)
- **Height:** 64px (`h-16`)
- **Position:** `sticky top-0 z-50` with `backdrop-blur-md`
- **Zone 1 (Left - Brand):**
  - High-density square crest (`TN` monogram in rose gradient).
  - Wordmark: "Tamil Nadu State Kudo Association" (or Tamil text when active).
- **Zone 2 (Center - Nav Links):**
  - Clean text links: **About**, **Districts**, **Events & Results**, **Resources**, **Contact**.
  - Floating hover card dropdown menus with subtle delays (no jumping layouts).
- **Zone 3 (Right - Utilities & Actions):**
  - **Quick Search Modal Button** (`Search` icon)
  - **Theme Switcher Popover** (`Palette` icon with swatches)
  - **Bilingual Toggle** (`EN / தமிழ்`)
  - **Primary CTA:** `"Find Academy"` in high-visibility crimson button
  - **Executive Lock:** Quick admin login access

### 4.2 Hero Section
- **Visual Staging:** High-fidelity athletic photography showcasing two Kudo fighters in dogi with official Super Safe clear face shield armor.
- **Scrim:** Smooth vertical gradient (`from-[#080c14] via-[#080c14]/40 to-transparent`) overlaying the photo.
- **Caption Bar:** Integrated context card explaining the safety features of patented Kudo headgear.
- **Metric Ribbon:** 4-column balanced grid with tabular figures:
  - `14+` Affiliated Districts
  - `3,500+` Registered Athletes
  - `24` National Medals
  - `100%` Headgear Safety Standard

### 4.3 Three Pillars Bento Grid
- **Card 1 (Championship Glory):** Podium gold medal photography with direct link to national results.
- **Card 2 (Dan Certification):** Dojo master instruction photography with syllabus download link.
- **Card 3 (Zero Injury Mandate):** Youth safety focus with headgear regulations.

### 4.4 Institutional Lineage (Trust Chain)
- 4-step horizontal process bar connected with subtle directional arrows:
  1. `01 District Secretariats` (Grassroots Training)
  2. `02 TNSKA State Body` (State Selection & Ranking)
  3. `03 KIFI National Federation` (MYAS & SGFI School Games Recognized)
  4. `04 KIF Japan Global HQ` (Tokyo World Movement)

### 4.5 District Directory & Dojo Finder
- Dual-mode filtering: District Dropdown selector (covering all 38 revenue districts of Tamil Nadu) + live instant search query.
- Dojo Card elements:
  - District tag & "Verified Dojo" security badge
  - Dojo / Academy Title
  - Certified Sensei name and Dan rank
  - Physical venue address with telephone
  - Direct 1-click **"Get Directions"** linking directly to Google Maps navigation coordinates.

### 4.6 Official Notice Board & Document Vault
- Split architecture:
  - **Circulars:** Dated press releases and executive circulars with categorization.
  - **Downloads:** Medical clearance forms, tournament rules, kyu syllabus with strict file-type indicators (PDF / DOC) and exact file sizes.

### 4.7 Secretariat Contact & Verified Inquiry Engine
- Side-by-side layout:
  - **Left Column:** Official physical secretariat address at Jawaharlal Nehru Stadium, Chennai + direct phone/email + interactive map launcher.
  - **Right Column:** Verified contact form with category routing, real-time input validation, honeypot anti-spam, and immediate feedback toast notifications.

---

## 5. Mobile & Responsive Behavior

1. **Fluid Typography:** Text scales automatically down on smaller screens (`text-3xl sm:text-5xl lg:text-6xl`).
2. **Mobile Drawer:** Clean sliding sheet featuring large touch targets (minimum 44px height), embedded bilingual toggle, and theme switch buttons.
3. **No Horizontal Scroll:** All tables and grid items break cleanly into single-column cards on viewports under 640px.

---

## 6. Verification & Implementation Checklist

- [x] Obsidian & Slate dark background with no harsh neon saturation.
- [x] Official Kudo red accent (`#e11d48`) with balanced 60-30-10 distribution.
- [x] High-resolution authentic sports photography for sparrings, podiums, and dojos.
- [x] Zero-pill discipline (no candy-capsule tags; clean typographic separators).
- [x] Full Tamil & English dual-language instant translation.
- [x] Integrated 4-theme system (Crimson, Gold, Emerald, Light).
- [x] Mobile drawer with full accessibility and overflow protection.
- [x] Production build and TypeScript verification complete.
