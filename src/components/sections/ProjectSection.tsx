import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  stackUsed: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title:
        "HanaPark: Smart Web App Parking Availability and Reservation System",
      description:
        "A real-time parking slot management app built with MERN (MongoDB, Express.js, React, Node.js) for a school campus.",
      image: "/images/hanapark.jpg",
      url: "https://hanapark.online",
      stackUsed: [
        "React",
        "Express.js",
        "MongoDB",
        "Node.js",
        "Tailwind CSS",
        "Socket.IO",
      ],
    },
    {
      title:
        "Ovenly Hazel: A Digital Treat For Cookie and Edible Dough Lovers",
      description:
        "A responsive e-commerce website for a cookie business using MERN and Tailwind CSS for our school project.",
      image: "/images/ovenlyhazel.jpg",
      url: "https://ovenlyhazel.vercel.app",
      stackUsed: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">

      <div 
      className="text-center my-5"
      data-aos="fade-down"  
      data-aos-duration="1800"
      >
        <h2 className="text-3xl font-semibold text-color-3">Projects</h2>
        <p className="text-sm text-color-2">Some of my deployed works</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">

        {projects.map((project, index) => (

          <div
            key={index}
            className="rounded-xl shadow-sm shadow-color-3 p-4 flex flex-col items-center text-center transition-all duration-300"
            data-aos="fade-up"  
          data-aos-duration="1800"
          >

            <div className="w-full h-48 relative rounded-lg overflow-hidden">

              <Image
                src={project.image}
                alt={project.title}
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />

            </div>

             <div className="mt-4 flex flex-wrap justify-center gap-2">

              {project.stackUsed.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-color-2/10 border border-color-2/40 text-color-2"
                >
                  {tech}
                </span>
              ))}

            </div>

            <h3 className="text-lg font-semibold text-color-3 mt-4">
              {project.title}
            </h3>

            <p className="text-sm text-color-2 mt-2">
              {project.description}
            </p>

            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-color-3 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-color-2 transition-colors duration-300"
            >
              View Project
            </Link>

           
          </div>
        ))}
      </div>
    </div>
  );
}
