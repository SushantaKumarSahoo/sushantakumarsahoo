"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: -100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className=" flex justify-end px-6 py-2 md:justify-center items-center fixed top-3 w-full z-10 "
    >
      <nav className="hidden md:flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur  ">
        <Link
          href="#home"
          className={
            activeSection === "home"
              ? "nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : "nav-item"
          }
        >
          Home
        </Link>
        <Link
          href="#about"
          className={
            activeSection === "about"
              ? "nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : "nav-item"
          }
        >
          About
        </Link>
        <Link
          href="#projects"
          className={
            activeSection === "projects"
              ? "nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : "nav-item"
          }
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className={
            activeSection === "contact"
              ? "nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : "nav-item"
          }
        >
          Contact
        </Link>
      </nav>

      <div className="md:hidden flex items-center ">
        <button
          onClick={toggleMenu}
          className="text-2xl z-30 border border-white/15 p-2 rounded-full bg-white/10 backdrop-blur-lg"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, x: "100%" }}
          className="md:hidden fixed top-0 right-0 w-2/3 h-full rounded-l-3xl border border-white/15 bg-white/10 backdrop-blur-lg flex flex-col gap-5 items-center justify-center z-20"
        >
          <Link
            href="#home"
            className={
              activeSection === "home"
                ? "nav-item-sm bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : "nav-item-sm"
            }
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#about"
            className={
              activeSection === "about"
                ? "nav-item-sm bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : "nav-item-sm"
            }
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#projects"
            className={
              activeSection === "projects"
                ? "nav-item-sm bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : "nav-item-sm"
            }
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className={
              activeSection === "contact"
                ? "nav-item-sm bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : "nav-item-sm"
            }
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};
