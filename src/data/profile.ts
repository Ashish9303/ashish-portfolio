export const profile = {
  name: "Ashish Bhatt",
  firstName: "Ashish",
  title: "Full Stack Web Developer",
  tagline: "I build backend-heavy full-stack products that scale — from high-volume CRM pipelines to secure authentication systems and integrated payment platforms.",
  summary:
    "Full Stack Web Developer with 3+ years of experience designing scalable RESTful APIs and microservices in Node.js and Python. I've scaled a CRM backend to 500,000+ leads processed daily across 5+ marketing integrations, built JWT-based authentication with TOTP/HOTP multi-factor security for 20,000+ active users, and built a unified PayPal payment service for subscriptions, refunds and webhooks — turning messy backend problems into clean, documented, containerized services.",
  location: "Jaipur, Rajasthan, India",
  yearsExperience: "3+ Years Experience",
  email: "ashishbhatt9303@gmail.com",
  phone: "+91-9785058004",
  linkedin: "https://www.linkedin.com/in/ashish-bhatt-061442106",
  github: "https://github.com/Ashish9303",
  resumeFile: "/Ashish_Bhatt_Resume_Modern.pdf",
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
      "Built JWT access/refresh token auth with TOTP/HOTP multi-factor authentication, securing 20,000+ active users.",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Built a unified PayPal payment service handling subscriptions, one-time payments, refunds, voids and webhooks.",
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
    category: "Auth & Security",
    items: ["JWT", "TOTP / HOTP MFA"],
  },
  {
    category: "Payments",
    items: ["PayPal API", "Webhooks", "Subscriptions & Refunds"],
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
      "Built a unified PayPal payment service handling subscriptions, one-time payments, refunds, voids and webhooks.",
      "Integrated MongoDB with FastAPI using Pydantic models for efficient, validated data handling.",
      "Deployed containerized microservices with Docker and FastAPI Uvicorn/Gunicorn strategies.",
      "Used Redis and Celery for task queues, caching, and asynchronous background jobs.",
      "Built backend services in both Python (FastAPI) and Node.js (Express/NestJS), with TypeScript for type safety.",
      "Integrated Swagger/OpenAPI documentation across services, improving API testing and developer onboarding.",
      "Managed source control and code reviews via Git and GitHub, following Git Flow branching.",
    ],
    tags: ["FastAPI", "Express.js", "NestJS", "MongoDB", "Docker", "Redis", "JWT/MFA", "PayPal"],
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
    title: "JWT Authentication & MFA System",
    description:
      "A JWT-based authentication system with TOTP/HOTP multi-factor auth, protecting 20,000+ active users with login-device logging.",
    points: [
      "JWT access/refresh tokens",
      "TOTP/HOTP multi-factor authentication",
      "Login-device logging for 20,000+ users",
    ],
    tags: ["JWT", "Node.js", "Security"],
  },
  {
    title: "Payment Service",
    description:
      "A unified PayPal payment service for subscriptions, one-time payments, refunds, voids and webhooks.",
    points: [
      "PayPal integration for subscriptions & one-time payments",
      "Automated refunds and voids",
      "Webhook handling for real-time payment events",
    ],
    tags: ["PayPal", "Node.js", "Webhooks"],
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
      "A data-driven market intelligence platform delivering interactive dashboards, reports, and forecasts across industries for strategic business decisions, with pages built using Next.js.",
    points: [
      "Interactive dashboards across industries",
      "Pages built with Next.js for fast, SEO-friendly delivery",
      "Automated reporting and forecasting",
    ],
    tags: ["Next.js", "FastAPI", "MongoDB", "Data"],
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
