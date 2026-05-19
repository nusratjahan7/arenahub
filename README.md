# 🏟️ ArenaHub

> **Book the perfect sports arena in seconds.**  
> A modern, full-stack sports facility booking platform where users can discover, book, and manage football fields, cricket grounds, badminton courts, gyms, and more — all in one place.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-arenahub--eta.vercel.app-brightgreen?style=for-the-badge)](https://arenahub-eta.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)

---

## 🌟 Overview

ArenaHub is a full-stack sports venue booking platform that connects athletes and sports enthusiasts with the best local facilities. Whether you're looking to book a football turf, badminton court, gym, or yoga studio — ArenaHub makes it seamless, fast, and reliable.

The platform supports **1,200+ venues** across cities, offering real-time slot availability, instant booking confirmation, and an intuitive interface designed for both users and facility owners.

---

## ✨ Key Features

### 🏠 For Athletes & Users

- **Instant Booking** — Reserve sports facilities by the hour with real-time availability. No double bookings, no waiting.
- **Multi-Sport Support** — Browse and book Football fields, Cricket grounds, Badminton courts, Basketball courts, Gyms, Swimming pools, Yoga studios, and more.
- **Smart Search & Filters** — Filter venues by sport type, location, price range, and capacity to find the perfect match fast.
- **Featured Facilities** — Hand-picked top-booked arenas updated weekly so users always discover the best venues.
- **Booking Management** — View, track, and manage all your upcoming and past bookings from a personal dashboard.
- **Player Reviews** — Read authentic reviews from real athletes and leave your own after each session.
- **4.9-star Rated Venues** — Only verified, high-quality facilities are listed on the platform.

### 🏢 For Facility Owners

- **List Your Facility** — Owners can submit and manage their venues directly through the platform.
- **Slot Management** — Define available hours, set pricing, and control capacity for each facility.
- **Booking Visibility** — See all incoming bookings and manage them from the owner dashboard.

### 🔐 Authentication & Security

- **Secure Auth with BetterAuth** — Full authentication system with session management and JWT-based security via `jose-cjs`.
- **Protected Routes** — Booking and dashboard routes are fully protected; unauthenticated users are redirected to login.
- **Role-Based Access** — Separate flows for regular users and facility owners/admins.

### 🎨 UI/UX

- **Animated Interactions** — Smooth, physics-based animations powered by **Framer Motion** across page transitions, cards, and modals.
- **Modern Component Library** — Built with **HeroUI** and **DaisyUI** for polished, accessible UI components out of the box.
- **Fully Responsive** — Optimized for mobile, tablet, and desktop viewports.
- **Optimistic UI** — Instant feedback on user actions without waiting for server responses.
- **3-Step Booking Flow** — Browse → Pick a Slot → Play. Designed to get you from search to confirmation in under a minute.

---

## 🛠️ Tech Stack

### Frontend

| Technology                                                | Purpose                           |
| --------------------------------------------------------- | --------------------------------- |
| [Next.js](https://nextjs.org/)                            | React framework, routing, SSR/SSG |
| [React](https://react.dev/)                               | UI component library              |
| [Tailwind CSS](https://tailwindcss.com/)                  | Utility-first styling             |
| [Framer Motion](https://www.framer.com/motion/)           | Animations and transitions        |
| [HeroUI](https://heroui.com/)                             | UI component system               |
| [DaisyUI](https://daisyui.com/)                           | Tailwind component plugin         |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library                      |

### Backend

| Technology                                | Purpose                             |
| ----------------------------------------- | ----------------------------------- |
| [Express.js](https://expressjs.com/)      | REST API server                     |
| [BetterAuth](https://better-auth.com/)    | Authentication & session management |
| [MongoDB](https://mongodb.com/)           | NoSQL database                      |
| [jose-cjs](https://github.com/panva/jose) | JWT signing & verification          |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** v9+
- **MongoDB** (local or [MongoDB Atlas](https://cloud.mongodb.com))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/arenahub.git
   cd arenahub
   ```

2. **Install frontend dependencies**

   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables** (see [Environment Variables](#environment-variables))

5. **Run the development servers**

   In one terminal (backend):

   ```bash
   cd server
   npm run dev
   ```

   In another terminal (frontend):

   ```bash
   cd client
   npm run dev
   ```

6. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
arenahub/
├── src/
│   ├── app/                            # Next.js App Router
│   │   ├── api/
│   │   │   └── auth/[...all]/
│   │   │       └── route.js            # BetterAuth catch-all handler
│   │   ├── bookings/
│   │   │   └── page.jsx                # User bookings dashboard
│   │   ├── facilities/
│   │   │   ├── [id]/
│   │   │   │   └── page.jsx            # Facility detail page
│   │   │   └── page.jsx                # All facilities listing
│   │   ├── facilities-add/
│   │   │   └── page.jsx                # Add new facility (owner)
│   │   ├── facilities-manage/
│   │   │   └── page.jsx                # Manage owned facilities
│   │   ├── login/
│   │   │   └── page.jsx                # Login page
│   │   ├── signup/
│   │   │   └── page.jsx                # Signup page
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js                   # Root layout
│   │   ├── loading.jsx                 # Global loading UI
│   │   ├── not-found.jsx               # 404 page
│   │   └── page.js                     # Homepage
│   │
│   ├── Components/
│   │   ├── Facilities/
│   │   │   ├── AddFacilityForm.jsx
│   │   │   ├── AllFacilities.jsx
│   │   │   ├── BookingCancel.jsx
│   │   │   ├── BookingCard.jsx
│   │   │   └── FacilityCard.jsx
│   │   ├── Homepage/
│   │   │   ├── Banner.jsx
│   │   │   ├── CoachingSection.jsx
│   │   │   ├── Featured.jsx
│   │   │   ├── FeaturedCard.jsx
│   │   │   ├── FeaturedHeader.jsx
│   │   │   ├── FeaturedSlider.jsx
│   │   │   ├── Review.jsx
│   │   │   └── Steps.jsx
│   │   ├── Shared/
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── DeleteAlert.jsx
│   │   ├── EditModal.jsx
│   │   └── TypeDropdown.jsx
│   │
│   └── lib/
│       ├── action.js                   # Server actions
│       ├── auth-client.js              # BetterAuth client setup
│       └── auth.js                     # Auth config & helpers
│
├── proxy.js                            # Dev proxy / Express backend entry
├── .env
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```

---

## 🔐 Environment Variables

### Frontend (`client/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/arenahub
```

### Backend (`server/.env`)

```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/arenahub
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:3000
```

---

## 📜 Scripts

### Frontend

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

### Backend

```bash
npm run dev       # Start with nodemon (hot reload)
npm start         # Start production server
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

<div align="center">
  <p>Built with ❤️ for athletes everywhere.</p>
  <a href="https://arenahub-eta.vercel.app">🌐 Live Demo</a> · 
  <a href="mailto:nusratjahan77222@gmail.com">📧 Contact</a>
</div>
