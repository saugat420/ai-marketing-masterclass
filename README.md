# AI Marketing Landing Page

This is the working chat/project folder for the Sikumna AI Marketing Masterclass landing page.

## Run The Site

```powershell
npm run dev
```

Then open `http://localhost:3000`.

## Build Check

```powershell
npm run build
```

Use this before publishing or after larger edits.

## Where To Edit

- Homepage order: `app/page.tsx`
- Main hero text, date, seat count, and button: `app/components/HeroSection.tsx`
- "What You'll Learn" cards: `app/components/LearnSection.tsx`
- Audience cards: `app/components/AudienceSection.tsx`
- AI explanation section: `app/components/WhyAttendSection.tsx`
- Mentor bio and image: `app/components/MentorSection.tsx`
- Registration form wrapper and Flodesk embed: `app/components/RegistrationForm.tsx`
- Thank-you page and Vimeo video: `app/thanks/page.tsx`
- Global styling and Flodesk form styling: `app/globals.css`
- Logos and photos: `public/`

## Current Notes

- The repo is a Next.js app using the App Router, React, Tailwind CSS, and TypeScript.
- The live registration form posts to Flodesk form ID `6a0056f54d292a1f518a517b`.
- After a successful Flodesk signup, visitors are redirected to `/thanks`.
- Git history shows recent landing-page polish commits on `main`.

