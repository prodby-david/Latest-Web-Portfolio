"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactMe from "@/components/buttons/contactme";

export default function Home() {
  return (
    <div className="px-5 py-3">
      <section className="flex flex-col items-center text-center mt-10 px-5">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src="/images/about-img.jpg"
            alt="John David"
            width={120}
            height={120}
            className="rounded-full mb-2 shadow-md"
          />
          <h1 className="text-lg font-semibold mb-2 text-color-2">
            Hi, I'm John David 👋
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-color-3 to-color-2 bg-clip-text text-transparent mb-4">
            <h1>FULL STACK</h1>
            <h1>WEB DEVELOPER</h1>
          </div>
          <p className="text-md max-w-2xl text-color opacity-90">
            I’m an aspiring Full Stack Web Developer. This portfolio showcases
            my journey, the projects I've been working on, and the knowledge
            gained along the way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <ContactMe />
        </motion.div>
      </section>
    </div>
  );
}
