"use client";

import { AboutSection } from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import {SnackbarProvider} from "notistack"
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  return (
    <SnackbarProvider 
        anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
        
      }}
      maxSnack={1}
    >
      <div>
      <SmoothCursor />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Contact/>
      <Footer />
      </div>
    </SnackbarProvider>
  );
}
