# Harsh Vardhan Singh — Data Analyst & QA Intern Portfolio

A premium, dark-themed personal portfolio for **Harsh Vardhan Singh** — a Data Science graduate from Chanakya University, QA Intern at Arcserve, and Data Analyst. Focused on building automated ETL pipelines, interactive dashboards, and scalable data models.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**. Designed for easy hosting on platforms like **Vercel** or **GitHub Pages**.

## Stack

- **Framework**: React 18 / TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (smooth scroll effects, scaling cards, interactive transitions)
- **Icons**: Lucide React
- **Typography**: Kanit font (Google Fonts, weights 300–900)

## Sections

1. **Hero** — Features a cinematic video avatar background (with interactive sound controls), dynamic heading text, and clean navigation.
2. **About** — Introduction bio and categorised data skills.
3. **Services** — Data Analytics, Business Intelligence, ETL Pipelines, and Machine Learning.
4. **Projects** — Interactive, sticky-stacking project showcase cards.
5. **Contact** — Quick links to Email, WhatsApp, LinkedIn, and GitHub.

## Run Locally

To get the project running on your local machine:

```bash
# Install dependencies
npm install

# Start the development server (runs on http://localhost:5173)
npm run dev

# Build the production bundle (creates files in /dist)
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```text
src/
├── App.tsx                    # Composes all layout sections
├── main.tsx                   # React app entry point
├── index.css                  # Tailwind styles + scroll-line keyframes
└── components/
    ├── HeroSection.tsx        # Video background, audio toggle, and main title
    ├── AboutSection.tsx       # Bio text, interactive skill badges, and floating 3D icons
    ├── ServicesSection.tsx    # Details of data analyst services offered
    ├── ProjectsSection.tsx    # Stacking sticky cards with preview image layouts
    ├── ContactSection.tsx     # Clean grid of contact channels and footer
    │
    ├── ContactButton.tsx      # Smooth-scrolling contact button component
    ├── LiveProjectButton.tsx  # Dynamic button linking to external project codes
    ├── FadeIn.tsx             # Intersection observer-based scroll animation wrapper
    └── AnimatedText.tsx       # Scroll-driven character-by-character text reveal
```

## Featured Projects

| Project | Code / Repository | Key Technologies |
|---|---|---|
| **ETL & Analytics Platform** | *Internal Project* | ETL pipelines, Python, PostgreSQL, Data Visualization |
| **Real-Time Weather Monitor** | [GitHub Repo](https://github.com/harsh0904-dot/Real-Time-Alert-Mechanism-System) | Real-time streaming, automated alert system |
| **Diabetes Prediction Model** | [GitHub Repo](https://github.com/harsh0904-dot/Machine-Learning-Research-Paper) | Python, Machine Learning, predictive modeling |
| **Smart Campus Chatbot** | [GitHub Repo](https://github.com/harsh0904-dot/Chatbot-Assistant) | NLP, Python, databases, chatbot interface |

## Customisation

| If you want to change | Edit this file |
|---|---|
| Video avatar background | Replace `public/intro.mp4` or modify [HeroSection.tsx](file:///d:/portfolio/harsh-portfolio/src/components/HeroSection.tsx) |
| Name, titles, layout text | [HeroSection.tsx](file:///d:/portfolio/harsh-portfolio/src/components/HeroSection.tsx) |
| About text, custom skills list | [AboutSection.tsx](file:///d:/portfolio/harsh-portfolio/src/components/AboutSection.tsx) |
| Services descriptions | [ServicesSection.tsx](file:///d:/portfolio/harsh-portfolio/src/components/ServicesSection.tsx) |
| Project info, images, and links | [ProjectsSection.tsx](file:///d:/portfolio/harsh-portfolio/src/components/ProjectsSection.tsx) |
| Contact links, social channels | [ContactSection.tsx](file:///d:/portfolio/harsh-portfolio/src/components/ContactSection.tsx) |
| Page title, favicon, SEO meta tags | [index.html](file:///d:/portfolio/harsh-portfolio/index.html) |

## Contact

Designed & built by **Harsh Vardhan Singh**
* **LinkedIn**: [in/harsh-vardhan-singh-3180222b1](https://www.linkedin.com/in/harsh-vardhan-singh-3180222b1)
* **GitHub**: [github.com/harsh0904-dot](https://github.com/harsh0904-dot)
* **Email**: [singhharshvardhan178@gmail.com](mailto:singhharshvardhan178@gmail.com)
* **WhatsApp**: [+91 63984 45808](https://wa.me/916398445808)
