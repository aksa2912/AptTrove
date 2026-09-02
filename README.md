<div align="center">
  <img src="./public/logo.png" alt="AptTrove Logo" width="120" height="120"/>
  <h1>AptTrove</h1>
  <h3>A Treasure Trove of Aptitudes</h3>
  <p><i>"What if the right connection could find you?"</i></p>
</div>

---

## Table of Contents
1. [Overview](#-overview)
2. [Core Vision & Philosophy](#-core-vision--philosophy)
3. [Core Product Pillars](#-core-product-pillars)
4. [Visual Design System](#-visual-design-system)
5. [Tech Stack](#-tech-stack)
6. [Frontend/Backend Architecture Boundary](#-frontendbackend-architecture-boundary)
7. [Detailed File Structure](#-detailed-file-structure)
8. [Feature Breakdown](#-feature-breakdown)
9. [Getting Started](#-getting-started)
10. [Theme System](#-theme-system)
11. [Future Backend Integration](#-future-backend-integration)
12. [License](#-license)

---

## 🚀 Overview

**AptTrove** is a student collaboration and intelligent talent discovery platform. It is designed to help students, project builders, and idea creators find the **RIGHT people** based on a holistic combination of **Skills + Availability + Location + Team Fit**.

Unlike generic social media, LinkedIn, or Discord, AptTrove is an **intelligent connection platform**. It doesn't just show you people; it explains *why* they are the right match, considers your schedules, and understands your geographic proximity.

> **Important Note:** This repository contains the **Frontend UI/Prototype only**. The backend (Database, Authentication, Real-time AI) is currently not connected and is being built separately. This frontend is intentionally architected with strict TypeScript interfaces and clean separation of concerns, making it "Backend Ready."

---

## 💡 Core Vision & Philosophy

AptTrove is built on the idea that the right connection can find you. We focus on practical connections by considering four crucial elements:

1. **Skills:** What can you teach? What do you want to learn? What does your project need?
2. **Time:** When are you actually available?
3. **Location:** Where are you located (within a 10-50 km radius)?
4. **Team Fit:** How will you contribute to a team's balance?

---

## 🧩 Core Product Pillars

### 1. SkillSwap
A mutual knowledge exchange system. AptTrove recognizes complementary skills:
*   Student A knows **React/Figma** and wants to learn **Python/ML**.
*   Student B knows **Python/ML** and wants to learn **React/Figma**.
*   AptTrove generates a **Compatibility Score** with a "Why this match?" breakdown, highlighting overlapping availability and geographic proximity.

### 2. AI Team Builder
A premium guided workspace for forming balanced teams. It supports multiple use cases:
*   **Hackathons** (e.g., 3/5 seats filled)
*   **Startup / Business Ideas**
*   **College Projects**
*   **Research Projects**
*   **Personal & Community Projects**

It allows users to specify Project Name, Description, Required Skills, Team Size, Working Hours, and Search Radius (10km - 50km).

---

## 🎨 Visual Design System

The frontend uses the **AptTrove custom light/dark theme system**, preserving a distinct visual identity rather than simple color inversions.

### The Palette
Based on the provided visual reference, the design relies on a fresh, energetic, and modern palette:

*   **Primary Blue:** `#1E5AE8` (Vivid, energetic, trustworthy)
*   **Light Lavender:** `#C3B4F1` (Soft, supportive, elegant)
*   **Blush Pink:** `#FFD6DE` (Warm, human, inviting)
*   **Pure White:** `#FFFFFF` (Clean, spacious, modern)

**Supporting Colors for Accessibility:**
*   **Deep Navy/Ink:** `#0F172A` (For text and dark theme backgrounds)
*   **Muted Gray:** `#64748B` (For secondary text)
*   **Off-White/Light Gray:** `#F8FAFC` (For light theme backgrounds)

### Visual Identity
*   **Crystal/Gem Motif:** A recurring brand identity representing a "treasure trove" of talent, used in the hero section and UI elements.
*   **Elegant Connection Nodes:** Abstract nodes representing skills (Frontend, Backend, AI/ML, UI/UX) connected by glowing lines.
*   **Micro-interactions:** Fast, elegant hover transitions, skill chip selections, and subtle animations.

---

## 🛠️ Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)

---

## 🔒 Frontend/Backend Architecture Boundary

### Crucial Rule: No Mock Data
This frontend does **NOT** populate the UI with hardcoded fake students, fake API responses, or fake AI calls. 

Instead, it relies on:
1. **TypeScript Interfaces:** A centralized, strongly typed data model.
2. **UI State Management:** Frontend state to manage user interaction (e.g., adding skills, selecting team sizes).
3. **Empty States:** Beautifully designed empty states (e.g., *"No SkillSwap matches yet"*, *"No projects found within this radius"*).
4. **Skeleton States:** Loading skeletons ready to receive data from the future API.

### Data Flow Philosophy
The components are designed around this future flow:
`Backend Data` -> `Typed Data Model` -> `Frontend State` -> `Reusable Component` -> `User Interaction`

---

## 📁 Detailed File Structure

The codebase is highly componentized. Pages compose reusable components rather than having massive single files.

```text
apttrove-frontend
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── connections
│   ├── discover
│   ├── landing
│   ├── layout
│   ├── notifications
│   ├── profile
│   ├── shared
│   ├── skillswap
│   └── team-builder
├── lib
├── providers
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── node_modules
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
└── package.json