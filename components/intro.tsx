"use client";
// @ts-ignore
import ParticleBackground from 'react-particle-backgrounds'
import photo from '@/public/photo.jpg'

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import {TypeAnimation} from "react-type-animation";
import {GITHUB_URL, LINKEDIN_URL} from "@/lib/links";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const typeAnimationSequence = [
    'React',
    1500,
    'Vue',
    1500,
    'TypeScript',
    1500,
    'Node.js',
    1500
  ]

  const settings = {
    particle: {
      particleCount: 35,
      color: "#10b981",
      minSize: 2,
      maxSize: 5
    },
    velocity: {
      minSpeed: 0.2,
      maxSpeed: 0.4
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.6,
      opacityTransitionTime: 10000
    }
  }


  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            whileHover={{
              scale: 1.05
            }}
          >
            <div className="rounded-3xl p-3 bg-white hover:bg-emerald-500 duration-500 shadow-xl">
              <Image
                src={photo}
                alt="Portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-64 w-64 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Alexander.</span> <br/> I'm a{" "}
        <span className="font-bold">Full Stack </span>
        <TypeAnimation
          sequence={typeAnimationSequence}
          wrapper="span"
          speed={25}
          className="inline-block font-bold text-emerald-500"
          repeat={Infinity}
        />
        <span>developer</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-white dark:bg-gray-900 text-black dark:text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 dark:hover:bg-gray-950 active:scale-105 transition relative w-64 h-12 borderBlack"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <div className="absolute z-30 group-hover:dark:text-main">
            Contact me here{" "}
          </div>

          <div className="absolute z-0 h-12 w-64 overflow-hidden left-0 rounded-full">
            <ParticleBackground settings={settings}/>
          </div>

          <div className="absolute z-30 right-[30px]">
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 group-hover:rotate-90 transition" />
          </div>
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={LINKEDIN_URL}
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={GITHUB_URL}
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
