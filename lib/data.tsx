import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import searchImg from "@/public/search_thesis.png";

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
    icon: <CgWorkAlt />,
    date: "2019 - 2019",
  },
  {
    title: "Software Engineer Internship",
    location: "Caracas, Venezuela",
    company:"Allie (startup)",
    description:
      "Implemented a Facebook conversational bot that sells products using Python and the library fbmessenger",
    icon: <CgWorkAlt />,
    date: "2019 - 2019",
  },
  {
    title: "Freelance Backend Developer",
    location: "Colorado (remotely), US",
    company: "Ozone metaverse engine",
    description:
      "Designed and implemented a program using Python and Flask to upload files to a server.",
    icon: <FaReact />,
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
    title: "Account Manager",
    location: "Miami (Hybrid), FL",
    company: "Triallies LLC",
    description:
      "Managed multiple accounts from various services and systems, requirement analysis and testing",
    icon: <FaReact />,
    date: "2024 - Current",
  }
] as const;

export const projectsData = [
  {
    title: "SearchThesis",
    description:
      "This is a web application that uses haystack.deepset for semantic search of past thesis.",
    tags: ["Python", "ElasticSearch", "Haystack.deepset", "Fastapi"],
    imageUrl: searchImg,
  },
    {
    title: "SearchThesis",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: searchImg,
  }
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
  "PowerBI"
] as const;