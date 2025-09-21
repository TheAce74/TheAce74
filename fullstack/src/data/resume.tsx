import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Chisom Udonsi",
  initials: "CU",
  url: "https://chisomudonsi.dev",
  location: "Imo, Nigeria",
  locationLink:
    "https://www.google.com/maps/@5.3879737,7.0008617,16z?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Fullstack Software Engineer passionate about building scalable solutions and solving complex problems.",
  summary:
    "Since 2021, I've slowly transitioned from working as a teacher to a full-time software engineer focusing on building and scaling multiple projects. Over the years, I've honed my skills in backend and frontend development, working with technologies like TypeScript, Node.js, Vue, and React. I've collaborated on various projects, contributed to open-source, and built tools that solve real-world problems. Now, I'm fully dedicated to creating impactful software solutions while continuously learning and sharing insights with the developer community.",
  avatarUrl: "/me.webp",
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Vue",
    "Next.js",
    "Nuxt.js",
    "React Native",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "GitHub",
    "jQuery",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "udonsichisom02@gmail.com",
    tel: "+2347063265056",
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
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/seamailer.png",
      start: "September 2024",
      end: "Present",
      description:
        "Built and maintained high-performance UIs with Vue.js, ensuring responsiveness and accessibility. Integrated APIs for email campaign management, optimized frontend performance, and contributed to a modular architecture. Collaborated with UI/UX designers and backend engineers while leveraging Git and agile workflows for efficient development.",
    },
    {
      company: "YPMC",
      badges: [],
      href: "https://www.ypmcommunity.com",
      location: "Hybrid",
      title: "Fullstack Engineer",
      logoUrl: "/ypmc.png",
      start: "May 2025",
      end: "July 2025",
      description:
        "Served as a fullstack engineer with a strong focus on frontend development, contributing to the creation and growth of a logistics platform designed to connect users with dependable riders for quick, efficient deliveries. Built and refined responsive user interfaces from Figma designs using React, Next.js, TypeScript, and TailwindCSS, ensuring a polished and consistent experience across devices. Integrated complex frontend features with backend services, implemented real-time tracking via WebSockets, and continuously improved performance and scalability.",
    },
    {
      company: "Alajo",
      href: "https://alajo.app",
      badges: [],
      location: "Hybrid",
      title: "Frontend Engineer",
      logoUrl: "/alajo.png",
      start: "April 2025",
      end: "Present",
      description:
        "Worked as part of the frontend engineering team building a platform that digitizes savings for low-income earners, helping millions achieve financial inclusion without needing smartphones or internet access. Developed and maintained responsive, high-performance interfaces using Vue.js, TailwindCSS, and related tooling, integrated features with backend APIs, and collaborated closely with product and engineering teams in sprints to deliver accessible and reliable user experiences.",
    },
  ],
  education: [
    {
      school: "Federal University of Technology Owerri",
      href: "https://futo.edu.ng",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/futo.png",
      start: "2019",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Swirvl",
      href: "https://swirvl.com",
      dates: "Feb 2025 - Apr 2025",
      active: true,
      description:
        "Built a marketplace where buyers create product contests (auctions) and brokers submit competitive bids. Integrated instant messaging for seamless negotiation, escrow payments for secure transactions, and a dynamic dashboard for users to track bids, manage deals, and monitor transaction history.",
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
      title: "Seamailer",
      href: "https://seamailer.app",
      dates: "Sept 2024 - Present",
      active: true,
      description:
        "Collaborated to develop a robust email marketing platform enabling users to create, schedule, and automate campaigns. Integrated analytics for tracking engagement, built a seamless email template editor, optimized sending pipelines with SMTP providers, and ensured real-time reporting for enhanced user insights.",
      technologies: [
        "Vue",
        "Typescript",
        "TailwindCSS",
        "Preline UI",
        "Pinia",
        "Vue Router",
        "Vue Flow",
        "Vitest",
        "Cypress",
        "Vuelidate",
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
      title: "Assist Factory",
      href: "https://assistfactory.com",
      dates: "Nov 2024 - Apr 2025",
      active: true,
      description:
        "Engineered a platform connecting businesses with skilled virtual assistants. Implemented a streamlined request system for task management, integrated real-time messaging for efficient communication, and optimized the user interface for a smooth and professional experience.",
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
      title: "YPMC",
      href: "https://www.ypmcommunity.com",
      dates: "May 2025 - Jul 2025",
      active: true,
      description:
        "Served as a fullstack engineer with a strong focus on frontend development, contributing to the creation and growth of a logistics platform designed to connect users with dependable riders for quick, efficient deliveries. Built and refined responsive user interfaces from Figma designs using React, Next.js, TypeScript, and TailwindCSS, ensuring a polished and consistent experience across devices.",
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
      title: "Alajo",
      href: "https://alajo.app",
      dates: "Apr 2025 - Present",
      active: true,
      description:
        "Worked as part of the frontend engineering team building a platform that digitizes savings for low-income earners, helping millions achieve financial inclusion without needing smartphones or internet access. Developed and maintained responsive, high-performance interfaces using Vue.js, TailwindCSS, and related tooling, integrated features with backend APIs, and collaborated closely with product and engineering teams in sprints.",
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
      title: "Fitxn",
      href: "https://www.fitxn.co",
      dates: "Aug 2024 - Nov 2024",
      active: true,
      description:
        "Collaborated to develop a gym and spa management system streamlining membership handling, booking, and payments. Designed an intuitive dashboard for tracking subscriptions, managing client interactions, and automating service scheduling for a seamless fitness experience.",
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
