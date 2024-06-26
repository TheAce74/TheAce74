import techmilitant from "@/assets/techmilitant.webp";
import techverse from "@/assets/techverse.webp";
import movieBox from "@/assets/movie-box.webp";
import kreator from "@/assets/kreator.webp";
import urpilot from "@/assets/urpilot.webp";
import triplec from "@/assets/triplec.webp";
import academify from "@/assets/academify.webp";
import lwb from "@/assets/lwb.webp";
import ratemate from "@/assets/ratemate.webp";
import novanote from "@/assets/novanote.webp";
import stackclique from "@/assets/stackclique.webp";
import chris from "@/assets/chris.webp";
import { FaHtml5, FaCss3Alt, FaReact, FaYarn } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNpm } from "react-icons/io";
import {
  SiSass,
  SiReactrouter,
  SiRedux,
  SiJquery,
  SiVite,
  SiFramer,
  SiSwiper,
  SiAxios,
  SiJson,
  SiSupabase,
  SiBootstrap,
  SiTailwindcss,
  SiFirebase,
  SiMui,
  SiCreatereactapp,
  SiReacthookform,
  SiReactquery,
  SiStyledcomponents,
  SiTypescript,
  SiNextdotjs,
  SiChartdotjs,
  SiPostman,
  SiCypress,
  SiJest,
  SiTestinglibrary,
  SiSpring,
  SiAuth0,
  SiChakraui,
  SiPyup,
  SiReact,
  SiVitest,
  SiAppwrite,
  SiSwr,
  SiApollographql,
  SiMobx,
  SiShadcnui,
  SiGreensock,
  SiZod,
  SiRadixui,
} from "react-icons/si";
import { BsGit, BsGithub, BsBarChartFill, BsInstagram } from "react-icons/bs";
import {
  TbBrandVscode,
  TbBrandReact,
  TbBrandRedux,
  TbGhost2,
  TbBrandMantine,
} from "react-icons/tb";
import { GiVikingHelmet } from "react-icons/gi";

export const PROJECTS = [
  {
    title: "Urpilot",
    tools: ["Redux", "Mantine", "Typescript", "Tanstack Query"],
    pic: urpilot,
    link: "https://urpilot.vercel.app",
    github: "https://github.com/TheAce74",
  },
  {
    title: "Triple C",
    tools: ["MobX", "Apollo", "React Auth Kit", "GSAP"],
    pic: triplec,
    link: "https://triplec.vercel.app",
    github: "https://github.com/TheAce74",
  },
  {
    title: "Learning With Babanlar",
    tools: ["Next.js", "Radix UI", "Shadcn UI", "SWR"],
    pic: lwb,
    link: "https://www.learningwithbabanlar.com",
    github: "https://github.com/TheAce74",
  },
  {
    title: "Academify",
    tools: ["Axios", "Tailwind", "Context API", "Vite"],
    pic: academify,
    link: "https://myacademify.vercel.app",
    github: "https://github.com/TheAce74/Academify",
  },
  {
    title: "Fullstack Designer Portfolio",
    tools: ["Styled Components", "Jotai", "Typescript", "Appwrite"],
    pic: chris,
    link: "https://asorchristopher.vercel.app",
    github: "https://github.com/TheAce74/AsorChris",
  },
  {
    title: "RateMate",
    tools: ["Mantine", "Tailwind", "Zustand", "Appwrite"],
    pic: ratemate,
    link: "https://ratingmate.vercel.app",
    github: "https://github.com/TheAce74",
  },
  {
    title: "NovaNote",
    tools: ["Material UI", "Firebase", "Redux", "Typescript"],
    pic: novanote,
    link: "https://novanotebook.netlify.app",
    github: "https://github.com/TheAce74/novanote",
  },
  {
    title: "TechMilitant",
    tools: ["React", "Redux", "Redux Toolkit", "Vitest"],
    pic: techmilitant,
    link: "https://techmilitant.co",
    github: "https://github.com/TheAce74",
  },
  {
    title: "Techverse",
    tools: ["React", "PayStack API", "Framer Motion"],
    pic: techverse,
    link: "https://techverseconference.netlify.app",
    github: "https://github.com/TheAce74/Techverse",
  },
  {
    title: "MovieBox",
    tools: ["React", "TMDB API", "React Router", "Axios"],
    pic: movieBox,
    link: "https://hngxsecondtask.netlify.app",
    github: "https://github.com/TheAce74/HNGx/tree/main/Second%20Task",
  },
  {
    title: "The Kreator's Portfolio",
    tools: ["React", "Typescript", "React Spring", "Tailwind"],
    pic: kreator,
    link: "https://thekreator.vercel.app/",
    github: "https://github.com/TheAce74/TheKreatorPortfolio",
  },
  {
    title: "StackClique Clock",
    tools: ["Supabase", "Bootstrap", "Sass"],
    pic: stackclique,
    link: "https://stackcliqueclock.netlify.app/",
    github: "https://github.com/theAce74/stackcliqueclock",
  },
];

