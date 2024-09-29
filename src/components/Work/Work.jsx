import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ElemComponent = ({ src, title, subtitle, link }) => {
  const elemRef = useRef(null);
  const imgRef = useRef(null);
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
          start: 'top 90%', // when the top of the trigger hits 80% of the viewport height
          end: 'bottom 60%', // when the bottom of the trigger hits 20% of the viewport height
          scrub: 1, // smooth scrubbing
          // markers: true // enables markers for debugging
        }
      }
    );
  }, []);

  useEffect(() => {
    const elem = elemRef.current;

    const handleMouseMove = (event) => {
      if (window.innerWidth >= 1024) { // Apply animation only on larger screens
        const { clientX, clientY } = event;
        const { top, left } = elem.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;

        gsap.to(imgRef.current, {
          x: x - imgRef.current.width / 2,
          y: y - imgRef.current.height / 2,
          opacity: 1,
          ease: Power3.easeOut,
        });
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth >= 1024) { // Apply animation only on larger screens
        gsap.to(imgRef.current, {
          opacity: 0,
          ease: Power3.easeOut,
          duration: 0.5,
        });
      }
    };

    elem.addEventListener('mousemove', handleMouseMove);
    elem.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      elem.removeEventListener('mousemove', handleMouseMove);
      elem.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div id='work' className="lg:px-14 lg:py-16 lg:border-t lg:h-64 lg:w-full my-8 md:my-0 md:w-[46vw]" ref={elemRef}>
      <div className="relative" ref={scrollRef}>
        <div className="hidden lg:flex items-center justify-between">
          <h1 className="text-6xl font-rob font-medium">{title}</h1>
          <h1 className="text-xl font-rob tracking-tighter font-medium opacity-60">{subtitle}</h1>
        </div>
        <div className="w-full h-64 lg:h-full overflow-hidden">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              ref={imgRef}
              className="absolute lg:opacity-0 lg:w-1/3 lg:h-72 w-full h-full object-cover cursor-pointer"
              src={src}
              alt={title}
              style={{ objectFit: 'cover', transition: 'opacity 0.5s ease-out' }}
            />
          </a>
        </div>
      </div>
      <div className="border-b mb-2 lg:hidden lg:border-none border-slate-400">
        <h1 className="text-2xl font-rob px-2 py-3">{title}</h1>
      </div>
      <h1 className="text-xl lg:hidden lg:h font-rob px-2 opacity-70">{subtitle}</h1>
    </div>
  );
};

function Work() {
  const projects = [
    {
      src: "https://waqar-dev.netlify.app/assets/CWH-BPR-Qj7o.png",
      title: "CWH",
      subtitle: "Clone with dark/light mode",
      link: "https://anas-web-app.netlify.app/"
    },
    {
      src: "https://i.pinimg.com/564x/48/29/8d/48298d571e0b057659ab51f3407a619d.jpg",
      title: "Sports Web",
      subtitle: "For Local Sports Shop",
      link: "https://sportswebs.netlify.app/Inventory"
    },
    {
      src: "https://i.pinimg.com/236x/5b/0f/58/5b0f58a6a593d6976b80514d5cb70f0b.jpg",
      title: "OCHI Design",
      subtitle: "Animated Web Experiences",
      link: "https://anas-ochi-web-app.netlify.app/"
    },
    {
      src: "https://i.pinimg.com/736x/36/ac/be/36acbe78f99ee7f97711504a30d71674.jpg",
      title: "Todo App",
      subtitle: "Planner: Your Tasks, Your Way",
      link: "https://anas-todo-web-app.netlify.app/"
    },
    {
      src: "https://i.pinimg.com/236x/55/74/09/5574091db2ec19258096f654494b6b0f.jpg", 
      title: "Weather App",
      subtitle: "You can watch your current weather",
      link: "https://anas-weather-web-app.netlify.app/"
    },
  ];

  return (
      <div className="px-2 py-5 md:px-4 md:flex md:flex-wrap lg:px-20 lg:block lg:flex-nowrap md:gap-6 w-full mt-24 md:mt-10 lg:mt-0 sm:mt-0 justify-between items-center">
        {projects.map((project, index) => (
          <ElemComponent
            key={index}
            src={project.src}
            title={project.title}
            subtitle={project.subtitle}
            link={project.link}
          />
        ))}
      </div>
  );
}

export default Work;
