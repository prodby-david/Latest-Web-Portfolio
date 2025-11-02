"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ContactMe from "@/components/buttons/contactme";

export default function Home() {
  const texts = ["FULL STACK", "WEB DEVELOPER"];
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = deleting ? 50 : 100;

    const typingEffect = setTimeout(() => {
      if (!deleting && displayedText.length < currentText.length) {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      } else if (deleting && displayedText.length > 0) {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      } else if (!deleting && displayedText.length === currentText.length) {
        setTimeout(() => setDeleting(true), 1000); 
      } else if (deleting && displayedText.length === 0) {
        setDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(typingEffect);
  }, [displayedText, deleting, textIndex]);

  return (
    <div className="px-5 py-3">
      <section className="flex flex-col items-center text-center mt-15 px-5">

        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/about-img.jpg"
            alt="John David"
            width={120}
            height={120}
            className="rounded-full mb-1"
          />
          <h1 className="text-lg font-semibold mb-2 text-color-2">
            Hi, I'm John David 👋
          </h1>
        </div>

        <div className="text-3xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-color-3 to-color-2 bg-clip-text text-transparent mb-4">
          <h1 className="inline-block">{displayedText}</h1>
          <span className="inline-block w-1 h-8 sm:h-10 md:h-12 bg-color-2 ml-1 animate-pulse"></span>
        </div>

        <p className="text-md max-w-2xl text-color">
          I’m an aspiring Full Stack Web Developer. This portfolio showcases my
          journey, the projects I've been working on, and the knowledge gained
          along the way.
        </p>

        <div>
          <ContactMe />
        </div>
      </section>
    </div>
  );
}