export const SKILLS = [
  {
    title: "HTML",
    icon: <FaHtml5 />,
  },
  {
    title: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    title: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    title: "React",
    icon: <FaReact />,
  },
  {
    title: "Sass",
    icon: <SiSass />,
  },
  {
    title: "React Router",
    icon: <SiReactrouter />,
  },
  {
    title: "NPM",
    icon: <IoLogoNpm />,
  },
  {
    title: "Yarn",
    icon: <FaYarn />,
  },
  {
    title: "Git",
    icon: <BsGit />,
  },
  {
    title: "GitHub",
    icon: <BsGithub />,
  },
  {
    title: "Redux",
    icon: <SiRedux />,
  },
  {
    title: "Redux Toolkit",
    icon: <TbBrandRedux />,
  },
  {
    title: "Typescript",
    icon: <SiTypescript />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    title: "Supabase",
    icon: <SiSupabase />,
  },
  {
    title: "Bootstrap",
    icon: <SiBootstrap />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    title: "Firebase",
    icon: <SiFirebase />,
  },
  {
    title: "Appwrite",
    icon: <SiAppwrite />,
  },
  {
    title: "Chakra UI",
    icon: <SiChakraui />,
  },
  {
    title: "Material UI",
    icon: <SiMui />,
  },
  {
    title: "Mantine",
    icon: <TbBrandMantine />,
  },
  {
    title: "Tanstack Query",
    icon: <SiReactquery />,
  },
  {
    title: "Zustand",
    icon: <TbBrandReact />,
  },
  {
    title: "Styled Components",
    icon: <SiStyledcomponents />,
  },
  {
    title: "Axios",
    icon: <SiAxios />,
  },
  {
    title: "jQuery",
    icon: <SiJquery />,
  },
  {
    title: "Vitest",
    icon: <SiVitest />,
  },
  {
    title: "Cypress",
    icon: <SiCypress />,
  },
  {
    title: "Jest",
    icon: <SiJest />,
  },
  {
    title: "React Testing Library",
    icon: <SiTestinglibrary />,
  },
  {
    title: "Vite",
    icon: <SiVite />,
  },
  {
    title: "VS Code",
    icon: <TbBrandVscode />,
  },
  {
    title: "Framer Motion",
    icon: <SiFramer />,
  },
  {
    title: "Swiper JS",
    icon: <SiSwiper />,
  },
  {
    title: "JSON",
    icon: <SiJson />,
  },
  {
    title: "Create React App",
    icon: <SiCreatereactapp />,
  },
  {
    title: "React Hook Form",
    icon: <SiReacthookform />,
  },
  {
    title: "Formik",
    icon: <TbBrandReact />,
  },
  {
    title: "Emotion",
    icon: <SiReact />,
  },
  {
    title: "Apex Charts",
    icon: <BsBarChartFill />,
  },
  {
    title: "Chart.js",
    icon: <SiChartdotjs />,
  },
  {
    title: "Postman",
    icon: <SiPostman />,
  },
  {
    title: "React Spring",
    icon: <SiSpring />,
  },
  {
    title: "Auth0",
    icon: <SiAuth0 />,
  },
  {
    title: "Jotai",
    icon: <TbGhost2 />,
  },
  {
    title: "React Helmet",
    icon: <GiVikingHelmet />,
  },
  {
    title: "Yup",
    icon: <SiPyup />,
  },
  {
    title: "Zod",
    icon: <SiZod />,
  },
  {
    title: "SWR",
    icon: <SiSwr />,
  },
  {
    title: "React Auth Kit",
    icon: <SiAuth0 />,
  },
  {
    title: "Apollo",
    icon: <SiApollographql />,
  },
  {
    title: "MobX",
    icon: <SiMobx />,
  },
  {
    title: "GSAP",
    icon: <SiGreensock />,
  },
  {
    title: "Radix UI",
    icon: <SiRadixui />,
  },
  {
    title: "Shadcn UI",
    icon: <SiShadcnui />,
  },
];

