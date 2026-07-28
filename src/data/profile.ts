export const profile = {
  name: "Ashish Bhatt",
  firstName: "Ashish",
  title: "Full Stack Web Developer",
  tagline: "I build backend-heavy full-stack products that scale — from high-volume CRM pipelines to secure identity systems and AI-powered reporting.",
  summary:
    "Full Stack Web Developer with 3+ years of experience designing scalable RESTful APIs and microservices in Node.js and Python. I've scaled a CRM backend to 500,000+ leads processed daily across 5+ marketing integrations, built JWT/OAuth2-based authentication and an SSO identity provider securing 20,000+ active users, and shipped Generative AI (RAG) features for automated report generation — turning messy backend problems into clean, documented, containerized services.",
  location: "Jaipur, Rajasthan, India",
  yearsExperience: "3+ Years Experience",
  email: "ashishbhatt9303@gmail.com",
  phone: "+91-9785058004",
  linkedin: "https://www.linkedin.com/in/ashish-bhatt-061442106",
  github: "https://github.com/Ashish9303",
  resumeFile: "/Ashish_Bhatt_Resume.pdf",
};

export const highlights = [
  {
    title: "RESTful APIs & Microservices",
    description:
      "Designed and shipped scalable, modular services using FastAPI, Express.js and NestJS.",
  },
  {
    title: "CRM Platforms at Scale",
    description:
      "Scaled a CRM backend to 500,000+ leads/day across 5+ ad-platform integrations, with automated lead assignment for 100,000+ leads/day.",
  },
  {
    title: "Auth & Identity Security",
    description:
      "Built JWT access/refresh token auth with TOTP/HOTP MFA and an SSO (OAuth2) identity provider for multi-session logins, securing 20,000+ active users.",
  },
  {
    title: "Generative AI & RAG",
    description:
      "Implemented Retrieval-Augmented Generation to automate context-aware report creation and cut manual sales-team effort.",
  },
  {
    title: "Containerized Deployments",
    description:
      "Shipped services with Docker, and FastAPI Uvicorn/Gunicorn deployment strategies.",
  },
  {
    title: "Async & Background Jobs",
    description:
      "Used Redis and Celery for task queues, caching, and asynchronous background processing.",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology, Computer Science & Engineering",
    school: "Pratap University, Jaipur",
    period: "2013 — 2017",
  },
  {
    degree: "Senior Secondary",
    school: "Rahul Sr. Sec. School, Jaipur",
    period: "2013",
  },
];

export const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "Bootstrap 5"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "Python", "FastAPI"],
  },
  {
    category: "Database & Docs",
    items: ["MongoDB", "Pydantic", "Swagger / OpenAPI", "Redis"],
  },
  {
    category: "Tools & Workflow",
    items: ["Docker", "Celery", "Git & GitHub", "Git Flow", "REST APIs"],
  },
  {
    category: "Auth, Security & AI",
    items: ["JWT", "OAuth2 / SSO", "TOTP / HOTP MFA", "Generative AI", "RAG"],
  },
];

