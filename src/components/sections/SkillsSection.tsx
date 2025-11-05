"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {

 const skills = [
  { src: "/images/html.png", name: "HTML", desc: "Semantic structure and responsive layouts" },
  { src: "/images/css.png", name: "CSS", desc: "Flexbox, Grid, animations, and Tailwind CSS" },
  { src: "/images/js.png", name: "JavaScript", desc: "Modern ES6+, async/await, DOM manipulation" },
  { src: "/images/react.png", name: "React", desc: "Hooks, components, and state management" },
  { src: "/images/nodejs.png", name: "Node.js", desc: "REST APIs and backend logic" },
  { src: "/images/mongodb.png", name: "MongoDB", desc: "Schema design and Mongoose" },
  { src: "/images/expressjs.png", name: "Express.js", desc: "Middleware, routing, and server setup" },
  { src: "/images/nextjs.webp", name: "Next.js", desc: "SSR, API routes, and optimized builds" },
  { src: "/images/tsicon.png", name: "TypeScript", desc: "Type safety and scalable code" },
  { src: "/images/postman.svg", name: "Postman", desc: "API testing and debugging" },
  { src: "/images/git.png", name: "Git", desc: "Version control and collaboration" },
  { src: "/images/github.png", name: "GitHub", desc: "Repositories and workflows" },
  { src: "/images/java.png", name: "Java", desc: "Basic OOP concepts and syntax understanding" },
  { src: "/images/python.png", name: "Python", desc: "Fundamental scripting and beginner-level automation" },
  { src: "/images/mysql.png", name: "MySQL", desc: "Basic database management and SQL queries" },
];


  return (
    <div className="flex flex-col items-center justify-center px-5">

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center mt-25"
      >
        <h2 className="text-xl font-semibold text-color-3">Skills</h2>
        <p className="text-sm text-color-2">My Technical Skills</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center mt-5 py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex flex-col items-center hover:bg-color-2 rounded-full p-3 "
            >
              <Image
                src={skill.src}
                width={40}
                height={40}
                alt={`${skill.name} Logo`}
                style={{ height: "auto", width: "auto", maxWidth: "40px", maxHeight: "40px" }}
                className="cursor-pointer transition-transform duration-300"
              />

              <div className="hidden: md:block absolute -top-12 left-1/2 -translate-x-1/2 w-48 p-2 bg-color-3 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg text-center">

                {skill.desc}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-color-3"></div>

              </div>

            </motion.div>

            <p className="pt-2 text-color-2 text-sm">{skill.name}</p>

          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
