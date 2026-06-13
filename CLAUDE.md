# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive resume/portfolio website for Rob Weatherly, Sr Azure Cloud Architect. Built with React, TypeScript, Vite, and Tailwind CSS. Features AI-powered Q&A (demo mode) and job fit assessment.

**Repository:** https://github.com/rweatherly/seevee-site.git
**Live Site:** https://rweatherly.github.io/seevee-site/

## Development Commands

```bash
npm run dev      # Start dev server (http://localhost:5173/seevee-site/)
npm run build    # Production build
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```

## Architecture

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (button, card, dialog, etc.)
│   ├── Header.tsx       # Navigation with mobile menu
│   ├── Hero.tsx         # Profile overview, highlights, target roles
│   ├── Experience.tsx   # Work history with recommendations
│   ├── ExperienceCard.tsx
│   ├── Skills.tsx       # Categorized skills (strong/moderate/learning)
│   ├── FitAssessment.tsx # Interactive job fit analyzer (demo)
│   ├── AIChat.tsx       # Chat dialog with demo responses
│   ├── Footer.tsx
│   └── NavLink.tsx
├── data/
│   └── profile.ts       # Centralized profile data (edit to update content)
├── pages/
│   ├── Index.tsx        # Main page
│   └── NotFound.tsx     # 404 page
├── lib/
│   └── utils.ts         # Utility functions (cn for classnames)
└── main.tsx, App.tsx, index.css
```

## Key Technologies

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + shadcn/ui components
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (gh-pages)

## Editing Profile Content

All profile data is centralized in `src/data/profile.ts`:
- Basic info, title, location
- Skills (categorized by proficiency level)
- Work experience with AI context
- Recommendations
- Demo AI chat responses
- Key highlights

## Future Enhancements

### High Priority
- [ ] Integrate real AI backend (Azure OpenAI) - AIChat.tsx has `getResponse()` function ready to swap
- [ ] Add more certifications to profile.ts (currently only AZ-900 listed)
- [ ] Expand demo AI responses in profile.ts `demoResponses` array

### Medium Priority
- [ ] Add contact form functionality
- [ ] Extract chat state management into custom hook (if feature grows)
- [ ] Add profile photo to Hero section (ensure alt text for accessibility)

### Low Priority (Code Quality)
- [ ] Extract `getResponse()` to a service layer for production
- [ ] Add error logging in AIChat.tsx catch block
- [ ] Use UUID library for message IDs instead of Date.now()
- [ ] Extract magic numbers (e.g., 1500ms delay) to named constants

## Session Log

### 2026-01-21: Initial Build
- Created complete React + TypeScript + Vite project from scratch
- Implemented all core components: Hero, Experience, Skills, FitAssessment, AIChat
- Profile data extracted from LinkedIn PDF
- Accessibility fixes applied (aria-labels, keyboard navigation)
- Deployed to GitHub Pages: https://rweatherly.github.io/seevee-site/
- Quality review completed - codebase is production-ready
