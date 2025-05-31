"use client";

import LoveLine from "../assets/images/Loveline.png";
import Vmeet from "../assets/images/Vmeet.png";
import Bytetalk from "../assets/images/ByteTalk.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import ProjectsCard from "@/components/ProjectsCard";
import { LinkPreview } from "@/components/ui/link-preview";
import { motion } from "framer-motion";
import Link from "next/link";

const portfolioProjects = [
  {
    title: "Loveline",
    results: [
      {
        title:
          "Developed a responsive Phone Number Status website using React and TailwindCSS",
      },
      {
        title:
          "Integrated Twillio API to fetch and display real-time exercise data",
      },
      {
        title:
          "Optimized the application for performance and scalability by utilizing React hooks",
      },
    ],
    link: "https://loveline-ihvs.onrender.com/",
    Github: "https://github.com/SushantaKumarSahoo/LoveLine",
    image: LoveLine,
  },
  {
    title: "VMeet",
    results: [
      {
        title:
          "Developed a responsive Video Conference platform using Next.js and TailwindCSS",
      },
      {
        title:
          "Implemented Video Calling Feature with GetStream to fetch and added features like recording , schedule meetings , etc",
      },
      {
        title:
          "Utilized TypeScript for enhanced code quality, type safety, and scalability and Authenticaton with Clerk",
      },
    ],
    link: "https://v-meet-phi.vercel.app/",
    Github: "https://github.com/SushantaKumarSahoo/VMeet",
    image: Vmeet,
  },
  {
    title: "ByteTalk",
    results: [
      {
        title:
          "A Forum Website For Developers.",
      },
      {
        title:
          "Integrated reusable components to enhance code maintainability and scalability.",
      },
      {
        title:
          "Used Clerk for Authenticaton and GetStream for Chat.",
      },
    ],
    link: "https://bytetalk-ecru.vercel.app",
    Github: "https://github.com/SushantaKumarSahoo/bytetalk",

    image: Bytetalk,
  },
];

const variants = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 1,
    },
  },
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className=" pb-20 md:pb-28 lg:pb-40">
      <div className="container">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          className="border-t border-white/15"
        >
          <SectionHeader
            title="
            Featured Projects
            "
            description="
            See how I transformed concepts into engaging digital experiences.
            "
          />
        </motion.div>

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <ProjectsCard
              key={project.title}
              className=" px-8 pt-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5 ">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-xs md:text-[16px] lg:text-lg text-white/50 "
                      >
                        <CheckIcon className="size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-6">
                    <LinkPreview
                      url={project.link}
                      quality={100}
                      className="font-bold"
                    >
                      {/* <Link href={project.link} target="_blank"> */}
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2  mt-8 transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/80 hover:text-black">
                        <span className="text-sm md:text-lg">Visit Site</span>
                        <ArrowUpIcon className="size-7 md:size-5" />
                      </button>
                      {/* </Link> */}
                    </LinkPreview>
                    <LinkPreview
                      url={project.Github}
                      quality={100}
                      className="font-bold"
                    >
                      {/* <Link href={project.Github} target="_blank"> */}
                      <button className="bg-slate-950/60 text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2  mt-8 transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:bg-gray-950">
                        <Image
                          src="https://cdn-icons-png.flaticon.com/128/5968/5968896.png"
                          alt="Github"
                          width={35}
                          height={35}
                          className="size-7 md:size-7"
                        />
                        <span className="text-sm md:text-lg">GitHub</span>
                      </button>
                      {/* </Link> */}
                    </LinkPreview>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 rounded-2xl shadow-xl shadow-zinc-400 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </ProjectsCard>
          ))}
        </div>
      </div>
    </section>
  );
};
