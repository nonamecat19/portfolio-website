import React from "react";
import { FaReact, FaVuejs } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Full Stack JS developer",
    location: "Zhytomyr | On-site",
    company: "4K Soft",
    type: "Full-time",
    stack: "Vue, Nuxt, NestJS, Postgres",
    paragraphs: [
      "Engaged in software development and support on many projects",
      "Transferred the development team and projects to modern technologies (Vue3, Vite, Composition API, Pinia, TailwindCSS, HeadlessUI, Storybook, Vue-Query, Zod, FSD Architecture)",
      "Worked as a mentor, trained people for commercial development",
      "Took part in the development of high-load projects"
    ],
    icon: React.createElement(FaVuejs),
    date: "May 2023 - January 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Zhytomyr | Remote",
    company: "Zhytomyr Polytechnic State University",
    type: "Part-time",
    stack: "React, React Native, Capacitor, ExpressJS, ASP.Net, Postgres",
    paragraphs: [
      "Developed prototype of a system for monitoring the health of university students",
      "Created mobile applications from existing web application (PWA)"
    ],
    icon: React.createElement(FaReact),
    date: "March 2023 - January 2024",
  }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description: "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description: "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description: "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
	{
		title: "Main",
		data: [
			"HTML",
			"CSS",
			"JavaScript",
			"TypeScript"
		],
	},
	{
		title: "Front End",
		data: [
			"React",
			"Next.js",
			"Vue",
			"Nuxt",
			"TailwindCSS",
			"React Native",
			"Zustand",
			"Redux-toolkit",
		],
	},
	{
		title: "Back End",
		data: [
			"NodeJS",
			"NestJS",
			"Postgres",
			"MongoDB",
			"Python",
			"FastAPI",
			"Redis",
		],
	},
	{
		title: "Other",
		data: [
			"GraphQL",
			"Docker",
			"PM2",
			"NGINX",
			"Apache",
			"Storybook"
		],
	},
] as const;
