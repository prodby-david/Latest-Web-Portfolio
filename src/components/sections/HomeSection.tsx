
import Image from "next/image";
import ContactMe from "@/components/buttons/contactme";

export default function Home() {

  
  return (
    <div className="px-5 py-3">
      <section className="flex flex-col items-center text-center mt-10 px-5">

        <div className="flex flex-col items-center justify-center mt-25">
          <Image
            src="/images/about-img.jpg"
            alt="John David"
            width={100}
            height={100}
            className="rounded-full mb-2 shadow-md"
            data-aos="fade-down"
            data-aos-duration="1500"

          />
          <h1 className="text-lg font-semibold mb-2 text-color-2"
          data-aos="fade-down"  
          data-aos-duration="1800">
            Hi, I'm John David 👋
          </h1>
        </div>

        <div>
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-color-3 to-color-2 bg-clip-text text-transparent mb-4"
          data-aos="fade-down"  
          data-aos-duration="2100">
            <h1>FULL STACK</h1>
            <h1>WEB DEVELOPER</h1>
          </div>
          <p className="text-md max-w-2xl text-color opacity-90"
          data-aos="fade-up"  
          data-aos-duration="2400">
            I’m an aspiring Full Stack Web Developer. This portfolio showcases
            my journey, the projects I've been working on, and the knowledge
            gained along the way.
          </p>
        </div>

        <div data-aos="fade-up"  
          data-aos-duration="2800">
          <ContactMe />
        </div>
      </section>
    </div>
  );
}
