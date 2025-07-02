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
    title: "Senior Software Engineer",
    location: "Velocity Data Solutions, Austin, TX",
    description:
      "Architected scalable ML platforms and real-time analytics solutions for 50,000+ users, leading MLOps, model deployment, and team mentorship in a cloud-native environment.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2022 – Present",
  },
  {
    title: "Machine Learning Engineer",
    location: "BorderTech Analytics, El Paso, TX",
    description:
      "Developed computer vision and time series models for supply chain optimization, building robust MLOps pipelines and real-time data processing systems.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2020 – Feb 2022",
  },
  {
    title: "Junior Data Scientist",
    location: "Southwest Credit Union, El Paso, TX",
    description:
      "Built predictive models and automated analytics pipelines for financial risk assessment, delivering actionable insights and interactive dashboards.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2018 – May 2020",
  },
  {
    title: "B.Sc. Computer Science, Software Engineering",
    location: "University of Texas at Austin",
    description:
      "Graduated with a major in Software Engineering and a minor in Artificial Intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2018 – May 2022",
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
    githubUrl: "https://github.com/work-dump/portfolio-website-nextjs",
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
    githubUrl: "https://github.com/work-dump/pokemon-app",
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
    githubUrl: "https://github.com/work-dump/yummy-frontend-project",
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
    githubUrl: "https://github.com/work-dump/events-app-next14",
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
    githubUrl: "https://github.com/work-dump/project_next_ai_prompt_sharing",
    websiteUrl:
      "https://project-next-ai-prompt-sharing-git-main-github.com/work-dump.vercel.app/",
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
    githubUrl: "https://github.com/work-dump/filmoteka-project",
    websiteUrl: "https://work-dump.github.io/filmoteka-project/",
  },
] as const;

export const skillsData = [
  // Programming Languages
  "Python",
  "R",
  "C++",
  "Machine Learning",
  "Deep Learning",
  "Time Series Forecasting",
  "Computer Vision",
  "NLP",
  "Reinforcement Learning",
  "PyTorch",
  "Tensorflow",
  "Keras",
  "Scikit-learn",
  "Pandas",
  "Numpy",
  "Matplotlib",
  "Streamlit",
  "Gradio",
  "AWS SageMaker",
  "Docker",
  "FastAPI",
  "Vector Databases",
  "Git",
  "Langchain & LangGraph",
  "LlamaIndex",
  "Prompt Engineering",
  "RAG",
  "Computer Vision",
  "Model Distillation",
  "ONNX",
  "TensorRT",

] as const;
