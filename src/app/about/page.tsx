import Image from "next/image";
import ShowResume from "@/components/buttons/resume";

export default function About() {
  return (
    <>
      <div className="px-5 py-2">
        <div className="text-center m-5">
          <h1 className="text-2xl font-semibold text-color-2">About Me</h1>
          <p className="text-sm text-color">Knowing more about me</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around gap-10 mt-5">

          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-100 shrink-0">
            <Image
              src="/images/about-img.jpg"
              alt="About John David"
              width={350}
              height={350}
              className="object-cover w-full h-full rounded-md shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-around items-center text-color text-sm md:text-base text-justify max-w-md">
            <p className='mt-2 md:mt-1'>
              Hi there! I'm John David, an Information Technology student at STI
              College Global City who loves solving problems through technology.
              My love for coding started when I was in my 2nd year of college. I
              saw an inspirational video clip on TikTok about software engineering,
              and since then, I've been excited about technology.
            </p>
            <p className='mt-2 md:mt-1'>
              Right now, I'm learning web development — working on projects that
              challenge me and help me improve my skills. When I'm not coding, I
              enjoy playing guitar, going outside for fresh air, playing online
              games, and watching tech videos.
            </p>
            <p className='mt-2 md:mt-1'>
              I'm looking forward to the opportunities ahead and excited to keep
              learning and growing as a student and future tech professional.
            </p>
            <div className="mt-1">
              <ShowResume />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
