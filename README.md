# 🚀 Zeeshan Hassan — Portfolio

A responsive portfolio website showcasing my experience as a Software Engineer — full-stack web development, AI-integrated tools, and workflow automation (n8n / Make.com / Zapier).

**Live site:** https://mzh-portfolio.netlify.app

## ✨ Features

- 🎨 Fully responsive design across devices
- 💫 Smooth animations and transitions with Framer Motion
- 🏆 Project showcase with live demo and source links
- 📬 Contact form for freelance/client inquiries
- 🌙 Dark theme UI

## 🛠️ Tech Stack

- **Frontend Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui
- **Icons:** Lucide Icons
- **Routing:** React Router
- **Data fetching:** React Query

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/M-Zeeshan-Hassan/Portfolio.git
   ```
2. Navigate to the project directory:
   ```
   cd Portfolio
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open http://localhost:5173 in your browser.

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/     # Section components (Hero, About, Projects, Contact, etc.)
│   │   └── ui/         # Reusable UI primitives (shadcn/ui based)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Route-level pages
│   └── index.css        # Global styles
├── public/               # Static assets and project images
└── package.json
```

## 🎨 Customization

### Adding Projects

Project entries live directly in `src/components/Projects.tsx` inside the `projectsData` array — add an object with `title`, `description`, `image`, `tags`, `demoUrl`, and `githubUrl`.

### Styling

Built with Tailwind CSS. Global styles live in `src/index.css`; Tailwind config is in `tailwind.config.ts`.

## 📦 Deployment

1. Build the project:
   ```
   npm run build
   ```
2. Deploy the `dist` directory to your preferred static hosting service (currently deployed on Netlify).

## 📞 Contact

For freelance work, collaborations, or questions — reach out via the contact form on the site or at mzhassan980@gmail.com.

---

Made with ❤️ by Zeeshan Hassan