export const experience = [
  {
    period: "Nov 2023 — Present",
    role: "Full Stack Web Developer",
    company: "Pangrow Tech Pvt. Ltd. · Jaipur, India",
    current: true,
    bullets: [
      "Designed and developed RESTful APIs and microservices using FastAPI, Express.js and NestJS, keeping the architecture clean and modular.",
      "Built and scaled a CRM backend for sales and marketing to handle 500,000+ leads daily, integrating seamlessly with 5+ external marketing platforms (Google Ads, Facebook Ads, LinkedIn Ads).",
      "Implemented lead-assignment algorithms that automated distribution of 100,000+ leads per day, cutting manual lead distribution by 40%.",
      "Built a JWT-based access/refresh token authentication system with TOTP/HOTP multi-factor authentication, capturing and logging login-device details to improve protection for 20,000+ active users.",
      "Designed and built an SSO (OAuth2) identity provider enabling secure, concurrent multi-session logins across multiple client apps, with token revocation.",
      "Implemented Generative AI with Retrieval-Augmented Generation (RAG) to automate report generation, reducing manual effort and improving sales-team productivity through AI-driven, context-aware reporting.",
      "Integrated MongoDB with FastAPI using Pydantic models for efficient, validated data handling.",
      "Deployed containerized microservices with Docker and FastAPI Uvicorn/Gunicorn strategies.",
      "Used Redis and Celery for task queues, caching, and asynchronous background jobs.",
      "Built backend services in both Python (FastAPI) and Node.js (Express/NestJS), with TypeScript for type safety.",
      "Integrated Swagger/OpenAPI documentation across services, improving API testing and developer onboarding.",
      "Managed source control and code reviews via Git and GitHub, following Git Flow branching.",
    ],
    tags: ["FastAPI", "Express.js", "NestJS", "MongoDB", "Docker", "Redis", "OAuth2/SSO", "RAG"],
  },
  {
    period: "Feb 2023 — Jul 2023",
    role: "Fullstack Web Developer Intern",
    company: "Grras Solutions Pvt. Ltd. · Jaipur, Rajasthan",
    current: false,
    bullets: [
      "Worked across the stack building frontend and backend features.",
      "Built UI with React.js, HTML5, CSS3 and Bootstrap.",
      "Built REST APIs with Node.js and Express.js backed by MongoDB.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    period: "Feb 2018 — Dec 2022",
    role: "Off-Page SEO Executive",
    company: "Gempulse Infotech Pvt. Ltd. · Jaipur, Rajasthan",
    current: false,
    bullets: [
      "Ran online and social media data research and outreach, and managed Google My Business and FB/GMB ad posting and analytics prior to transitioning into full-stack development.",
    ],
    tags: ["SEO", "Analytics"],
  },
];

export const projects = [
  {
    title: "CRM Application",
    description:
      "A full-featured CRM built at Pangrow Tech, scaled to 500,000+ leads/day with automated lead assignment and real-time updates for sales workflows.",
    points: [
      "Scaled to 500,000+ leads processed daily",
      "Integrated with 5+ ad platforms (Google, Facebook, LinkedIn Ads)",
      "Automated lead assignment for 100,000+ leads/day (40% less manual work)",
    ],
    tags: ["NestJS", "Express.js", "MongoDB", "TypeScript"],
  },
  {
    title: "Auth & SSO Identity Platform",
    description:
      "A JWT-based authentication system with multi-factor auth and an OAuth2 SSO identity provider shared across client apps.",
    points: [
      "JWT access/refresh tokens + TOTP/HOTP MFA",
      "OAuth2 SSO with concurrent multi-session logins",
      "Token revocation and login-device logging for 20,000+ users",
    ],
    tags: ["OAuth2", "JWT", "Node.js", "Security"],
  },
  {
    title: "Keystone — AI Report Generation",
    description:
      "A Generative AI reporting tool using Retrieval-Augmented Generation (RAG) to automate context-aware report creation for the sales team.",
    points: [
      "RAG pipeline for context-aware generation",
      "Automated report drafting from underlying data",
      "Reduced manual effort and improved sales-team productivity",
    ],
    tags: ["Generative AI", "RAG", "Python", "FastAPI"],
  },
  {
    title: "RESTful Microservices Platform",
    description:
      "Modular, scalable backend services split across Python and Node.js runtimes, sharing a documented API contract.",
    points: [
      "FastAPI + Pydantic data models",
      "Express.js & NestJS services",
      "Swagger/OpenAPI documentation for all endpoints",
    ],
    tags: ["FastAPI", "NestJS", "Swagger", "Pydantic"],
  },
  {
    title: "Containerized Task Processing",
    description:
      "Background job infrastructure for asynchronous work and caching, deployed as containerized services.",
    points: [
      "Redis for caching & queues",
      "Celery for async background jobs",
      "Docker + Uvicorn/Gunicorn deployment",
    ],
    tags: ["Docker", "Redis", "Celery", "FastAPI"],
  },
  {
    title: "Horizon — Market Intelligence Platform",
    description:
      "A data-driven market intelligence platform delivering interactive dashboards, reports, and forecasts across industries for strategic business decisions.",
    points: [
      "Interactive dashboards across industries",
      "Automated reporting and forecasting",
      "Backend services powering data-driven insights",
    ],
    tags: ["FastAPI", "MongoDB", "React.js", "Data"],
  },
  {
    title: "Hospital Database Intelligence Platform",
    description:
      "A U.S. healthcare facility database and analytics tool giving researchers, investors, and healthcare professionals detailed intelligence on hospital networks nationwide.",
    points: [
      "Structured facility & network data pipeline",
      "Analytics tooling for researchers and investors",
      "Backend APIs for nationwide hospital-network intelligence",
    ],
    tags: ["Node.js", "MongoDB", "REST APIs", "Analytics"],
  },
];
