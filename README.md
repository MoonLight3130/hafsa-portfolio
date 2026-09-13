# Chandni Chauhan - Premium MERN Developer Portfolio

A pixel-accurate recreation of the portfolio reference design featuring a deep near-black theme (`#020908`), glowing neon emerald accents (`#00E88F`), futuristic framed portrait composition, interactive statistics cards, filterable projects, and a full-stack Express + MongoDB contact submission pipeline with resilient offline fallback.

---

## 🚀 Quick Start

### 1. Backend Server (Express + MongoDB)
```bash
cd server
npm install
npm run dev
# Server starts on http://localhost:5000
```
*Note: If MongoDB is not running locally, the server gracefully switches to in-memory fallback mode so all contact submissions still succeed without crashing.*

### 2. Frontend Application (React + Vite + Tailwind CSS)
In the project root directory:
```bash
npm install
npm run dev
# Dev server runs on http://localhost:5173 (or 5174)
```

To build for production:
```bash
npm run build
```

---

## 🎨 Visual Identity & Reference Accuracy
- **Brand Logo**: Cursive script typography (`Portfolio.`) with a signature neon green period.
- **Color Palette**:
  - Background: `#020908` (deep charcoal black)
  - Primary Neon Accent: `#00E88F` / `#00F19A`
  - Glow & Ambient: `rgba(0, 232, 143, 0.25 - 0.45)`
  - Cards: Semi-translucent dark glass with subtle emerald borders
- **Hero Composition**:
  - Two-column desktop composition with "Hello, I'm", neon green "Chandni Chauhan", and "Frontend Developer".
  - Grayscale professional portrait dynamically loaded from `public/images/profile.png`.
  - Neon geometric border, diagonal accent line with glowing node, dot matrix grids, and cursive "Chandni" signature overlay.
- **Stats Section**:
  - 4 cards directly underneath Hero (`10+ Years of Experience`, `30+ Projects Completed`, `5+ Technologies Mastered`, `100+ Happy Clients`).

---

## ⚙️ Centralized Configuration (`src/data/portfolio.js`)
Easily customize any content without modifying component code:
- Developer Name, Roles, and Greetings
- Bio and Extended Story
- Statistics (Numbers, Labels, Icons)
- Skills categorized with proficiency levels
- Services and Solutions
- Projects with tags, links, and screenshots
- Social links and resume download URL (`/resume.pdf`)

---

## 📁 Architecture Overview
```
├── public/
│   ├── images/
│   │   ├── profile.png           # Profile photo
│   │   ├── project-1.jpg         # FinTech project preview
│   │   └── project-2.jpg         # AI Studio project preview
│   ├── resume.pdf                # Downloadable CV
│   ├── robots.txt
│   └── sitemap.xml
├── server/
│   ├── config/
│   │   └── db.js                 # MongoDB connection & fallback
│   ├── controllers/
│   │   └── contactController.js  # Validation & message handling
│   ├── models/
│   │   └── Contact.js            # Mongoose Contact schema
│   ├── routes/
│   │   └── contactRoutes.js      # /api/contact and /api/health
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── src/
│   ├── components/
│   │   ├── About.jsx             # Story, education & core focus
│   │   ├── Contact.jsx           # Form with real-time feedback
│   │   ├── Footer.jsx            # Minimalist branded footer
│   │   ├── Hero.jsx              # Hero composition with signature
│   │   ├── Navbar.jsx            # Desktop & animated mobile nav
│   │   ├── Projects.jsx          # Filterable project showcase
│   │   ├── Services.jsx          # 6 specialized offering cards
│   │   ├── Skills.jsx            # Categorized tech badges
│   │   ├── SocialIcons.jsx       # Crisp SVG social brand icons
│   │   └── Stats.jsx             # 4 key stat cards with neon icons
│   ├── data/
│   │   └── portfolio.js          # Centralized data source
│   ├── App.jsx
│   ├── index.css                 # Design tokens & glow utilities
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
