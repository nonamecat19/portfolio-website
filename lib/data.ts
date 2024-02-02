import React from "react";
import {FaNodeJs, FaReact, FaVuejs} from "react-icons/fa";
import jobSearchApp from "@/public/job-search-app.jpg"
import copyPasteWizard from "@/public/copy-paste-wizard.jpg"
import realtimeChat from "@/public/realtime-chat.jpg"

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
    title: "Full Stack JS Developer",
    location: "Remote",
    company: "MaybeWorks",
    type: "Full-time",
    stack: "React, NestJS",
    paragraphs: [
    ],
    icon: React.createElement(FaNodeJs),
    date: "January 2024 - Present",
  },
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
    location: "Remote",
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
    title: "Realtime Chat App",
    description: "This app I made on the test week in my company. " +
      "That was a 5-day challenge from 0 to hero in WebSockets.",
    tags: ["React", "NestJS", "Socket.io", "shadcn/ui", "jotai", "MySQL", "Redis", "Docker", "TypeORM"],
    imageUrl: realtimeChat,
    github: "https://github.com/nonamecat19/realtime-chat"
  },
  {
    title: "Job Search App",
    description: "Mobile job search application. It is my university coursework.",
    tags: ["React Native", "Expo", "TypeScript", "Zustand", "Express.js", "MongoDB", "Mongoose", "Firebase"],
    imageUrl: jobSearchApp,
    github: "https://github.com/nonamecat19/job-search-app-react-native"
  },
  {
    title: "Copy Paste App",
    description: "This app I made for me and my colleagues at work. " +
      "A lot of copy-paste things such as git accounts, SSH IP and passwords people save in Excel or text files. This desktop app improves user experience and stays secure"
    ,
    tags: ["React", "Tauri", "shadcn/ui", "Zustand"],
    imageUrl: copyPasteWizard,
    github: "https://github.com/nonamecat19/copy-paste-wizard"
  }
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
      "Jotai"
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
      "TypeORM",
      "Prisma",
      "C#",
      "ASP.Net"
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
			"Storybook",
      "Strapi"
		],
	},
] as const;
