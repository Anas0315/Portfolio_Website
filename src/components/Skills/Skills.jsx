import React, { useRef, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineAnimation } from "react-icons/md";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 3, // Adjust duration as needed
        scrollTrigger: {
          trigger: element,
          // toggleActions:" pause ",
          start: 'top 80%', // when the top of the trigger hits 80% of the viewport height
          end: 'bottom 50%', // when the bottom of the trigger hits 20% of the viewport height
          scrub: 1, // smooth scrubbing
          // markers: true // enables markers for debugging
        }
      }
    );
  }, []);

  return (
    <>
      <div id="skills" ref={scrollRef} className=" w-full md:h-[100vh] lg:h-[60vh] overflow-hidden">
        <h1 className="text-center text-7xl pt-10 font-poet">Skills</h1>
        <div className="w-full flex flex-wrap items-center justify-center my-10 gap-16">
          <div className="lg:text-[7vw] text-8xl text-center text-[#66DBFB]">
            <FaReact />
            <h1 className="lg:text-2xl text-xl font-rob font-semibold text-black">
              React JS
            </h1>
          </div>
          <div className="lg:text-[7vw] text-8xl text-center text-[#FFD708]">
            <RiJavascriptFill />
            <h1 className="lg:text-2xl text-xl font-rob font-semibold text-black">
              JavaScript
            </h1>
          </div>
          <div className="lg:text-[7vw] text-8xl text-center text-[#1DC0CD]">
            <RiTailwindCssFill />
            <h1 className="lg:text-2xl text-xl font-rob font-semibold text-black">
              Tailwind CSS
            </h1>
          </div>
          <div className="lg:text-[7vw] text-8xl text-center text-[#FEA208]">
            <IoIosSettings />
            <h1 className="lg:text-2xl text-xl font-rob font-semibold text-black">
              Tech.SEO
            </h1>
          </div>
          <div className="lg:text-[7vw] text-8xl text-center text-[#12E54E]">
            <MdOutlineAnimation />
            <h1 className="lg:text-2xl text-xl font-rob font-semibold text-black">
              GSAP
            </h1>
          </div>
          <div className="lg:text-[7vw] text-8xl text-center text-[#265AEA]">
            <FaCss3Alt />
            <h1 className="lg:text-2xl text-xl font-rob font-semibold text-black">
              CSS
            </h1>
          </div>
          <div className="lg:text-[7vw] text-8xl ml-4 sm:ml-0 text-center text-[#F16A30]">
            <FaHtml5 />
            <h1 className="lg:text-2xl text-xl font-rob font-semibold text-black">
              HTML
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
