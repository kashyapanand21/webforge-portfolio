# &lt;/&gt; Anand Kashyap — Portfolio

> **"I build things that think."**  
> A portfolio that doesn't look like a portfolio.

![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?style=flat&logo=vite)
![Theme](https://img.shields.io/badge/Theme-Dark%20%2F%20Light-c678dd?style=flat)
![Deployed on](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222?style=flat&logo=github)

---

## 🧠 Concept

Most portfolios look the same — hero section, cards, contact form.

This one doesn't.

**Code as Identity** is a portfolio built to look exactly like a code editor (VS Code). Your identity, skills, projects, and contact info are all written *as JavaScript source code* — with real syntax highlighting, a file explorer sidebar, tabs, line numbers, breadcrumbs, and a blinking cursor.

Because if you're a developer, your code *is* your identity.

---

## ✨ Features

- **VS Code-style UI** — sidebar, tabs, breadcrumbs, status bar, line numbers
- **Dark / Light mode** — One Dark Pro & GitHub Light themes, togglable in one click
- **Syntax highlighted content** — keywords, strings, comments, properties all colored
- **4 "files" as sections** — `about.js` · `skills.js` · `projects.js` · `contact.js`
- **Clickable links** — GitHub, LinkedIn, email, live demos — all styled as code strings
- **Blinking cursor** — at the end of every active file
- **Smooth transitions** — fade animation on section switch
- **Fully responsive** — works on mobile and tablet
- **Built with React + Vite** — fast, minimal, production-ready

---

## 🗂 Sections

| File | Content |
|------|---------|
| `about.js` | Identity object — name, tagline, college, interests, fun fact |
| `skills.js` | Import statements — languages, frameworks, tools, DSA progress |
| `projects.js` | Function declarations — 8 projects with stack, highlights, links |
| `contact.js` | Contact object — email, GitHub, LinkedIn, availability status |

---

## 🚀 Projects Showcased

- **VaultFind** — Offline-first AI file search (Electron + Transformers.js)
- **Chain Reaction AI Bot** — Minimax + Alpha-Beta Pruning (IIT Patna Apeiron 2026)
- **You Are the Internet** — Scrollable internet history experience (GSAP + Web Audio)
- **NumPy Neural Network** — Built from scratch, no ML libraries
- **TrustSplit** — On-chain bill splitting dApp (Solidity + Hardhat)
- **Connect the Dots** — Containerized cloud infra (Docker + Nginx + MongoDB)
- **NITP Robotics Club Website** — Official club frontend (with Zaid Ali)
- **Sewa Setu** — Hyperlocal student coordination platform (Firebase + OpenStreetMap)

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Bundler | Vite 5 |
| Styling | Pure CSS with CSS Variables |
| Fonts | JetBrains Mono + Syne |
| Deployment | GitHub Pages |

---

## 📦 Run Locally

```bash
# Clone the repo
git clone https://github.com/kashyapanand21/webforge-portfolio.git

# Navigate into it
cd webforge-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🏗 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 🌐 Deploy

```bash
npm run deploy
```

Live at: **[kashyapanand21.github.io/webforge-portfolio](https://kashyapanand21.github.io/webforge-portfolio)**

---

## 📁 Project Structure

```
webforge-portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx              # Editor shell — sidebar, tabs, theme toggle
    ├── App.css              # Full theme system + syntax highlighting
    ├── index.css
    ├── components/
    │   └── Line.jsx         # Reusable code line + syntax token helpers
    └── sections/
        ├── AboutCode.jsx    # about.js content
        ├── SkillsCode.jsx   # skills.js content
        ├── ProjectsCode.jsx # projects.js content
        └── ContactCode.jsx  # contact.js content
```

---

## 🎨 Theme System

Themes are driven entirely by CSS variables on `[data-theme]`.

| Token | Dark (One Dark) | Light (GitHub) |
|-------|----------------|----------------|
| Keywords | `#c678dd` | `#d73a49` |
| Functions | `#61afef` | `#6f42c1` |
| Strings | `#98c379` | `#032f62` |
| Comments | `#5c6370` | `#6a737d` |
| Properties | `#e5c07b` | `#e36209` |

---

## 👤 About Me

**Anand Kashyap**  
B.Tech CSE '29 · NIT Patna  
Roll No. 2506050

I'm a second-year CS student interested in ML/AI engineering, competitive programming, and building developer tools. Open to internships and collaborations.

- 🐙 GitHub: [github.com/kashyapanand21](https://github.com/kashyapanand21)
- 💼 LinkedIn: [linkedin.com/in/anand-kashyap](https://linkedin.com/in/anand-kashyap)
- 📧 Email: anandkashyap@nitpatna.ac.in

---

## 📄 License

MIT — feel free to fork and make it your own. A credit would be appreciated.

---

*Built for AI WebForge Hackathon · April 2026 · NIT Patna*