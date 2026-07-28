import { Icons } from "@/components/icons";
import {
  AccessibilityIcon,
  GaugeIcon,
  HomeIcon,
  LayersIcon,
  LayoutIcon,
  LifeBuoyIcon,
  NotebookIcon,
  PlugZapIcon,
  ServerIcon,
  SmartphoneIcon,
} from "lucide-react";

export const DATA = {
  name: "Chisom Udonsi",
  initials: "CU",
  url: "https://chisomudonsi.dev",
  location: "Port Harcourt, Nigeria",
  locationLink:
    "https://www.google.com/maps/place/4%C2%B051'14.8%22N+6%C2%B056'39.4%22E/@4.8541113,6.9417071,17z/data=!3m1!4b1!4m7!1m2!10m1!1e2!3m3!8m2!3d4.854106!4d6.944282?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D",
  description:
    "I build new products from the ground up and join others mid-flight to make them work — Fullstack Engineer open to contract & part-time roles.",
  availability: {
    open: true,
    message: "Open to contract & part-time work",
  },
  summary:
    "I'm a fullstack engineer who thrives whether I'm building a product from scratch or joining one mid-flight to make it better — like getting promoted to core engineer at Seamailer, or driving measurable performance and UX wins on contract work like YPMC. I build across web and mobile, with a strong foundation in TypeScript, Vue, React, and Node.js. Since 2021, I've gone from teaching to full-time engineering — and I'm currently open to contract and part-time work.",
  avatarUrl: "/me.webp",
  techStack: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Vue",
    "Tanstack Start",
    "Next.js",
    "Nuxt.js",
    "React Native",
    "Expo",
    "TailwindCSS",
    "SCSS",
    "jQuery",
    "Node.js",
    "Express",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "SQL",
    "Figma",
    "Git",
    "GitHub",
  ],
  interests: ["Flutter", "Rust", "Solidity", "Python"],
  skills: [
    {
      label: "Frontend Development",
      icon: <LayoutIcon className="size-4" />,
    },
    {
      label: "Backend Development",
      icon: <ServerIcon className="size-4" />,
    },
    {
      label: "Fullstack Development",
      icon: <LayersIcon className="size-4" />,
    },
    {
      label: "Mobile App Development",
      icon: <SmartphoneIcon className="size-4" />,
    },
    {
      label: "Performance Optimization",
      icon: <GaugeIcon className="size-4" />,
    },
    {
      label: "Accessibility (a11y)",
      icon: <AccessibilityIcon className="size-4" />,
    },
    {
      label: "API Design & Integration",
      icon: <PlugZapIcon className="size-4" />,
    },
  ],
  services: [
    {
      title: "Frontend Development",
      description:
        "Responsive, high-performance UIs built with React, Vue, Next.js, or Nuxt.js.",
      icon: <LayoutIcon className="size-5" />,
      tags: [
        "React",
        "Vue",
        "Next.js",
        "Nuxt.js",
        "Tanstack Start",
        "TypeScript",
      ],
    },
    {
      title: "Backend Development",
      description:
        "Scalable APIs and backend architecture with Node.js, Express, and NestJS.",
      icon: <ServerIcon className="size-5" />,
      tags: ["Node.js", "Express", "NestJS", "PostgreSQL", "SQL"],
    },
    {
      title: "Fullstack Product Development",
      description: "End-to-end web apps, from architecture to deployment.",
      icon: <LayersIcon className="size-5" />,
      tags: ["Next.js", "Node.js", "MongoDB", "PostgreSQL", "SQL"],
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform apps with React Native and Expo.",
      icon: <SmartphoneIcon className="size-5" />,
      tags: ["React Native", "Expo"],
    },
    {
      title: "Performance & Accessibility Audits",
      description: "Lighthouse-driven fixes for speed, SEO, and accessibility.",
      icon: <GaugeIcon className="size-5" />,
      tags: ["Performance", "Accessibility", "SEO"],
    },
    {
      title: "Product Rescue",
      description:
        "Joining an existing codebase mid-flight to fix what's broken and ship what's next.",
      icon: <LifeBuoyIcon className="size-5" />,
      tags: ["Debugging", "Refactoring", "Code Review"],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/api/resume", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "udonsichisom02@gmail.com",
    tel: "+2347063265056",
    bookingUrl: "https://calendar.app.google/1G2ixVQ58TRiXCG48",
    whatsappUrl: "https://api.whatsapp.com/send?phone=2347063265056",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/TheAce74",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chisom-udonsi",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/TheAce74",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@codewithchisom",
        icon: Icons.youtube,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:udonsichisom02@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Seamailer",
      href: "https://seamailer.app",
      badges: ["Full-time"],
      location: "Remote, Lagos",
      title: "Fullstack Engineer",
      logoUrl: "/seamailer.png",
      start: "September 2024",
      end: "Present",
      description:
        "Started as a frontend engineer and was promoted to fullstack for the impact of my work — now a core engineer on the product. Build and maintain high-performance UIs with Vue.js, implement backend API logic for complex business requirements, and take part in code reviews across features, enhancements, and fixes. Currently helping ship and support the platform for 1,000+ active users.",
    },
    {
      company: "Assist Factory",
      href: "https://assistfactory.com",
      badges: ["Part-time"],
      location: "Remote, United States",
      title: "Frontend Engineer",
      logoUrl: "/assistfactory.jpg",
      start: "November 2024",
      end: "Present",
      description:
        "Brought on as the core frontend engineer to help build this platform connecting businesses with skilled virtual assistants from the ground up. Designed and shipped the request system powering task management, built real-time messaging for seamless client-assistant communication, and owned the UI end-to-end for a polished, professional experience.",
    },
    {
      company: "SBSC",
      href: "https://www.sbsc.com",
      badges: ["Contract"],
      location: "Hybrid, Lagos",
      title: "Senior Frontend Engineer",
      logoUrl: "/sbsc.png",
      start: "February 2026",
      end: "Present",
      description:
        "Senior frontend engineer delivering software solutions across SBSC's client portfolio on a contract basis — specific projects and clients are confidential under NDA.",
    },
    {
      company: "Umuigbo Diaspora",
      href: "https://umuigbodiaspora.com",
      badges: ["Contract"],
      location: "Remote, Germany",
      title: "Fullstack Engineer",
      logoUrl: "/umuigbodiaspora.png",
      start: "June 2026",
      end: "July 2026",
      description:
        "Brought on as the sole engineer to architect and build Umuigbo Diaspora from scratch on a contract engagement — a platform connecting the Igbo diaspora with home through a suite of tools and services for Igbos living abroad. Owned everything end-to-end: architecture, frontend, backend, and deployment.",
    },
    {
      company: "Bridge Credit Limited",
      href: "https://app.bridgecredit.ng",
      badges: ["Contract"],
      location: "Remote, Lagos",
      title: "Fullstack Engineer",
      logoUrl: "/bcl.png",
      start: "March 2026",
      end: "July 2026",
      description:
        "Joined as a fullstack engineer on a contract to help build Bridge Credit's loan platform from the ground up — owned the web experience end-to-end, from onboarding to loan applications, and picked up Flutter to contribute to the native mobile app alongside the team.",
    },
    {
      company: "YPMC",
      badges: ["Contract"],
      href: "https://www.ypmcommunity.com",
      location: "Hybrid, Lagos",
      title: "Fullstack Engineer",
      logoUrl: "/ypmc.png",
      start: "May 2025",
      end: "July 2025",
      description:
        "Joined this logistics platform on a 3-month contract to resolve data-consistency issues and improve UX. Introduced code splitting, image lazy-loading, and state-level performance optimizations, and raised accessibility standards across the app — taking Lighthouse scores from 30% to 62% (performance), 45% to 77% (accessibility), 72% to 96% (best practices), and 90% to 100% (SEO). Also built responsive interfaces from Figma designs using React, Next.js, and TailwindCSS, and integrated real-time tracking via WebSockets — the platform picked up 10+ new paying users during my time there.",
    },
    {
      company: "Alajo",
      href: "https://alajo.app",
      badges: ["Contract"],
      location: "Hybrid, Lagos",
      title: "Frontend Engineer",
      logoUrl: "/alajo.png",
      start: "April 2025",
      end: "November 2025",
      description:
        "Joined the frontend engineering team and started by rebuilding the landing pages, then moved into building new features for the platform's customer-facing tools. Worked on a platform that digitizes savings for low-income earners, helping millions achieve financial inclusion without needing smartphones or internet access, using Vue.js, TailwindCSS, and related tooling, integrated with backend APIs in close collaboration with product and engineering teams.",
    },
  ],
  education: [
    {
      school: "Federal University of Technology Owerri",
      href: "https://futo.edu.ng",
      degree: "Bachelor of Technology in Computer Science",
      badges: ["First Class Honours"],
      logoUrl: "/futo.png",
      start: "2019",
      end: "2025",
    },
  ],
  featuredProjects: [
    "seamailer",
    "assist-factory",
    "bcl",
    "ypmc",
    "umuigbo-diaspora",
    "alajo",
  ],
  projects: [
    {
      slug: "seamailer",
      title: "Seamailer",
      href: "https://seamailer.app",
      dates: "Sept 2024 - Present",
      role: "Fullstack Engineer (Core)",
      active: true,
      problem:
        "Seamailer needed to keep shipping fast across a growing email marketing platform — campaign automation, analytics, and a template editor — without slowing down as the team and user base scaled.",
      solution:
        "Seamailer is an email marketing platform that helps businesses send personalized campaigns, automate customer journeys, and track performance — built for startups that need conversion-focused email marketing without the complexity.",
      myRole:
        "Started as a frontend engineer and was promoted to fullstack for the impact of my work — now a core engineer on the product, serving 1,000+ active users. Ship features across the stack, from campaign scheduling and automation to a drag-and-drop template editor, and take part in code reviews for every feature, enhancement, and fix that ships.",
      description:
        "Promoted from frontend to fullstack engineer for my impact — now a core engineer on this email marketing platform, serving 1,000+ active users. Ship features across the stack, from campaign scheduling and automation to a drag-and-drop template editor, and take part in code reviews for every feature, enhancement, and fix that ships.",
      impact: [
        { label: "Active users served", value: "1,000+" },
        { label: "Role growth", value: "Promoted frontend → fullstack" },
        {
          label: "Ownership",
          value: "Reviews every feature, enhancement & fix",
        },
      ],
      features: [
        "Drag-and-drop campaign editor — no coding required",
        "Audience segmentation by behavior, preferences & demographics",
        "Marketing automation for lead-nurturing journeys",
        "Campaign reporting with side-by-side performance comparison",
        "99% email deliverability",
        "RESTful API & SDKs for integrations",
      ],
      technologies: [
        "Vue",
        "Nuxt",
        "Typescript",
        "TailwindCSS",
        "Preline UI",
        "Pinia",
        "Vue Router",
        "Vue Flow",
        "Vitest",
        "Cypress",
        "Vuelidate",
        "NestJS",
        "Sequelize",
        "SQL",
        "Redis",
        "BullMQ",
        "Paystack",
        "AWS SES",
        "Postal",
      ],
      links: [
        {
          type: "Website",
          href: "https://seamailer.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/seamailer.webp",
      video: "",
    },
    {
      slug: "assist-factory",
      title: "Assist Factory",
      href: "https://assistfactory.com",
      dates: "Nov 2024 - Present",
      role: "Frontend Engineer (Core)",
      active: true,
      problem:
        "Assist Factory needed a production-ready platform, built from scratch, to connect businesses with vetted virtual assistants — including a task-management workflow and real-time communication that didn't exist yet.",
      solution:
        "Assist Factory is a platform connecting businesses with vetted virtual assistants, offering a streamlined request system for task management and real-time messaging for client-assistant communication.",
      myRole:
        "Brought on as the core frontend engineer to help build this platform from scratch. Designed and shipped the request system powering task management, built real-time messaging for seamless client-assistant communication, and owned the UI end-to-end for a polished, professional experience.",
      description:
        "Engineered a platform connecting businesses with skilled virtual assistants. Implemented a streamlined request system for task management, integrated real-time messaging for efficient communication, and optimized the user interface for a smooth and professional experience.",
      impact: [
        { label: "Role", value: "Core frontend engineer, ground-up build" },
        {
          label: "Shipped",
          value: "Task-request system + real-time messaging",
        },
      ],
      features: [
        "Streamlined request system for task management",
        "Real-time messaging between businesses and virtual assistants",
        "Google Calendar event scheduling for clients and VAs",
        "VA ranking system based on actual work completed, surfacing top performers",
        "Professional, polished UI built end-to-end",
      ],
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Zustand",
        "Tanstack Query",
        "Storybook",
        "Zod",
        "React Hook Form",
        "Jest",
        "React Testing Library",
      ],
      links: [
        {
          type: "Website",
          href: "https://assistfactory.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assistfactory.webp",
      video: "",
    },
    {
      slug: "bcl",
      title: "Bridge Credit Limited",
      href: "https://app.bridgecredit.ng",
      dates: "Mar 2026 - Jul 2026",
      role: "Fullstack Engineer",
      active: true,
      problem:
        "Bridge Credit needed a customer-facing loan platform — web and native mobile — built from the ground up to take their lending product to real customers.",
      solution:
        "Bridge Credit is a lending platform that gives everyday Nigerians fast access to credit — from application to disbursement — across web and native mobile.",
      myRole:
        "Joined as a fullstack engineer on a contract to help build the platform from the ground up — owned the web experience end-to-end, from onboarding to loan applications, and picked up Flutter to contribute to the native mobile app alongside the team.",
      description:
        "Joined as a fullstack engineer on a contract to help build Bridge Credit's loan platform from the ground up — owned the web experience end-to-end, from onboarding to loan applications, and picked up Flutter to contribute to the native mobile app alongside the team.",
      impact: [
        { label: "Scope", value: "Web + native mobile (Flutter) shipped" },
        { label: "Ownership", value: "Owned the web experience end-to-end" },
      ],
      features: [
        "Customer onboarding flow",
        "Loan application and management workflow",
        "Bank account verification via Mono",
        "Automated transactional emails via Seamailer",
        "Native mobile app (Flutter) alongside the web platform",
        "Monorepo architecture (PNPM Workspaces) powering both customer and admin web tools",
      ],
      technologies: [
        "Vue",
        "TailwindCSS",
        "NestJS",
        "PostgreSQL",
        "TypeORM",
        "PNPM Workspaces",
        "Mono",
        "Seamailer",
        "Typescript",
        "AWS S3",
        "Flutter",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.bridgecredit.ng",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bcl.webp",
      video: "",
    },
    {
      slug: "ypmc",
      title: "YPMC",
      href: "https://www.ypmcommunity.com",
      dates: "May 2025 - Jul 2025",
      role: "Fullstack Engineer (Frontend-heavy)",
      active: true,
      problem:
        "YPMC's logistics platform was live but struggling — data inconsistencies, broken loading states, and weak performance and accessibility scores were hurting the user experience.",
      solution:
        "YPMC is a logistics platform connecting users with dependable riders for quick, efficient deliveries.",
      myRole:
        "Joined this platform on a 3-month contract to fix data inconsistencies and UX performance issues. Introduced code splitting, lazy-loaded images, and state optimizations, pushing Lighthouse scores from 30% to 62% (performance), 45% to 77% (accessibility), 72% to 96% (best practices), and 90% to 100% (SEO) — while the platform gained 10+ new paying users.",
      description:
        "Joined this logistics platform on a 3-month contract to fix data inconsistencies and UX performance issues. Introduced code splitting, lazy-loaded images, and state optimizations, pushing Lighthouse scores from 30% to 62% (performance), 45% to 77% (accessibility), 72% to 96% (best practices), and 90% to 100% (SEO) — while the platform gained 10+ new paying users.",
      impact: [
        { label: "Performance (Lighthouse)", value: "30% → 62%" },
        { label: "Accessibility (Lighthouse)", value: "45% → 77%" },
        { label: "Best Practices (Lighthouse)", value: "72% → 96%" },
        { label: "SEO (Lighthouse)", value: "90% → 100%" },
        { label: "New paying users", value: "10+ in 3 months" },
      ],
      features: [
        "Secure shipping via a network of verified delivery partners",
        "Real-time shipment tracking",
        "Live chat with riders",
        "Rider ratings & profiles for quality assurance",
        "Integrated marketplace — browse, buy, and get it delivered",
        "iOS & Android apps for shipment creation and tracking",
      ],
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Axios",
        "Tanstack Query",
        "Web sockets",
        "React Hook Form",
        "Zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.ypmcommunity.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ypmc.webp",
      video: "",
    },
    {
      slug: "umuigbo-diaspora",
      title: "Umuigbo Diaspora",
      href: "https://umuigbodiaspora.com",
      dates: "Jun 2026 - Jul 2026",
      role: "Fullstack Engineer (Sole Engineer)",
      active: true,
      problem:
        "The Igbo diaspora had no single platform to stay connected with home — Umuigbo Diaspora needed to be architected and built from zero, solo, on a tight contract timeline.",
      solution:
        "Umuigbo Diaspora is a platform connecting the Igbo diaspora with home through a suite of tools and services for Igbos living abroad.",
      myRole:
        "Brought on as the sole engineer to architect and build the platform from scratch on a contract engagement. Owned everything end-to-end: architecture, frontend, backend, and deployment.",
      description:
        "Brought on as the sole engineer to architect and build Umuigbo Diaspora from scratch on a contract engagement — a platform connecting the Igbo diaspora with home through a suite of tools and services for Igbos living abroad. Owned everything end-to-end: architecture, frontend, backend, and deployment.",
      impact: [
        { label: "Role", value: "Sole engineer — architected & built solo" },
        {
          label: "Scope",
          value: "Architecture, frontend, backend & deployment",
        },
      ],
      features: [
        "State unions & city community directory",
        "Public events feed & RSVPs",
        "Kids playdates coordination",
        "Request-a-buddy on arrival (mentorship matching)",
        "Cheap flight finder",
        "Group travel — join or create trips",
        "Accommodation & room-share board",
        "Luggage / kg sharing board",
        "Group subscription pools",
        "Cultural dance group registration",
        "Event coordination dashboard",
        "Payment processing via Stripe",
        "Automated email notifications (Brevo)",
      ],
      technologies: [
        "Tanstack Start",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "Typescript",
        "Brevo",
        "Tanstack Query",
        "Stripe",
        "TailwindCSS",
        "Digital Ocean Storage Spaces",
      ],
      links: [
        {
          type: "Website",
          href: "https://umuigbodiaspora.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/umuigbodiaspora.webp",
      video: "",
    },
    {
      slug: "alajo",
      title: "Alajo",
      href: "https://alajo.app",
      dates: "Apr 2025 - Nov 2025",
      role: "Frontend Engineer",
      active: true,
      problem:
        "Alajo's savings platform needed a stronger first impression and expanded customer-facing tools to support its mission of financial inclusion for low-income earners without smartphones or internet access.",
      solution:
        "Alajo is a savings platform that digitizes traditional 'ajo' savings for low-income earners, helping millions achieve financial inclusion without needing smartphones or internet access.",
      myRole:
        "Joined the frontend engineering team and started by rebuilding the landing pages, then moved into building new features for the platform's customer-facing tools, integrated with backend APIs in close collaboration with product and engineering teams.",
      description:
        "Rebuilt the landing pages before moving into building new customer-facing tools for this savings platform helping millions of low-income earners achieve financial inclusion without needing smartphones or internet access.",
      impact: [
        {
          label: "Shipped",
          value: "Rebuilt landing pages + new customer tools",
        },
        { label: "Platform reach", value: "Millions of low-income earners" },
      ],
      features: [
        "Role-based dashboards — Customer, Field Agent, Marketer, Entrepreneur, and Admin",
        "Finance and banking tools",
        "Third-party partner products — loans, airtime, data, and insurance",
        "Rebuilt landing pages",
        "New customer-facing savings tools",
      ],
      technologies: [
        "Nuxt.js",
        "Vue.js",
        "Typescript",
        "TailwindCSS",
        "Pinia",
        "Vue Router",
        "Zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://alajo.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/alajo.webp",
      video: "",
    },
    {
      slug: "swirvl",
      title: "Swirvl",
      href: "https://swirvl.com",
      dates: "Feb 2025 - Apr 2025",
      role: "Frontend Engineer",
      active: true,
      problem:
        "Buyers needed a structured way to solicit competitive bids from brokers instead of ad hoc negotiations, with secure payments and a way to track deals in one place.",
      solution:
        "Swirvl is a marketplace where buyers create product contests (auctions) and brokers submit competitive bids, with instant messaging, escrow payments, and a dashboard to track deals.",
      myRole:
        "Built this marketplace end-to-end, integrating instant messaging for seamless negotiation, escrow payments for secure transactions, and a dynamic dashboard for tracking bids, deals, and transaction history.",
      description:
        "Built a marketplace where buyers create product contests (auctions) and brokers submit competitive bids. Integrated instant messaging for seamless negotiation, escrow payments for secure transactions, and a dynamic dashboard for users to track bids, manage deals, and monitor transaction history.",
      impact: [],
      features: [
        "Product contest (auction) creation for buyers",
        "Competitive bidding system for brokers",
        "Instant messaging for negotiation",
        "Escrow payments for secure transactions",
        "Dashboard for tracking bids and deals",
      ],
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Zustand",
        "Tanstack Query",
        "Zod",
        "React Hook Form",
      ],
      links: [
        {
          type: "Website",
          href: "https://swirvl.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/swirvl.webp",
      video: "",
    },
    {
      slug: "fitxn",
      title: "Fitxn",
      href: "https://www.fitxn.co",
      dates: "Aug 2024 - Nov 2024",
      role: "Frontend Engineer",
      active: true,
      problem:
        "Gym and spa businesses needed one system to manage memberships, bookings, and payments instead of juggling disconnected tools.",
      solution:
        "Fitxn is a gym and spa management system that streamlines membership handling, booking, and payments through an intuitive dashboard.",
      myRole:
        "Collaborated to develop the system end-to-end, designing the dashboard for tracking subscriptions, managing client interactions, and automating service scheduling for a seamless fitness experience.",
      description:
        "Collaborated to develop a gym and spa management system streamlining membership handling, booking, and payments. Designed an intuitive dashboard for tracking subscriptions, managing client interactions, and automating service scheduling for a seamless fitness experience.",
      impact: [],
      features: [
        "Membership handling and booking system",
        "Subscription tracking dashboard",
        "Automated service scheduling",
        "Payment integration (Monnify SDK)",
      ],
      technologies: [
        "Next.js",
        "Nuxt.js",
        "Typescript",
        "TailwindCSS",
        "Mantine",
        "Zustand",
        "Tanstack Query",
        "React Hook Form",
        "Zod",
        "Monnify SDK",
        "GSAP",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.fitxn.co",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fitxn.webp",
      video: "",
    },
  ],
} as const;

export interface TestimonialLink {
  platform: string;
  handle: string;
  url: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role?: string;
  body: string;
  links?: TestimonialLink[];
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Olalekan Oladosu",
    role: "Senior Software Engineer",
    body: "I've mentored a lot of engineers over the years, and Chisom is one of the few I keep bringing back onto new projects; we've built and shipped together across Seamailer, Bridge Credit, and Alajo. He doesn't just write code that works, he writes code that holds up in production: fast, reliable, and genuinely well-thought-out. He takes ownership like it's his own product, and that's rare. Any team or client would be lucky to have him.",
    links: [
      {
        platform: "LinkedIn",
        handle: "@lekan-oladosu",
        url: "https://www.linkedin.com/in/lekan-oladosu",
        icon: <Icons.linkedin className="size-4" />,
      },
      {
        platform: "GitHub",
        handle: "@culjo",
        url: "https://github.com/culjo",
        icon: <Icons.github className="size-4" />,
      },
    ],
  },
  {
    name: "Victor Okoye",
    role: "Senior Backend Engineer",
    body: "Working with Chisom at YPMC was a great experience. He owned the frontend development for both the user-facing and logistics partner web applications, and delivered consistently throughout the project. Beyond shipping features, he also put in the work to improve performance and reduce page load times, which had a direct impact on the product experience. He's technically solid, easy to collaborate with, and the kind of engineer who takes ownership of his work. I'd work with him again without hesitation.",
    links: [
      {
        platform: "LinkedIn",
        handle: "@okoye-chukwuebuka",
        url: "https://linkedin.com/in/okoye-chukwuebuka",
        icon: <Icons.linkedin className="size-4" />,
      },
      {
        platform: "GitHub",
        handle: "@ChuloWay",
        url: "https://github.com/ChuloWay",
        icon: <Icons.github className="size-4" />,
      },
    ],
  },
  {
    name: "Kenechukwu Anolue",
    body: "When we brought Chisom onto Assist Factory, he delivered the frontend UI well ahead of the timeline we'd projected, which almost never happens. The quality held up too, not just the speed. I was so happy with the outcome that I've since recommended him for two other projects. He's become someone I trust to just hand a problem to and know it'll get done right.",
    links: [
      {
        platform: "X",
        handle: "@Kene_Nna",
        url: "https://x.com/Kene_Nna",
        icon: <Icons.x className="size-4" />,
      },
    ],
  },
  {
    name: "Chibundu Ogbonnia",
    body: "After Assist Factory, I kept bringing Chisom onto new projects - three more since then, and Umuigbo Diaspora is the one I'm proudest of us shipping together. He also built my own personal portfolio, and that's not something I can hand off lightly. What I've come to rely on most is his resilience; when a project gets hard, he doesn't fold or cut corners, he just keeps working the problem until it's actually solved. He delivers work I don't have to double-check.",
    links: [
      {
        platform: "LinkedIn",
        handle: "@chibunduogbonnia",
        url: "https://www.linkedin.com/in/chibunduogbonnia",
        icon: <Icons.linkedin className="size-4" />,
      },
    ],
  },
  {
    name: "Uchenna Onyenso",
    role: "Senior Backend Engineer",
    body: "Assist Factory was the first project Chisom and I worked on together, but you'd never have guessed it, we synced like we'd shipped ten products before it. He took real ownership of the frontend, not just tickets, and it showed: what started as a contract engagement turned into a part-time role because management could see the work ethic and how well we operated as a unit. As the backend engineer on that build, I can say without hesitation, he's technically sharp, moves fast, and makes whoever he's working with better. I'd bring him onto any project, no second thoughts.",
    links: [
      {
        platform: "LinkedIn",
        handle: "@uche-onyenso",
        url: "https://www.linkedin.com/in/uche-onyenso",
        icon: <Icons.linkedin className="size-4" />,
      },
      {
        platform: "GitHub",
        handle: "@Onyenso",
        url: "https://github.com/Onyenso",
        icon: <Icons.github className="size-4" />,
      },
    ],
  },
  {
    name: "Opeyemi Olayinka",
    role: "Product Manager",
    body: "Chisom was my favorite kind of engineer to work with on Alajo, the kind who doesn't add to my stress pile. He was always attentive, always ahead of problems instead of behind them, and some of our best product improvements came out of side conversations he started, not tickets I assigned. Whether it was catching an error before it became a bug report or pushing for a better UX flow, he just handled it. As a PM, that's priceless. I'd work with him again in a heartbeat, it takes real weight off my shoulders knowing he's on the team.",
    links: [
      {
        platform: "LinkedIn",
        handle: "@opeyemi-olayinka-912636189",
        url: "https://www.linkedin.com/in/opeyemi-olayinka-912636189",
        icon: <Icons.linkedin className="size-4" />,
      },
    ],
  },
  {
    name: "Wisdom Chima",
    body: "I needed a portfolio as a designer with which I could begin my cold outreach to prospective clients. I reached out to Chisom to help me out with the development, and at every step of the development phase, he inquired for feedback showing how detailed and committed he was to the project. He eventually ended up over delivering on the design I sent to him with amazing insights & suggestions, and the site was very optimized and clean. 100% recommend him.",
    links: [
      {
        platform: "Instagram",
        handle: "@kreatorgraphics",
        url: "http://instagram.com/kreatorgraphics",
        icon: <Icons.instagram className="size-4" />,
      },
    ],
  },
  {
    name: "Victor Iloenyenwa",
    role: "Fullstack Engineer",
    body: "Chisom is a brilliant developer in every definition of the word, he is well versed in the technologies he utilizes and can analyze tricky problems and implement amazing solutions. He's a lifelong learner obsessed with perfecting his craft. He's definitely the guy for the job. Whatever it is, he can crack it",
    links: [
      {
        platform: "LinkedIn",
        handle: "@iloenyenwa-victor",
        url: "https://www.linkedin.com/in/iloenyenwa-victor",
        icon: <Icons.linkedin className="size-4" />,
      },
      {
        platform: "GitHub",
        handle: "@ProCode47",
        url: "https://github.com/ProCode47",
        icon: <Icons.github className="size-4" />,
      },
    ],
  },
  {
    name: "Christopher Asor",
    body: "Chisom is a very unique and talented developer. He combines effective and efficient implementation of functionalities with great attention to detail. He's a great team player and always tries to keep up good communication with his client, thanks to his great communication skills. He has shown a great sense of responsibility in the few projects he's worked on with me and I'll recommend him to every hiring manager because he'll be an excellent addition and improvement to any team!",
    links: [
      {
        platform: "LinkedIn",
        handle: "@christopher-asor",
        url: "https://www.linkedin.com/in/christopher-asor",
        icon: <Icons.linkedin className="size-4" />,
      },
      {
        platform: "Instagram",
        handle: "@asor_chris",
        url: "https://www.instagram.com/asor_chris",
        icon: <Icons.instagram className="size-4" />,
      },
    ],
  },
  {
    name: "Jeffrey Adjari",
    role: "Fullstack Engineer",
    body: "I have worked with Chisom Udonsi for years and he has always been a professional. He can work under pressure and easily adapt to change, embraces diversity and is open to growth opportunities. He's a great problem-solver with great leadership skills. He can easily work with anyone because of his interpersonal talent. I hope he grows and continues to thrive in his endeavours.",
    links: [
      {
        platform: "LinkedIn",
        handle: "@jeffrey-adjari",
        url: "https://www.linkedin.com/in/jeffrey-adjari",
        icon: <Icons.linkedin className="size-4" />,
      },
      {
        platform: "GitHub",
        handle: "@Walter-Tronics",
        url: "https://github.com/Walter-Tronics",
        icon: <Icons.github className="size-4" />,
      },
    ],
  },
  {
    name: "Henry Kanu",
    role: "Frontend Engineer",
    body: "Chisom, also known as the \"Senku Ishigami of the Dev World\", is a tech enthusiast and highly skilled developer. His relentless pursuit of knowledge and unwavering determination have made a profound impact on my programming journey. Chisom's mastery of frontend development is awe-inspiring, as he effortlessly translates complex concepts into elegant code. With his guidance and expertise, I have experienced tremendous growth and gained invaluable insights. Chisom's exceptional mentorship inspires positive change, making him a source of inspiration in my life.",
    links: [
      {
        platform: "LinkedIn",
        handle: "@henry-0x",
        url: "https://www.linkedin.com/in/henry-0x",
        icon: <Icons.linkedin className="size-4" />,
      },
      {
        platform: "GitHub",
        handle: "@Stan545",
        url: "https://github.com/Stan545",
        icon: <Icons.github className="size-4" />,
      },
    ],
  },
  {
    name: "Tochukwu Nwankwo",
    role: "Software Engineer",
    body: "Chisom is a very remarkable programmer and mentor. His quick problem-solving skills and structured lifestyle make him one of the best programmers in the tech niche of our school. His efficient teaching skills and flawless communication enabled me to grasp whatever he taught me or any other person in just minutes. Of course, all these qualities of his are just to name a few; working and interacting with him will reveal just how good he is at what he does.",
    links: [
      {
        platform: "GitHub",
        handle: "@Emmanuetoks",
        url: "https://github.com/Emmanuetoks",
        icon: <Icons.github className="size-4" />,
      },
    ],
  },
];
