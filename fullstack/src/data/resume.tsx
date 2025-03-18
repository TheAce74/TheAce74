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
      company: "LearningWithBabanlar",
      badges: [],
      href: "https://learningwithbabanlar.vercel.app",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/lwb.png",
      start: "March 2024",
      end: "June 2024",
      description:
        "Optimized user experience by transforming designs into responsive, high-performance web applications using React, HTML, CSS, and JavaScript. Developed reusable components, ensured seamless backend integration, and enhanced cross-browser compatibility. Managed workflows, adhered to SEO best practices, and conducted thorough testing for a smooth, efficient user experience.",
    },
    {
      company: "AirtimeFlip",
      href: "https://airtimeflip.com",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/airtimeflip.png",
      start: "January 2024",
      end: "April 2024",
      description:
        "Delivered frequent product updates following Agile practices, enhancing functionality and scalability. Maintained legacy code, optimized UI/UX, and ensured high software quality through rigorous testing. Focused on accessibility, SEO, and writing unit tests for reliability.",
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
      title: "Urpilot",
      href: "https://urpilot.ng",
      dates: "Dec 2024 - Mar 2025",
      active: true,
      description:
        "Created a platform allowing vendors to register businesses, list products, and manage sales. Implemented features for product browsing, order placement, delivery requests, and travel ticket purchases. Integrated analytics to track vendor performance and provided admin tools for oversight.",
      technologies: [
        "React",
        "Vite",
        "Typescript",
        "TailwindCSS",
        "Mantine",
        "Redux",
        "Redux Toolkit",
        "Tanstack Query",
        "React Hook Form",
        "Zod",
        "Paystack SDK",
      ],
      links: [
        {
          type: "Website",
          href: "https://urpilot.ng",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/urpilot.webp",
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
    {
      title: "ShoutMe",
      href: "https://shoutme.vercel.app",
      dates: "Jan 2025",
      active: true,
      description:
        "Built an emergency alert platform where users can report security incidents in real-time. Developed an efficient backend with Node.js, Express, and MongoDB to handle alerts, notify users instantly, and ensure secure data management.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "React Hook Form",
        "Zod",
        "Zustand",
        "AWS SDK",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://shoutme.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TheAce74/ShoutMe",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TheAce74/ShoutMeBackend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shoutme.png",
      video: "",
    },
  ],
} as const;
