"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import mapImage from "@/assets/images/Map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WobbleCard } from "../components/ui/wobble-card";
import HTMLIcon from "../assets/icons/html5.svg";
import CSSIcon from "../assets/icons/css3.svg";
import TailwindCSSIcon from "../assets/icons/tailwindcss.svg";
import JavascriptIcon from "../assets/icons/javascript.svg";
import JavaIcon from "../assets/icons/java-icon.svg";
import ReactIcon from "../assets/icons/react.svg";
import NextjsIcon from "../assets/icons/next-js.svg";
import NodeIcon from "../assets/icons/nodejs.svg";
import MongoDbIcon from "../assets/icons/mongodb.svg";
import GithubIcon from "../assets/icons/icons8-github.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import ExpressIcon from "../assets/icons/icons8-express-js.svg";
import MysqlIcon from "../assets/icons/mysql-ar21.svg";
import PostmanIcon from "../assets/icons/postman.svg";


const toolboxItems = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindCSSIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },

  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextjsIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "Node.js",
    iconType: NodeIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDbIcon,
  },

  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  {
    title: "MySQL",
    iconType: MysqlIcon,
  },
  {
    title: "Express.js",
    iconType: ExpressIcon,
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
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

export const AboutSection = () => {
  const constraintRef = useRef(null);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  return (
    <div id="about" className=" pb-40 md:pb-52 lg:pb-52">
      <div className="container">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          className="border-t border-white/15 "
        >
          <SectionHeader
            title="About Me"
            description="Enthusiastic Software Developer with a strong foundation in Java programming language, Web Development Technologies, and App Development. "
          />
        </motion.div>

        <div className="mt-20 flex flex-col gap-8">
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 "
          >
            <WobbleCard containerClassName="col-span-1  h-[350px] lg:col-span-3 bg-gray-900 p-0 ">
              <Card className="w-full h-full  md:col-span-1 lg:col-span-2">
                <CardHeader
                  title="My Toolbox"
                  description=" Explore the technologies I used to craft my projects."
                  className="text-3xl"
                />

                <ToolboxItems
                  items={toolboxItems}
                  className="  "
                  ItemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6 "
                  ItemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
                />
              </Card>
            </WobbleCard>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            className=" flex justify-center "
          >
            <Card className="h-[320px] md:w-[400px] lg:w-[550px] p-0 relative  after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2  after:rounded-2xl after:outline-white/20 after:pointer-events-none ">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full   after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute bg-gradient-to-r from-emerald-300 to-sky-400 inset-0 rounded-full -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute bg-gradient-to-r from-emerald-300 to-sky-400 inset-0 rounded-full -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Smiling Emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
