"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";
import { BackgroundLines } from "../components/ui/background-lines";
import { FlipWords } from "../components/ui/flip-words";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { useEffect } from "react";
import { useSnackbar } from "notistack";

export const HeroSection = () => {
  const { enqueueSnackbar } = useSnackbar();
  const words = [
    "Sushanta Kumar Sahoo",
    "Web Developer",
    "Full Stack Developer",
    "App Developer",
  ];

  const paragraph =
    "I specialize in transforming designs into functional,    high-performing web application. Let's discuss your next projects.";

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      enqueueSnackbar(
        "For a better experience, please view this website on a desktop.",
        {
          variant: "info",
          autoHideDuration: 5000,
        }
      );
    }
  }, [enqueueSnackbar]);

  return (
    <div
      id="home"
      className=" max-w-[1050px] mx-auto pt-28 pb-20 md:pt-28 md:pb-0    relative z-0"
    >
      <BackgroundLines className="">
        <div className="container relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="flex flex-col items-center size-25"
          >
            <Image src={memojiImage} className="size-[100px]" alt="Memoji" />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className=" bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
              </div>
              <div className="text-sm font-medium">Available for Job</div>
            </div>
          </motion.div>

          <div className="max-w-lg mx-auto ">
            <h1 className="font-serif text-lg text-center mt-4 tracking-wide md:text-5xl text-nowrap">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className=""
              >
                Hi, I&apos;m{" "}
              </motion.span>
              <br></br>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-3 text-xl md:text-6xl  md:-ml-4 lg:-ml-6 "
                style={{
                  color: "darkkhaki",
                }}
              >
                <FlipWords words={words} />
              </motion.div>
            </h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-10 text-center text-white/60 text-xs md:text-sm lg:text-lg"
            >
              <TextGenerateEffect words={paragraph} />
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 ">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <a
                href="https://drive.google.com/file/d/1-146KnkbzsDCnVgGFKeeqdyTs-rHoJcI/view?usp=drivesdk"
                className="  inline-block py-1 w-full sm:w-fit rounded-xl    text-white "
                
                target="_blank"
              >
                <HoverBorderGradient
                  containerClassName="rounded-xl "
                  as="button"
                  className=" bg-gray-900  flex items-center space-x-2"
                >
                  <span className="flex items-center justify-center bg-gray-900  rounded-xl px-3 py-0.5 ">
                    Download CV
                    <span className="ml-2">
                      <LuDownload />
                    </span>
                  </span>
                </HoverBorderGradient>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/15 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 h-12 px-6 rounded-xl"
              >
                <span className="font-semibold">Hire Me</span>
              </a>
            </motion.div>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
};
