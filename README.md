<div align="center">

  <img src="./public/file.svg" alt="AptTrove Logo" width="110" />

  # AptTrove

  ### A Treasure Trove of Aptitudes

  <p>
    <i>“What if the right connection could find you?”</i>
  </p>

  <p>
    A student-centric platform for discovering the right people to learn from,
    build with, and collaborate with.
  </p>

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [The Problem](#-the-problem)
- [Our Vision](#-our-vision)
- [Core Product](#-core-product)
- [How AptTrove Works](#-how-apttrove-works)
- [Key Features](#-key-features)
- [Matching Philosophy](#-matching-philosophy)
- [Design System](#-design-system)
- [Technology Stack](#-technology-stack)
- [Frontend Architecture](#-frontend-architecture)
- [Current Project Status](#-current-project-status)
- [Project Structure](#-project-structure)
- [Future Backend Integration](#-future-backend-integration)
- [Getting Started](#-getting-started)
- [Roadmap](#-roadmap)
- [License](#-license)

---

# 🚀 Overview

**AptTrove** is an intelligent student collaboration and talent-discovery platform designed around one simple idea:

> **The right connection shouldn't have to be searched for endlessly — it should find you.**

Students often know what they want to learn, what they can contribute, or what they want to build, but finding the right people can be difficult.

AptTrove creates a structured matching layer between people by considering:

**Skills + Availability + Location + Team Fit**

It focuses on two core experiences:

- 🤝 **SkillSwap** — find people who can teach what you want to learn while learning what you can teach.
- 🧠 **AI Team Builder** — find complementary people for hackathons, projects, startup ideas, research, and other collaborative work.

---

# 🎯 The Problem

Students and project builders frequently face situations like:

- “I want to learn Python, but I don't know anyone who can teach me.”
- “I know Figma, but I want to learn backend development.”
- “I have a hackathon idea, but I need a frontend developer.”
- “I need a UI/UX designer nearby.”
- “I found someone with the right skills, but our schedules don't overlap.”
- “There are people around me with exactly the skills I need, but I don't know how to find them.”

Existing platforms solve parts of these problems:

**LinkedIn** → professional networking  
**Discord / WhatsApp** → communication  
**Traditional student groups** → manual discovery

AptTrove focuses on the missing layer:

> **Intelligent discovery and matching.**

---

# 💡 Our Vision

AptTrove aims to make people's abilities more discoverable.

Instead of asking users to search through large communities, AptTrove considers multiple factors to identify practical connections.

### For learning:

> What can you teach?  
> What do you want to learn?

### For projects:

> What are you building?  
> What skills are missing?

### For practical collaboration:

> Where are you located?  
> When are you available?

The goal is to turn invisible potential into meaningful connections.

---

# 🧩 Core Product

## 1. SkillSwap

**SkillSwap** is AptTrove's peer-to-peer skill exchange experience.

Example:

### Student A

**Can Teach**
- React
- Figma
- Frontend

**Wants to Learn**
- Python
- Machine Learning

### Student B

**Can Teach**
- Python
- Machine Learning

**Wants to Learn**
- React
- UI/UX

AptTrove identifies the complementary relationship and can surface a match based on:

- Skill compatibility
- Learning alignment
- Availability overlap
- Location
- Other relevant matching factors

The result is presented with a transparent compatibility score and a clear explanation of **why the match exists**.

---

## 2. AI Team Builder

AptTrove's second major experience is the **AI Team Builder**.

It is designed for more than hackathons.

Users can use it for:

- Hackathons
- College projects
- Startup ideas
- Research projects
- Personal projects
- Community projects
- Software/product ideas

A project creator provides:

- Project name
- Project description
- Required skills
- Team size
- Working hours
- Location
- Search radius

The Team Builder then helps identify people who could complete the team.

### Example

A project requires:

- Frontend
- Backend
- AI/ML
- UI/UX

AptTrove should prioritize a balanced team rather than returning four people with the same specialization.

---

# 🌍 Local Talent Discovery

A key part of Team Builder is **location-aware discovery**.

A project creator can:

- Use their current location
- Select a location manually
- Choose a search radius

Available radius options:

**10 km · 20 km · 30 km · 40 km · 50 km**

This allows users to discover relevant collaborators nearby.

A candidate can eventually be evaluated using:

- Skill match
- Team fit
- Availability
- Distance
- Project relevance

For example:

> **UI/UX Designer**  
> 7.8 km away  
> Available Saturday afternoon  
> Strong fit for the project's UI/UX requirement

---

# ⏰ Availability Matching

AptTrove also considers **when people are available**, rather than matching only by skills.

Users can define:

- Teaching availability
- Learning availability
- Project/team availability

AptTrove can then identify overlapping time windows.

Example:

**Project:** Saturday, 2–6 PM  
**Candidate:** Saturday, 1–5 PM  
**Overlap:** 3 hours

This helps turn a theoretically good match into a practically usable one.

---

# 🧠 Matching Philosophy

AptTrove is designed around **transparent matching**.

The goal is not to create a black-box recommendation system.

Conceptually:

```text
Skills
   ↓
Availability
   ↓
Location
   ↓
Team Fit
   ↓
Compatibility
   ↓
Recommendation
   ↓
Connection

Every recommendation should answer:

“Why was this person recommended to me?”

A match may show factors such as:

Skill compatibility
Learning alignment
Time overlap
Distance
Project relevance
Missing team skills filled
✨ Key Features
Authentication & Onboarding

Students create accounts and provide basic academic and collaboration information.

Skill Profile

Separate:

Skills I Can Teach
Skills I Want to Learn
SkillSwap

Find mutually beneficial peer-learning partners.

Smart Matching

Calculate compatibility using relevant matching factors.

Transparent Match Reasons

Show why a person or team recommendation makes sense.

Location-Based Matching

Find people within a selected geographic radius.

Availability & Time Matching

Identify people whose schedules overlap.

AI Team Builder

Create balanced teams for projects and hackathons.

Team Seats

Display filled and open positions within a team.

Team Fit Matching

Identify candidates who fill missing skill requirements.

Team Discovery

Discover projects and teams searching for specific skills.

Discover

Search for people, skills, projects, and teams.

AI Recommendations

Surface relevant people, SkillSwaps, teams, and opportunities.

Connection System

Send connection requests and reveal contact details only after acceptance.

Notifications

Display requests, invitations, applications, and other relevant activity.

Student Profile

Show skills, interests, projects, teams, availability, and collaboration information.

Activity Stats

Track useful activity such as connections, SkillSwaps, hours learned/taught, and teams joined.

Focused AI Assistant

Provide AptTrove-specific assistance for matching, team formation, and recommendations.

Market-Updated Career Skills

Support a future system where career skill requirements can be updated as industry needs change.

🎨 Design System

AptTrove uses a custom visual identity called:

AMETHYST DAWN HAZE

The current visual direction is inspired by a fresh blue, lavender, blush, and warm-neutral palette.

Primary Palette
Color	Hex
Bright Sky Blue	#3788FE
Soft Periwinkle Lavender	#BEB3FF
Blush Pink	#FFD7E0
Warm Off-White	#FFF5F3

Supporting neutral tones may be used for typography, borders, accessibility, and dark mode.

Visual Language

AptTrove's design emphasizes:

Premium typography
Spacious layouts
Rounded cards
Soft shadows
Subtle gradients
Gentle glow effects
Minimal glassmorphism
Elegant micro-interactions
Skill nodes and connection paths
Crystal/gem-inspired branding

The design should feel:

Modern · Intelligent · Student-Centric · Warm · Sophisticated

It should not resemble a generic AI dashboard, LinkedIn clone, or social-media platform.

🌓 Theme System

AptTrove supports:

☀️ Light Mode
🌙 Dark Mode
Default

Light Mode

The light theme uses the warm off-white, lavender, blue, and blush palette to create a visually rich interface without looking dull.

Dark mode preserves the same AptTrove identity with deeper surfaces and appropriately adjusted contrast.

🛠 Technology Stack
Frontend
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
Lucide React
Framer Motion
Planned Backend

The backend is being developed separately and is not currently part of this frontend repository.

Planned technologies include:

Supabase
PostgreSQL
Supabase Auth
Gemini API
🏗 Frontend / Backend Architecture

The current repository is intentionally frontend-only.

The frontend is being designed to connect to a real backend later without requiring a major redesign.

The intended architecture is:

Future Backend
      ↓
Typed Data Models
      ↓
Frontend State
      ↓
Reusable Components
      ↓
User Interaction

For AI-powered features:

User Input
    ↓
Future Backend / AI API
    ↓
Structured Response
    ↓
Frontend Components

The frontend does not currently implement:

Real authentication
Database operations
Supabase
PostgreSQL
Gemini API
Server-side matching
Real-time messaging
Payment systems
🧱 Current Project Status

Current stage: Frontend Development

The current repository focuses on creating the complete AptTrove user experience and component architecture.

The backend is being implemented separately.

The frontend is therefore designed around:

Reusable components
Strong TypeScript models
Clear UI states
Loading states
Empty states
Error states
Backend-ready interfaces

No large fake production dataset is intentionally embedded into the application.

📁 Project Structure

Current repository structure:

apttrove-frontend/
│
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── connections/
│   ├── discover/
│   ├── landing/
│   ├── layout/
│   ├── notifications/
│   ├── profile/
│   ├── shared/
│   ├── skillswap/
│   └── team-builder/
│
├── lib/
│
├── providers/
│
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
└── package.json

node_modules/ is intentionally omitted because it is generated locally and should not be committed to the repository.

🔌 Future Backend Integration

The frontend is being structured so the following systems can later be connected:

User System
Authentication
Profiles
Academic details
Skills
Matching System
SkillSwap matching
Compatibility scores
Transparent match reasons
Location matching
Availability matching
Team fit matching
Collaboration System
Connection requests
Contact reveal
Team seats
Team applications
Projects and teams
AI System
Match explanations
Team recommendations
AptTrove-focused AI Assistant
Discovery System
People
Projects
Hackathons
Teams
Skills
🚧 Roadmap
Phase 1 — Frontend Foundation
 Brand identity
 Design system
 Component architecture
 Complete landing page
 Application shell
 Responsive layouts
 Light/dark theme
Phase 2 — Core Product UI
 Onboarding
 Student profile
 SkillSwap
 Discover
 Connections
 Recommendations
Phase 3 — Team Builder UI
 Project creation
 Required skills
 Location selection
 Radius selection
 Availability
 Team seats
 Team-fit visualization
 AI Assistant interface
Phase 4 — Backend Integration
 Authentication
 Database
 Real profiles
 Matching engine
 Connection system
 AI integration
Phase 5 — Refinement
 Accessibility
 Performance optimization
 Mobile refinement
 Error handling
 Production polish
🎯 Product Philosophy

AptTrove is built around a simple belief:

People don't always need more platforms. They need better connections.

Whether someone wants to learn a skill, join a hackathon team, find a project collaborator, or build something from an idea, AptTrove aims to make discovering the right people easier.