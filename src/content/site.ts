/**
 * ─────────────────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE
 *  This is the single source of truth for all content on the site.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const site = {
  // ── Basic identity ──────────────────────────────────────────────────────
  name: "Numan Iftikhar",
  title: "Numan Iftikhar — Senior Full-Stack Engineer",
  tagline:
    "Senior full-stack engineer building FinTech products end to end — Node.js / Nest.js, Vue / Nuxt & React.",
  intro:
    "I ship features from end to end — from Vue/Nuxt and React interfaces to Node.js/Nest.js services and the databases behind them. My focus is FinTech and digital identity: KYC/KYB/AML, fraud detection, crowdfunding, supply chain financing, and eSignature, including production systems handling 10M+ verifications.",
  location: "Lahore, Pakistan · Open to Remote (UTC+5)",
  availability: "Open to remote opportunities",

  // ── Links ─────────────────────────────────────────────────────────────────
  // Set any to "" to hide it.
  email: "numaniftikhar300@gmail.com",
  phone: "+92 300 2513167", // set to "" to hide
  social: {
    github: "https://github.com/numan-iftikhar",
    // TODO: confirm this is your exact LinkedIn URL
    linkedin: "https://www.linkedin.com/in/numan-iftikhar",
    twitter: "",
    website: "",
  },

  // Path (in /public) to a downloadable resume. Set to "" to hide the button.
  resumeUrl: "/resume.pdf",

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    paragraphs: [
      "I'm a senior full-stack engineer with deep FinTech and digital-identity experience. Over the past few years I've built production platforms across KYC/KYB/AML, fraud detection, crowdfunding, supply chain financing, and eSignature — owning the full lifecycle from UI and API design to data modeling, performance, and deployment.",
      "I've shipped systems handling 10M+ verifications, acted as interim Tech Lead for a 10-engineer team, and built multiple platforms from scratch. I'm equally comfortable in component architecture on the frontend and distributed-systems concepts on the backend — microservices, message queues, event-driven design, and caching.",
    ],
    stats: [
      { label: "Verifications handled", value: "10M+" },
      { label: "Verification modules shipped", value: "20+" },
      { label: "Faster document processing", value: "~70%" },
      { label: "Engineers led (interim)", value: "10" },
    ],
  },

  // ── Skills ──────────────────────────────────────────────────────────────────
  skills: [
    {
      category: "Frontend",
      items: [
        "Vue.js",
        "Nuxt.js",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Component Architecture",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Nest.js",
        "Express",
        "REST APIs",
        "Microservices",
        "Event-Driven Architecture",
        "Kafka / RabbitMQ / SQS",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "AWS", "CI/CD", "Linux", "Git"],
    },
    {
      category: "Practices & Security",
      items: [
        "Playwright",
        "Postman",
        "Agile / Scrum",
        "End-to-End Encryption",
        "Compliance-Driven Design",
        "Slack / Jira APIs",
      ],
    },
    {
      category: "Domain & Emerging",
      items: [
        "FinTech (KYC/KYB/AML)",
        "Crowdfunding & SCF",
        "eSignature",
        "Identity Verification",
        "Applied AI / LLMs",
        "Prompt Engineering",
      ],
    },
  ],

  // ── Projects ───────────────────────────────────────────────────────────────
  projects: [
    {
      title: "Sales CRM Platform",
      description:
        "Designed and built a Sales CRM from scratch and lead its development end to end — Vue/Nuxt frontend, Nest.js APIs, and data modeling — replacing manual sales tracking with a single source of truth for the sales team.",
      tags: ["Nuxt.js", "Nest.js", "PostgreSQL", "TypeScript"],
      links: { live: "", github: "" },
      featured: true,
    },
    {
      title: "Crowdfunding Platform",
      description:
        "Developed full-stack features across a production crowdfunding platform spanning borrower, investor, and admin areas — building UI alongside lending workflows, transaction logic, and role-based access.",
      tags: ["Vue.js", "Node.js", "FinTech", "RBAC"],
      links: { live: "", github: "" },
      featured: true,
    },
    {
      title: "Supply Chain Financing (SCF)",
      description:
        "Built supply chain financing capabilities for enterprise programs involving Aramco and J.P. Morgan, delivering financing workflows to demanding compliance and reliability standards.",
      tags: ["Nest.js", "Microservices", "Enterprise", "Compliance"],
      links: { live: "", github: "" },
      featured: true,
    },
    {
      title: "Shufti Pro — KYC/KYB/AML Platform",
      description:
        "Built 20+ verification modules end to end for a platform handling 10M+ verifications. Acted as interim Tech Lead for a 10-member team, boosted app performance ~30%, and added Playwright automated testing to cut regressions.",
      tags: ["Vue.js", "Node.js", "Playwright", "E2E Encryption"],
      links: { live: "https://shuftipro.com", github: "" },
      featured: true,
    },
    {
      title: "eSignature Platform",
      description:
        "Designed and deployed a digital signing platform that cut manual document processing time by ~70%, building both the signing UI and backend integrations on a compliance-first architecture.",
      tags: ["Vue.js", "Node.js", "eSignature", "Security"],
      links: { live: "", github: "" },
      featured: false,
    },
    {
      title: "Facia.ai — AI Fraud Prevention",
      description:
        "Developed a fraud-prevention platform with facial recognition and liveness detection using Google MediaPipe. Built Node.js/MongoDB services and Vue frontends, deployed for enterprise and government clients.",
      tags: ["Vue.js", "Node.js", "MongoDB", "MediaPipe"],
      links: { live: "https://facia.ai", github: "" },
      featured: false,
    },
    {
      title: "Employee Directory System",
      description:
        "Built a complete employee directory from scratch (Nuxt frontend, Nest.js + MySQL backend) integrated with Slack and Jira APIs for real-time search, workload visibility, and reporting-hierarchy tracking, with automated daily sync jobs.",
      tags: ["Nuxt.js", "Nest.js", "MySQL", "Slack / Jira API"],
      links: { live: "", github: "" },
      featured: false,
    },
  ],

  // ── Experience ───────────────────────────────────────────────────────────────
  experience: [
    {
      role: "Senior Software Engineer (Full-Stack)",
      company: "Manafa Technologies",
      period: "Aug 2025 — Present",
      location: "Lahore, Pakistan · On-site",
      points: [
        "Designed and built a Sales CRM from scratch and lead its development end to end (Vue/Nuxt frontend, Nest.js APIs, data modeling), giving the sales team a single source of truth.",
        "Developed full-stack features across a production crowdfunding platform — borrower, investor, and admin areas — including lending workflows, transaction logic, and role-based access.",
        "Built supply chain financing (SCF) capabilities for enterprise programs involving Aramco and J.P. Morgan to demanding compliance and reliability standards.",
        "Built an Employee Directory System (Nuxt + Nest.js + MySQL) integrated with Slack and Jira APIs, with automated daily sync jobs improving cross-squad collaboration.",
      ],
    },
    {
      role: "Software Engineer (Full-Stack)",
      company: "Programmers Force — Shufti Pro & Facia.ai",
      period: "Nov 2022 — Jul 2025",
      location: "Lahore, Pakistan",
      points: [
        "Built 20+ KYC/KYB/AML verification modules end to end (Vue frontend, Node.js services) for a platform handling 10M+ verifications; acted as interim Tech Lead for a 10-member team.",
        "Boosted application performance by ~30% via frontend render optimization and backend query/caching improvements; introduced Playwright automated testing.",
        "Implemented end-to-end encryption for sensitive payloads and built a compliance-first eSignature platform that cut manual document processing time by ~70%.",
        "Developed Facia.ai fraud-prevention with facial recognition and liveness detection (Google MediaPipe), deployed for enterprise and government clients.",
      ],
    },
  ],

  // ── Education & Certifications ─────────────────────────────────────────────
  education: [
    {
      degree: "BS Computer Science",
      school: "Virtual University of Pakistan, Lahore",
      period: "2022",
    },
  ],
  certifications: [
    "Working with the OpenAI API — DataCamp (2026)",
    "Introduction to LLMs — Sololearn (2025)",
    "43+ certifications total — full list on LinkedIn",
  ],
} as const;

export type Site = typeof site;
