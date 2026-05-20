# AI Resume Analyzer

AI-powered ATS Resume Analyzer platform that analyzes resumes, calculates ATS scores, compares resumes with job descriptions, and provides AI-based suggestions using Next.js, TypeScript, Tailwind CSS, and Gemini AI API.

---

## Features

- ATS resume score analysis
- Resume vs Job Description matching
- AI-based resume suggestions
- Missing keyword detection
- Recruiter-style dashboard UI
- Dark / Light mode
- Authentication pages
- Responsive SaaS design
- Reusable UI components
- Upload and analysis workflow
- Modern animations with Framer Motion

---

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Hook Form
- Zod Validation
- Lucide React Icons
- Gemini AI API

---

## Project Structure

```bash
src/
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── auth/
│   ├── dashboard/
│   ├── forms/
│   ├── layout/
│   ├── providers/
│   ├── sections/
│   └── ui/
│
└── lib/
    ├── constants/
    ├── validations/
    └── utils.ts