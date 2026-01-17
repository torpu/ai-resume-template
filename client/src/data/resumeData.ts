export interface ResumeData {
  personal: {
    name: string;
    title: string;
    bio: string;
    status: string;
    initials: string;
  };
  experience: Array<{
    company: string;
    title: string;
    startYear: number;
    endYear: number | "Present";
    achievements: string[];
    aiContext: string;
  }>;
  skills: {
    strong: string[];
    moderate: string[];
    gaps: string[];
  };
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    twitter?: string;
  };
}

export const resumeData: ResumeData = {
  personal: {
    name: "Marcus Chen",
    title: "Staff Engineer",
    bio: "Platform infrastructure, developer tools, and technical strategy",
    status: "Open to Staff+ roles at Series B-D companies",
    initials: "MC",
  },
  experience: [
    {
      company: "Datadog",
      title: "Staff Engineer, Platform Infrastructure",
      startYear: 2021,
      endYear: "Present",
      achievements: [
        "Designed observability platform serving 15K+ customers, handling 10TB/day",
        "Led 12-person team through SOC2 compliance certification",
        "Reduced infrastructure costs by $1.2M/year through optimization",
      ],
      aiContext:
        "At Datadog, I led the platform infrastructure team to build and scale our observability platform. I was responsible for designing the architecture that handles massive data ingestion (10TB/day) while maintaining sub-second query latency. I drove the SOC2 compliance initiative, which involved implementing security controls across our entire infrastructure. My cost optimization efforts focused on identifying inefficiencies in our cloud spending and implementing automated scaling policies that reduced our annual bill by $1.2M.",
    },
    {
      company: "Stripe",
      title: "Senior Engineer → Staff Engineer",
      startYear: 2018,
      endYear: 2021,
      achievements: [
        "Built integration ecosystem serving 500+ partners, 2M+ API calls/day",
        "Designed versioning strategy maintaining backward compatibility across 3 major releases",
        "Hired and mentored 6 engineers on the platform team",
      ],
      aiContext:
        "During my time at Stripe, I transitioned from Senior Engineer to Staff Engineer while leading the platform team. I architected the integration ecosystem that allowed 500+ partners to build on top of Stripe's API. The versioning strategy I designed ensured that we could iterate quickly while maintaining backward compatibility—a critical requirement for a payments platform. I was also deeply involved in hiring and mentoring, building a team of 6 engineers who became the foundation of the platform organization.",
    },
    {
      company: "Series B Startup (acquired)",
      title: "Founding Engineer",
      startYear: 2016,
      endYear: 2018,
      achievements: [
        "First engineering hire; built v1 of the product in 4 months",
        "Navigated two pivots during that period",
        "Defined technical strategy and hired first 6 engineers",
      ],
      aiContext:
        "As the first engineering hire at a Series B startup, I had the opportunity to shape the technical direction from day one. I built the initial product MVP in just 4 months, which was critical for raising the next round of funding. The company went through two significant pivots based on market feedback, and I was instrumental in adapting our technical architecture to support each new direction. I also defined the hiring strategy and culture for the engineering team, recruiting and mentoring the first 6 engineers who joined after me.",
    },
  ],
  skills: {
    strong: [
      "Platform/Infrastructure Architecture",
      "API Design & Versioning",
      "Technical Strategy",
      "Cross-functional Leadership",
      "Technical Debt Cleanup",
      "Developer Experience",
    ],
    moderate: [
      "Data Engineering",
      "Security & Compliance",
      "Team Building",
    ],
    gaps: [
      "Consumer Product",
      "Mobile Development",
      "Growth/Experimentation",
    ],
  },
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "marcus@example.com",
    twitter: "https://twitter.com",
  },
};
