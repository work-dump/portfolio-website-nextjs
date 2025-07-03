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
    name: "Certifications",
    hash: "#certifications",
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
    title: "ChatPDF",
    description:
      "ChatPDF is an app that enables chatting with PDF documents using RAG techniques. Leveraged FAISS, ChromaDB and OpenAI's GPT model to build chat engine.",
    tags: [
      "Streamlit",
      "RAG",
      "ChromaDB",
      "FAISS",
      "OpenAI",
      "LLM",
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
      "AI-powered application that enables users to discover, generate, and share creative prompts using advanced LMs.",
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
  "NLP",
  "Computer Vision",
  "Time Series Forecasting",
  "Keras",
  "Reinforcement Learning",
  "PyTorch",
  "Tensorflow",
  "ONNX",
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
  "TensorRT",
  "Langchain & LangGraph",
  "LlamaIndex",
  "Prompt Engineering",
  "Model Distillation",
  "RAG",
  "Nvidia",
  "ROS",
  "Jetson"

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

export const certificationsData = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    date: "2023-08-15",
    imageUrl: "/DLCert.jpg",
    link: "https://coursera.org/verify/deep-learning-specialization",
  },
  {
    title: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "2022-12-10",
    imageUrl: "/AWSCert.jpg",
    link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow / Google",
    date: "2022-05-20",
    imageUrl: "/MLCert.jpg",
    link: "https://www.tensorflow.org/certificate",
  },
  {
    title: "Generative AI with LLMs",
    issuer: "DeepLearning.AI / OpenAI",
    date: "2024-03-01",
    imageUrl: "/GenAICert.jpg",
    link: "https://www.deeplearning.ai/short-courses/generative-ai-with-llms/",
  },
] as const;