export const TESTIMONIALS = [
  {
    name: "Wisdom Chima",
    handle: "@kreatorgraphics",
    icon: <BsInstagram />,
    platform: "Instagram",
    body: "I needed a portfolio as a designer with which I could begin my cold outreach to prospective clients. I reached out to Chisom to help me out with the development, and at every step of the development phase, he inquired for feedback showing how detailed and committed to project he was. He eventually ended up over delivering on the design I sent to him with amazing insights & suggestions, and the site was very optimized and clean. 100% recommend him.",
    link: "http://instagram.com/kreatorgraphics",
  },
  {
    name: "Victor Iloenyenwa",
    handle: "@ProCode47",
    icon: <BsGithub />,
    platform: "GitHub",
    body: "Chisom is a brilliant developer in every definition of the word, he is well versed in the technologies he utilizes and can analyze tricky problems and implement amazing solutions. He's a lifelong learner obsessed with perfecting his craft. He's definitely the guy for the job. Whatever it is, he can crack it",
    link: "https://github.com/ProCode47",
  },
  {
    name: "Christopher Asor",
    handle: "@asor_chris",
    icon: <BsInstagram />,
    platform: "Instagram",
    body: "Chisom is a very unique and talented frontend developer. He combines effective and efficient implementation of functionalities with great attention to detail. He's a great team player and always tries to keep up good communication with his client, thanks to his great communication skills. He has shown a great sense of responsibility in the few projects he's worked on with me and I'll recommend him to every hiring manager because he'll be an excellent addition and improvement to any team!",
    link: "https://www.instagram.com/asor_chris/",
  },
  {
    name: "Jeffrey Adjari",
    handle: "@Walter-Tronics",
    icon: <BsGithub />,
    platform: "GitHub",
    body: "I have worked with Chisom Udonsi for years and he has always been a professional. He can work under pressure and easily adapt to change, embraces diversity and is open to growth opportunities. He's a great problem-solver with great leadership skills. He can easily work with anyone because of his interpersonal talent. I hope he grows and continues to thrive in his endeavours.",
    link: "https://github.com/Walter-Tronics",
  },
  {
    name: "Henry Kanu",
    handle: "@Stan545",
    icon: <BsGithub />,
    platform: "GitHub",
    body: "Chisom, also known as the \"Senku Ishigami of the Dev World\", is a tech enthusiast and highly skilled frontend developer. His relentless pursuit of knowledge and unwavering determination have made a profound impact on my programming journey. Chisom's mastery of frontend development is awe-inspiring, as he effortlessly translates complex concepts into elegant code. With his guidance and expertise, I have experienced tremendous growth and gained invaluable insights. Chisom's exceptional mentorship inspires positive change, making him a source of inspiration in my life.",
    link: "https://github.com/Stan545",
  },
  {
    name: "Tochukwu Nwankwo",
    handle: "@Emmanuetoks",
    icon: <BsGithub />,
    platform: "GitHub",
    body: "Chisom is a very remarkable programmer and mentor. His quick problem-solving skills and structured lifestyle make him one of the best programmers in the tech niche of our school. His efficient teaching skills and flawless communication enabled me to grasp whatever he taught me or any other person in just minutes. Of course, all these qualities of his are just to name a few; working and interacting with him will reveal just how good he is at what he does.",
    link: "https://github.com/Emmanuetoks",
  },
];
