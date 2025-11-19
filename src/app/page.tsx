"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/navbar/navbar";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import Qualifications from "@/components/sections/QualificationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import Projects from "@/components/sections/ProjectSection";

export default function Page() {
  
  useEffect(() => {
    AOS.init();
  }, [])



  return (
    <>
      <Navbar />
      <main>
        <section id="home"><HomeSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="qualifications"><Qualifications /></section>
        <section id="skills"><SkillsSection /></section>
        <section id="projects"><Projects /></section>
      </main>
    </>
  );
}
