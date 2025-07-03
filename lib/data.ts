import eventlyImg from "@/public/evently.jpg";
import filmotecaImg from "@/public/filmoteca.jpg";
import lidarImg from "@/public/lidarImg.jpg";
import churnImg from "@/public/churnImg.jpg";
import promptopiaImg from "@/public/promptopia.jpg";
import ragImg from "@/public/ragImg.jpg";
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
    name: "Blogs",
    hash: "#blog",
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
    title: "PDFChat",
    description:
      "PDFChat is an app that enables chatting with PDF documents using Retrieval-Augmented Generation (RAG) techniques. The UI is built with Streamlit, ChromaDB is used as the vector database, FAISS for similarity search, and OpenAI powers the language engine.",
    tags: [
      "Streamlit",
      "Python",
      "RAG",
      "ChromaDB",
      "FAISS",
      "OpenAI",
      "LLM",
      "PDF",
    ],
  
    imageUrl: ragImg,
    githubUrl: "https://github.com/work-dump/pdfchat",
    websiteUrl: "https://pdfchat-ragsys.streamlit.app/",
  },
  {
    title: "Bank Churn Predictor",
    description:
      "Analyzed customer demographics, transaction history, and account activity to identify customers likely to leave.",
    tags: [
      "Python",
      "ML",
      "Tableau",
      "Ensemble Methods",
      "LSTM",
      "Fastapi",
      "XGBoost",
      "Pandas",
    ],
    imageUrl: churnImg,
    githubUrl: "https://github.com/work-dump/bank-churn-predictor",
    websiteUrl: "https://github.com/work-dump/bank-churn-predictor",
  },
  {
    title: "Lidar 3D Reconstruction",
    description:
      "Developed a 3D reconstruction system using Lidar sensors mounted on a drone: SLAM, 3D visualization.",
    tags: [
      "Lidar",
      "SLAM",
      "ROS",
      "C++",
      "Python",
      "Jetson",
      "Open3D",
      "3D Reconstruction",
    ],
    imageUrl: lidarImg,
    githubUrl: "https://github.com/work-dump/jetson-r3live",
    websiteUrl: "https://youtu.be/4rjrrLgL3nk",
  },
  
  {
    title: "Promptopia",
    description:
      "Promptopia is an AI-powered web application that enables users to discover, generate, and share creative prompts using advanced language models. Users can leverage AI to create unique prompts, explore community submissions, and collaborate on prompt engineering.",
    tags: [
      "AI",
      "LLM",
      "FastAPI",
      "Gen AI",
      "Prompt Engineering", 
      "OpenAI API",
      "Python",
      "ML"
    ],
    imageUrl: promptopiaImg,
    githubUrl: "https://github.com/work-dump/project_next_ai_prompt_sharing",
    websiteUrl:
      "https://project-next-ai-prompt-sharing-git-main-github.com/work-dump.vercel.app/",
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

export const blogPostsData = [
  {
    title: "How I Built a PDF Chatbot with RAG and LLMs",
    summary: "A deep dive into building a document Q&A system using Retrieval-Augmented Generation, OpenAI, and vector databases.",
    date: "2025-07-01",
    tags: ["RAG", "LLM", "OpenAI", "Python"],
    url: "#",
  },
  {
    title: "Deploying AI Models: MLOps Best Practices",
    summary: "From notebooks to production: my workflow for deploying, monitoring, and scaling machine learning models in real-world applications.",
    date: "2025-06-15",
    tags: ["MLOps", "Deployment", "Cloud", "CI/CD"],
    url: "#",
  },
  {
    title: "Prompt Engineering for Generative AI",
    summary: "Tips and tricks for crafting effective prompts to get the best results from large language models and generative AI systems.",
    date: "2025-06-01",
    tags: ["Prompt Engineering", "GenAI", "LLM", "AI"],
    url: "#",
  },
  {
    title: "My Journey: From Data Science to AI Engineering",
    summary: "Lessons learned, skills gained, and advice for anyone looking to transition from data science to a versatile AI engineering role.",
    date: "2025-05-20",
    tags: ["Career", "AI Engineer", "Data Science"],
    url: "#",
  },
  {
    title: "Building Real-Time AI Apps with FastAPI and WebSockets",
    summary: "How I built scalable, real-time AI-powered applications using FastAPI, WebSockets, and modern Python tools.",
    date: "2025-05-01",
    tags: ["FastAPI", "WebSockets", "Python", "Real-Time AI"],
    url: "#",
  },
] as const;
