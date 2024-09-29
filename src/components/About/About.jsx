
import {useEffect,useRef} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
function About() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1, // Adjust duration as needed
        scrollTrigger: {
         trigger: element,
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
    <div id='about' ref={scrollRef} className='relative w-full sm:h-80 h-96 md:h-96  lg:h-74'>
    <article className='lg:px-24 px-6 w-full font-pop flex flex-wrap items-center  justify-between'>
     <p className=' md:text-4xl text-2xl w-full md:w-[60vw]'>"Bringing visions to life through pixels and code. Front-end web developer with a passion for building beautiful and user-friendly digital experiences."</p>
     <p className='lg:w-[17vw] md:w-[30vw] w-full mt-6 md:mt-0 font-medium'>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>
    </article>
    <div
    className='lg:w-40 w-36 h-36 lg:h-40 bg-[#212121] rounded-full p-2  absolute right-32 mx-4 my-2 flex justify-center flex-col items-center text-white text-xl px-10 hover:bg-[#2563ED]  hover:text-white font-semibold  cursor-pointer'>
       <a href="/Resume.pdf" download="Anas_Resume.pdf">
      <button>
        <p>Download</p>
        <p>Resume</p>
        </button>
        </a>
    </div>
    </div>
  </>
  )
}

export default About