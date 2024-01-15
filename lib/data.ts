import filmotecaImg from "@/public/filmoteca.jpg";
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
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCss",
  "MongoDB",
  "Docker",
  "Express",
  "Framer Motion",
  "MUI",
  "Styled components",
] as const;
