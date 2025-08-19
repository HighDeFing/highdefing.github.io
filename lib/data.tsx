import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { LuGraduationCap } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import searchImg from "@/public/search_thesis.png";
import gobudgetImg from "@/public/gobudget.png";
import zooxLogo from "@/public/zoox_logo.png";

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
    title: "BSc Computer Science",
    location: "Caracas, Venezuela",
    company: "Universidad Central de Venezuela",
    description:
      "I graduated with a publication in Natural Language Processing for Semantic Search in Academic Repositories",
    icon: <LuGraduationCap />,
    date: "2014 - 2022",
  },
  {
    title: "Software Engineer Internship",
    location: "Caracas, Venezuela",
    company: "Empero",
    description:
      "Bug tested a Telegram conversational bot written in Python that used Rasa NLP.",
    icon: <AiOutlinePython />,
    date: "2019 - 2019",
  },
  {
    title: "Software Engineer Internship",
    location: "Caracas, Venezuela",
    company:"Allie (startup)",
    description:
      "Implemented a Facebook conversational bot that sells products using Python and the library fbmessenger",
    icon: <AiOutlinePython />,
    date: "2019 - 2019",
  },
  {
    title: "Freelance Backend Developer",
    location: "Colorado (remotely), US",
    company: "Ozone metaverse engine",
    description:
      "Designed and implemented a program using Python and Flask to upload files to a server.",
    icon: <AiOutlinePython />,
    date: "2020 - 2020",
  },
  {
    title: "Freelance Frontend Developer",
    location: "Colorado (remotely), US",
    company: "Ozone metaverse engine",
    description:
      "Implemented a User Interface for the different subscription plans using React.js and styling with SCSS.",
    icon: <FaReact />,
    date: "2021 - 2021",
  },
  {
    title: "Account Manager Assistant & IT Support",
    location: "Miami (Hybrid), FL",
    company: "Triallies LLC",
    description:
      "Provided customer service for other systems (including VoIP), installing and managing web applications for end user customers.",
    icon: <CgWorkAlt />,
    date: "2024 - 2024",
  },
    {
    title: "MSc Computer Science",
    location: "Miami, FL",
    company: "Florida International University",
    description:
      "Currently enrolled with focus in Artificial Intelligence and Cloud Computing",
    icon: <PiStudent />,
    date: "2024 - Current",
  },
    {
    title: "Autonomous Vehicle Operator",
    location: "Miami, FL",
    company: "Zoox, Inc.",
    description:
      "Currently working as an autonomous vehicle operator, ensuring the safe and efficient operation of autonomous vehicles in urban environments.",
    icon: <img src={zooxLogo.src} alt="Zoox Logo" className="w-full h-full object-contain"/>,
      date: "2025 - Current",
    }
] as const;

export const projectsData = [
  {
    title: "SearchThesis",
    description:
      "This is a web application that uses haystack.deepset for semantic search of 8,000 past thesis.",
    tags: ["Python", "ElasticSearch", "Haystack.deepset", "Fastapi"],
    imageUrl: searchImg,
    githubUrl: "https://github.com/HighDeFing/thesis_v4"
  },
  {
    title: "BudgetIT",
    description:
      "This is a web application where a user can create budgets using pdfs statements.",
    tags: ["Python", "React", "ExpressJS", "POSTGRESQL", "IndexLlamma"],
    imageUrl: gobudgetImg,
    githubUrl: "https://github.com/gobudget/gobudget"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "MongoDB",
  "SQL",
  "Python",
  "Docker",
  "C++",
  "Oracle",
  "Postgresql",
  "PowerBI",
  "ExpressJS"
] as const;
