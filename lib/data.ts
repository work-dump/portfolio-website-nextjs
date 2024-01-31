import eventlyImg from "@/public/evently.jpg";
import filmotecaImg from "@/public/filmoteca.jpg";
import pokemonImg from "@/public/pokemon.jpg";
import portfolioImg from "@/public/portfolioImg.jpg";
import promptopiaImg from "@/public/promptopia.jpg";
import yummyappImg from "@/public/yummyapp.jpg";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Ultimate Next.js 14 Cource",
    location: "Online",
    description:
      "A modern web development  through Next.js through. Routing, authentication, real-time events, and database integration. Optimization UI/UX, handle forms, and an advanced features like a voting system, badges, and reputation. Integration third-party APIs and automate answers with OpenAI. All while focusing on SEO and performance optimization.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "IT School GoIT",
    description:
      "I've successfully completed FULLSTACK developer course at GoIT.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Freelance Web developer",
    location: "Kyiv, Ukraine",
    description:
      "Developed responsive and visually stunning websites across various industries, optimized website performance, integrated e-commerce functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "My portfolio website. It is made with Next.js, Tailwind CSS, TypeScript, React.Email, Resend and Framer-motion.",
    tags: [
      "Next.js 13",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
      "Framer Motion",
      "React.Email & Resend",
    ],
    imageUrl: portfolioImg,
    githubUrl: "https://github.com/Alekhandro24/portfolio-website-nextjs",
    websiteUrl: "https://portfolio-website-nextjs-alpha.vercel.app/",
  },
  {
    title: "Pokemon App",
    description:
      "Pokemon App is amazing app where you can find a lot of different Pokemons from PokeAPI, compare them, create your own list and even add or delete them from it, see the evolution of Pokemons and find some extra information all about the Pokemons.",
    tags: [
      "React Hooks",
      "React Router",
      "CSS3 & SCSS",
      "Redux and Redux Toolkit",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Axios",
      "PokeAPI",
    ],
    imageUrl: pokemonImg,
    githubUrl: "https://github.com/Alekhandro24/pokemon-app",
    websiteUrl: "https://pokemon-app-7142b.web.app/pokemon/1",
  },
  {
    title: "Yummy App",
    description:
      "So-yummy is a feature-rich single-page application (SPA) designed to enhance your culinary experience.",
    tags: [
      "React",
      "Redux Toolkit",
      "MongoDB",
      "Node.js",
      "Styled-Components",
      "Formik",
      "Mongoose",
      "Multer",
    ],
    imageUrl: yummyappImg,
    githubUrl: "https://github.com/Alekhandro24/yummy-frontend-project",
    websiteUrl: "https://demetryj.github.io/yummy-frontend/welcome",
  },
  {
    title: "Evently Web App",
    description:
      "An event organization web app with authentication, event management, search, filtering, categories, checkout, and payments.",
    tags: [
      "Next.js 14",
      "Shadcn",
      "TypeScript",
      "Clerk",
      "Webhooks",
      "Dropdown & File uploader",
      "React-Datepicker",
      "Stripe",
    ],
    imageUrl: eventlyImg,
    githubUrl: "https://github.com/Alekhandro24/events-app-next14",
    websiteUrl: "https://smart-evently.vercel.app/",
  },
  {
    title: "Promptopia",
    description:
      "Promptopia is a web application that allows users to discover, create, and share creative prompts.",
    tags: [
      "React",
      "Next.js",
      "TailwindCss",
      "Mongodb",
      "Mongoose",
      "Nextauth",
    ],
    imageUrl: promptopiaImg,
    githubUrl: "https://github.com/Alekhandro24/project_next_ai_prompt_sharing",
    websiteUrl:
      "https://project-next-ai-prompt-sharing-git-main-alekhandro24.vercel.app/",
  },
  {
    title: "Filmoteka website",
    description:
      "Filmoteka is a two-page website designed to provide users with access to trending movies, search for movies based on keywords, view movie details, trailers, and create their own library of watched movies or movies to watch.",
    tags: [
      "Javascript",
      "Sass",
      "Parcel",
      "Localstorage ",
      "Themeswitch",
      "Pagination ",
    ],
    imageUrl: filmotecaImg,
    githubUrl: "https://github.com/Alekhandro24/filmoteka-project",
    websiteUrl: "https://alekhandro24.github.io/filmoteka-project/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Saas",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Redux Toolkit",
  "Next.js 14",
  "Clerk",
  "Node.js",
  "Git",
  "TailwindCSS",
  "MongoDB",
  "Webhooks",
  "Zod",
  "React-Datepicker",
  "Stripe ",
  "Context API",
  "React.Email & Resend",
  "Firebase",
  "Material-ui",
  "Redux persist",
  "Yup ",
  "Formik",
  "Express",
  "Docker",
  "Express",
  "Framer Motion",
  "Shadcn",
  "MUI",
  "Styled components",
] as const;
