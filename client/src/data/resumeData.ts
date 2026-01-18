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
    name: "iTorpu",
    title: "Innovation & Cloud Architect",
    bio: "Innovation architecture and multi-cloud strategy across Azure, GCP, and AWS",
    status: "10+ years in cloud architecture and digital transformation",
    initials: "iT",
  },
  experience: [
    {
      company: "Itorpu",
      title: "Principal Innovation & Cloud Architect",
      startYear: 2019,
      endYear: "Present",
      achievements: [
        "Designed multi-cloud reference architectures across Azure, GCP, and AWS for scale, security, and resilience",
        "Led modernization and migration programs to cloud-native platforms, improving reliability and time-to-market",
        "Established architecture governance, landing zones, and IaC standards adopted across teams",
      ],
      aiContext:
        "As Principal Innovation & Cloud Architect, I design multi-cloud strategies that balance governance with speed. I lead modernization programs that move legacy systems to cloud-native platforms while improving reliability and delivery cadence. I also establish landing zones, security baselines, and infrastructure-as-code standards to ensure repeatable, compliant deployments across Azure, GCP, and AWS.",
    },
    {
      company: "Enterprise Clients",
      title: "Cloud Solutions Architect",
      startYear: 2015,
      endYear: 2019,
      achievements: [
        "Delivered hybrid-cloud strategies and migration roadmaps for regulated industries",
        "Built DevOps pipelines to automate infrastructure and application delivery",
        "Optimized cloud cost and performance through right-sizing and observability",
      ],
      aiContext:
        "As a Cloud Solutions Architect, I partnered with enterprise stakeholders to shape hybrid-cloud strategies and execute migration roadmaps. I implemented DevOps automation for repeatable deployments and introduced observability practices that improved reliability. I focused on cost and performance optimization through workload right-sizing, capacity planning, and monitoring.",
    },
    {
      company: "Global Systems Integrator",
      title: "Senior Systems Engineer → Cloud Engineer",
      startYear: 2012,
      endYear: 2015,
      achievements: [
        "Designed resilient infrastructure for enterprise applications and data platforms",
        "Implemented security baselines, identity, and network segmentation across environments",
        "Supported early cloud adoption on Azure and AWS, enabling scalable deployments",
      ],
      aiContext:
        "I started as a Senior Systems Engineer and transitioned into Cloud Engineering as clients began adopting public cloud. I designed resilient infrastructure, implemented security baselines and identity controls, and helped teams move workloads to Azure and AWS. These early cloud initiatives laid the foundation for scalable, secure deployments.",
    },
  ],
  skills: {
    strong: [
      "Innovation Architecture",
      "Multi-Cloud Architecture (Azure, GCP, AWS)",
      "Enterprise Architecture",
      "Cloud Migration & Modernization",
      "Infrastructure as Code",
      "Security & Compliance",
      "DevOps & CI/CD",
      "Cost Optimization",
    ],
    moderate: [
      "Kubernetes & Containers",
      "SRE & Observability",
      "Data Platforms",
    ],
    gaps: [
      "Consumer Mobile Apps",
      "Growth Marketing",
      "Game Development",
    ],
  },
  social: {
    // Add your real links when ready (GitHub, LinkedIn, email, Twitter).
  },
};
