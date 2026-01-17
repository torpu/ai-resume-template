# AI Resume Template — Quick Start Guide

Get your AI-powered resume website up and running in 5 minutes!

---

## Step 1: Install Dependencies (1 minute)

```bash
npm install
```

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Step 3: Customize Your Resume (3 minutes)

Edit `client/src/data/resumeData.ts` and update:

```typescript
export const resumeData: ResumeData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio",
    status: "Your current status",
    initials: "YN",
  },
  experience: [
    {
      company: "Company Name",
      title: "Job Title",
      startYear: 2020,
      endYear: "Present",
      achievements: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3",
      ],
      aiContext: "Detailed background...",
    },
  ],
  skills: {
    strong: ["Skill 1", "Skill 2", "Skill 3"],
    moderate: ["Skill 4", "Skill 5"],
    gaps: ["Skill 6", "Skill 7"],
  },
  social: {
    github: "https://github.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
    email: "your.email@example.com",
  },
};
```

## Step 4: Build for Production (1 minute)

```bash
npm run build
```

## Step 5: Deploy

Choose your hosting platform:

- **Manus:** Create a checkpoint and click "Publish"
- **Vercel:** Connect your GitHub repo and deploy
- **Netlify:** Connect your GitHub repo and deploy
- **GitHub Pages:** Push `dist/` to `gh-pages` branch

---

## Customization Tips

### Change Colors

Edit `client/src/index.css` and update color variables:

```css
:root {
  --accent: oklch(0.2 0.1 200);  /* Change primary color */
}
```

### Change Fonts

Edit `client/index.html` Google Fonts import and update `client/src/index.css`.

### Add Images

Place images in `client/public/images/` and reference them with absolute paths.

---

## Features

✓ Dark theme with teal accent  
✓ Responsive design (mobile, tablet, desktop)  
✓ AI chat interface  
✓ Experience cards with detailed context  
✓ Skills assessment (Strong, Moderate, Gaps)  
✓ Job fit assessment tool  
✓ Social media links  
✓ Smooth animations  

---

## Next Steps

1. Read `DESIGN_DOCUMENTATION.md` for design details
2. Read `IMPLEMENTATION_GUIDE.md` for advanced customization
3. Deploy to your chosen platform
4. Share your resume with recruiters!

---

## Need Help?

- Check `IMPLEMENTATION_GUIDE.md` for detailed instructions
- Review component code in `client/src/components/`
- Check browser console for error messages

Enjoy your new AI-powered resume website! 🚀

