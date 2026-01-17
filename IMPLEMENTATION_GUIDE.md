# AI Resume Template — Implementation & Customization Guide

**Version:** 1.0.0  
**Author:** Manus AI  
**Last Updated:** January 2026

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Customization Guide](#customization-guide)
4. [Running Locally](#running-locally)
5. [Building for Production](#building-for-production)
6. [Deployment Options](#deployment-options)
7. [Connecting to Real AI APIs](#connecting-to-real-ai-apis)
8. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
- **npm** or **pnpm** (package manager)
- **Git** (for version control)
- A text editor or IDE (VS Code recommended)

### Installation

To get started with the AI Resume Template, follow these steps:

**Step 1: Clone or Download the Project**

If you have the project files, navigate to the project directory:

```bash
cd ai-resume-template
```

**Step 2: Install Dependencies**

Install all required dependencies using npm or pnpm:

```bash
npm install
# or
pnpm install
```

**Step 3: Start the Development Server**

Run the development server to preview your resume website:

```bash
npm run dev
# or
pnpm dev
```

The development server will start on `http://localhost:3000`. Open this URL in your browser to see your resume website.

---

## Project Structure

Understanding the project structure is essential for customization. Here's an overview of the key directories and files:

```
ai-resume-template/
├── client/
│   ├── public/
│   │   └── images/              # Static images (add your images here)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.tsx    # Top navigation bar
│   │   │   ├── HeroSection.tsx   # Hero section with name and CTA
│   │   │   ├── ExperienceCard.tsx # Individual experience card
│   │   │   ├── ExperienceSection.tsx # Experience section container
│   │   │   ├── SkillsGrid.tsx    # Skills assessment display
│   │   │   ├── FitCheckTool.tsx  # Job fit assessment tool
│   │   │   ├── AIContextModal.tsx # Modal for detailed role info
│   │   │   ├── ChatInterface.tsx # AI chat interface
│   │   │   └── Footer.tsx        # Footer with social links
│   │   ├── pages/
│   │   │   └── Home.tsx          # Main page component
│   │   ├── data/
│   │   │   └── resumeData.ts     # All resume content (EDIT THIS!)
│   │   ├── App.tsx               # Root component
│   │   ├── main.tsx              # React entry point
│   │   └── index.css             # Global styles and theme
│   └── index.html                # HTML template
├── package.json                  # Dependencies and scripts
├── DESIGN_DOCUMENTATION.md       # Design system documentation
├── IMPLEMENTATION_GUIDE.md       # This file
└── README.md                     # Project overview
```

### Key Files to Customize

The primary file you'll modify is `client/src/data/resumeData.ts`. This file contains all the content for your resume website, including your name, experience, skills, and social links. By updating this single file, you can completely customize the website for your own use case.

---

## Customization Guide

### 1. Update Your Personal Information

Open `client/src/data/resumeData.ts` and modify the `personal` object:

```typescript
personal: {
  name: "Your Name",                    // Your full name
  title: "Your Job Title",              // Your professional title
  bio: "Your professional bio",         // Brief description of your expertise
  status: "Your current status",        // e.g., "Open to roles at Series B-D companies"
  initials: "YN",                       // Your initials (used in navigation)
}
```

### 2. Add Your Experience

Update the `experience` array with your work history. Each experience entry should include:

```typescript
{
  company: "Company Name",
  title: "Job Title",
  startYear: 2020,
  endYear: "Present",                  // Use "Present" for current role
  achievements: [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3",
  ],
  aiContext: "Detailed background about this role...",  // Shown in modal
}
```

**Tips for Writing Achievements:**

- Start with action verbs (Designed, Led, Built, Implemented, etc.)
- Include quantifiable metrics when possible (e.g., "Reduced costs by 40%")
- Focus on impact rather than tasks
- Keep each achievement to 1-2 lines

**Tips for AI Context:**

- Write 2-3 paragraphs explaining the role in detail
- Include challenges you faced and how you overcame them
- Highlight your specific contributions and impact
- This content is shown when recruiters click "View AI Context"

### 3. Update Your Skills

Modify the `skills` object to reflect your expertise:

```typescript
skills: {
  strong: [
    "Skill 1",
    "Skill 2",
    "Skill 3",
  ],
  moderate: [
    "Skill 4",
    "Skill 5",
  ],
  gaps: [
    "Skill 6",
    "Skill 7",
  ],
}
```

**Categorization Guide:**

- **Strong:** Skills you have deep expertise in and can lead projects with
- **Moderate:** Skills you have solid experience with but may not lead on
- **Gaps:** Skills you don't have or have minimal experience with (honesty is key!)

### 4. Add Your Social Links

Update the `social` object with your profiles:

```typescript
social: {
  github: "https://github.com/yourprofile",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "your.email@example.com",
  twitter: "https://twitter.com/yourprofile",
}
```

Leave any field empty (e.g., `twitter: undefined`) if you don't want to display that link.

### 5. Customize Colors

To change the color scheme, edit `client/src/index.css`. Look for the `:root` section and modify these variables:

```css
:root {
  --background: oklch(0.08 0 0);        /* Main background color */
  --foreground: oklch(0.95 0 0);        /* Text color */
  --accent: oklch(0.2 0.1 200);         /* Primary accent (buttons, highlights) */
  /* ... other color variables ... */
}
```

**Color Format:**

The template uses OKLCH color format. To convert from hex to OKLCH:

- Use an online converter like [oklch.com](https://oklch.com)
- Or use a CSS tool in your browser's developer console

**Common Color Changes:**

- **Change accent color:** Modify the `--accent` variable
- **Change background:** Modify the `--background` variable
- **Change text color:** Modify the `--foreground` variable

### 6. Customize Typography

To change fonts, edit `client/index.html` and update the Google Fonts import:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap" rel="stylesheet" />
```

Then update `client/src/index.css` to use your new font:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

---

## Running Locally

### Development Mode

To run the project in development mode with hot reloading:

```bash
npm run dev
```

The development server will start on `http://localhost:3000`. Any changes you make to the code will automatically reload in the browser.

### Type Checking

To check for TypeScript errors without building:

```bash
npm run check
```

### Formatting Code

To format your code according to the project's style guide:

```bash
npm run format
```

---

## Building for Production

### Create a Production Build

To build the project for production:

```bash
npm run build
```

This command will:

1. Compile TypeScript to JavaScript
2. Bundle all code and assets
3. Minify and optimize for production
4. Output files to the `dist/` directory

The build process typically takes 1-2 minutes.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

This will start a local server serving the production build, allowing you to verify that everything works correctly before deployment.

---

## Deployment Options

### Option 1: Deploy to Manus (Recommended)

The Manus platform provides built-in hosting with automatic SSL, custom domains, and analytics.

**Steps:**

1. Create a checkpoint of your project in the Manus UI
2. Click the "Publish" button in the Management UI
3. Your site will be deployed to a Manus domain (e.g., `yourname.manus.space`)
4. Optionally, bind a custom domain in the Domains settings

### Option 2: Deploy to Vercel

Vercel offers free hosting for static sites with excellent performance.

**Steps:**

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and select your repository
4. Vercel will automatically detect the build settings
5. Click "Deploy"

Your site will be live at a Vercel domain (e.g., `yourname.vercel.app`).

### Option 3: Deploy to Netlify

Netlify is another popular option for static site hosting.

**Steps:**

1. Push your project to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "New site from Git" and select your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy"

Your site will be live at a Netlify domain (e.g., `yourname.netlify.app`).

### Option 4: Deploy to GitHub Pages

GitHub Pages offers free hosting directly from your GitHub repository.

**Steps:**

1. Update `package.json` to add your repository name as the base URL
2. Run `npm run build`
3. Push the `dist/` folder to the `gh-pages` branch
4. Enable GitHub Pages in your repository settings

Your site will be live at `https://yourusername.github.io/ai-resume-template`.

---

## Connecting to Real AI APIs

The template includes placeholder AI features. To connect to real AI APIs, follow these steps:

### 1. Connect the Chat Interface to OpenAI

Edit `client/src/components/ChatInterface.tsx`:

```typescript
const handleSendMessage = async () => {
  // ... existing code ...

  // Replace the mock response with a real API call:
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: input, context: candidateName }),
  });

  const data = await response.json();
  // ... handle response ...
};
```

### 2. Connect the Fit Check Tool to an AI API

Edit `client/src/components/FitCheckTool.tsx`:

```typescript
const handleAnalyze = async () => {
  // Replace the mock analysis with a real API call:
  const response = await fetch('/api/fit-check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jobDescription }),
  });

  const data = await response.json();
  setAnalysis(data.analysis);
};
```

### 3. Set Up Backend API Routes

To use real AI APIs, you'll need a backend server. Consider upgrading to a full-stack project using the Manus platform's `web-db-user` feature, which includes backend server capabilities.

---

## Troubleshooting

### Issue: Development server won't start

**Solution:**

1. Ensure Node.js is installed: `node --version`
2. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
3. Clear npm cache: `npm cache clean --force`
4. Try again: `npm run dev`

### Issue: TypeScript errors

**Solution:**

1. Run type checking: `npm run check`
2. Fix errors as indicated
3. Restart the development server

### Issue: Styles not applying correctly

**Solution:**

1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
3. Ensure Tailwind CSS is properly configured in `tailwind.config.js`

### Issue: Images not displaying

**Solution:**

1. Ensure images are in `client/public/images/`
2. Reference images with absolute paths: `/images/filename.jpg`
3. Check that file names are correct and match the references

### Issue: Social links not working

**Solution:**

1. Verify URLs in `resumeData.ts` are correct and complete (include `https://`)
2. Test URLs in a browser to ensure they're valid
3. Ensure links are properly formatted (no extra spaces or characters)

---

## Best Practices

### Content Best Practices

- **Be Honest:** The "Gaps" section should reflect real skill gaps. This honesty is what makes the resume stand out.
- **Quantify Impact:** Use numbers and metrics to demonstrate impact (e.g., "Reduced latency by 60%").
- **Tell Stories:** Use the AI Context to tell the story behind each role, not just list achievements.
- **Keep It Current:** Update your experience and skills regularly as you grow.

### Technical Best Practices

- **Version Control:** Use Git to track changes to your resume website.
- **Test Locally:** Always test changes locally before deploying.
- **Mobile Testing:** Test your resume on mobile devices to ensure responsive design.
- **Performance:** Use the browser's DevTools to check performance and optimize as needed.

### SEO Best Practices

- **Update Meta Tags:** Edit `client/index.html` to add meta descriptions and keywords.
- **Add Structured Data:** Consider adding JSON-LD schema for better search engine understanding.
- **Submit to Search Engines:** Submit your site to Google Search Console and Bing Webmaster Tools.

---

## Next Steps

After customizing your resume website, consider:

1. **Deploy to Production:** Choose a hosting platform and deploy your site.
2. **Connect Real AI APIs:** Upgrade to a full-stack project and integrate real AI services.
3. **Add Analytics:** Track recruiter interactions and engagement.
4. **Customize Design:** Modify colors, fonts, and layout to match your personal brand.
5. **Share Your Resume:** Send the link to recruiters and hiring managers.

---

## Support

For questions or issues, refer to the Design Documentation included in the project. The template is designed to be self-contained and requires no external dependencies beyond those listed in `package.json`.

If you encounter issues not covered in this guide, check the browser console for error messages and review the component code to understand how features work.

---

## License

This template is provided as-is for personal and professional use. Modify and distribute as needed for your own use cases.

