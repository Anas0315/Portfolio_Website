import React, { useRef,useEffect } from "react";
import { TfiWorld } from "react-icons/tfi";
import { GoArrowDownRight } from "react-icons/go";
import Images from "./Images/mainPC.jpg";
import Marquee from "./Marquee";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import gsap from "gsap";
import {Link} from 'react-scroll'
import { useGSAP } from "@gsap/react";
import { useState } from "react";
function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // pcNavbar animation

  const navRef = useRef();
  useGSAP(() => {
    gsap.from(navRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      transition: "linear",
    });
  });
  useGSAP(() => {
    gsap.from(".liAnim li", {
      y: -50,
      opacity: 0,
      duration: 1,
      transition: "linear",
      stagger: 0.28,
    });
  });

  //  phone navbar animation
  const phoneRef = useRef();
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        phoneRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1, ease: "power4.inOut" }
      );
    } else {
      gsap.to(phoneRef.current, { x: '100%', opacity: 0, duration: 1, ease: "power4.inOut" });
    }
  }, [isOpen]);

  // menu animation
  const menuRef = useRef();
  useGSAP(() => {
    gsap.from(menuRef.current, {
      x: 300,
      duration: 1,
      opacity: 0,
      transition: "linear",
    });
  });

  // location div animation
  const loacatedRef = useRef();
  useGSAP(() => {
    gsap.from(loacatedRef.current, {
      x: -200,
      y: 300,
      duration: 1,
      opacity: 0,
      transition: "linear",
    });
  });

  // freelance animation

  useGSAP(() => {
    gsap.from(frelanceAnim.current, {
      x: -200,
      y: 300,
      duration: 1,
      opacity: 0,
      transition: "linear",
    });
  });
  const frelanceAnim = useRef();
  // marquee animation
  const marqueeAnim = useRef();
  useGSAP(() => {
    gsap.from(marqueeAnim.current, {
      y: 600,
      opacity: 0,
      duration: 1,
      transition: "linear",
    });
  });
  return (
    <main className="relative h-screen w-full ">
      <img className="h-full w-full  object-cover" src={Images} />
      <nav className="   w-full absolute  font-rob px-4 md:px-8 py-6 top-0 md:top-2 flex items-center justify-between text-white">
        <h1 ref={navRef} className=" font-medium text-xl md:text-2xl ">
          {" "}
          &copy;Anas.Dev{" "}
        </h1>
        {/* phone view  */}
        <button onClick={toggleMenu}>
          <div
            ref={menuRef}
            className=" phone flex items-center gap-1 md:hidden"
          >
            <div className="bg-white h-2 w-2 rounded-full"></div>
            <h1 className="font-medium text-xl">Menu</h1>
          </div>
        </button>

        {/* phone nav-bar  */}
        {isOpen && (
          <div
            ref={phoneRef}
            className="phone-nav absolute  w-full  md:hidden h-screen right-0  top-0 bg-[#1C1D20] z-40"
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            <div className="h-32 w-full">
              <button onClick={toggleMenu}>
                <div className="w-16 h-16 absolute flex items-center justify-center text-4xl right-8 top-10 rounded-full bg-blue-600">
                  <MdClose />
                </div>
              </button>
            </div>
            <h2 className="uppercase text-sm opacity-40 font-rob font-bold ml-6 ">
              navigation
            </h2>
            <div className="px-4">
              <div className="h-76 w-full my-6 py-8 px-2 border-t-[1px] border-b  border-slate-400  ">
                <ul className="flex  gap-4 flex-col  font-pop text-4xl ">
                <li
                >
            <Link 
            to="contact"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={1500} >Contact</Link>
          </li>
          <li>
            <Link 
            to="skills"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={1000} >Skills</Link>
          </li>
          <li>
            <Link 
             to="about"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={1000}>About</Link>
          </li>
          <li>
            <Link 
             to="work"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={1500} >Work</Link>
          </li>
                </ul>
              </div>
            </div>
            <div className=" mx-4 uppercase  text-white font-pop font-semibold flex gap-2 flex-col  py-4  sm:border-none border-b border-slate-400 ">
              <div>
                <h2 className="opacity-40 text-sm">Socials</h2>
              </div>
              <div className="flex items-center gap-7">
                <a
                  target="_blank"
                  href="https://www.instagram.com/anaskhanzai1/?next=%2F"
                >
                  Instagram
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100009063078677"
                >
                  Facebook
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/anas-khan0315/"
                >
                  Linkdin
                </a>
              </div>
            </div>
          </div>
        )}

        {/* laptops/pc view  */}
        <ul className=" liAnim hidden md:flex items-center gap-5  justify-center cursor-pointer text-xl ">
          <li>
            <Link 
            to="contact"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={1500} >Contact</Link>
          </li>
          <li>
            <Link 
            to="skills"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={1000} >Skills</Link>
          </li>
          <li>
            <Link 
             to="about"
            spy={true} 
            smooth={true} 
            offset={-150} 
            duration={1000}>About</Link>
          </li>
          <li>
            <Link 
             to="work"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={1500} >Work</Link>
          </li>
        </ul>
      </nav>
      <div
        ref={loacatedRef}
        className="   bg-[#212121] hidden md:flex justify-between items-center  md:w-72  md:h-28 rounded-tr-full rounded-br-full text-white  absolute left-0 top-72 location font-rob"
      >
        <h1 className="w-1/2 px-8 py-3 font-medium text-xl">
          Located in the Pakistan
        </h1>
        <div className="text-white  text-4xl px-9 ml-5  w-1/2">
          <div
            className="bg-gray-400 md:w-16 md:h-16   flex items-center 
          justify-center rounded-full"
          >
            <motion.div
              animate={{ rotate: -280 }}
              transition={{ repeat: Infinity, ease: "linear", duration: "6" }}
            >
              <TfiWorld />
            </motion.div>
          </div>
        </div>
      </div>
      <div
        ref={frelanceAnim}
        className="absolute bottom-4 right-16   md:right-10 lg:right-28 md:top-60 font-rob font-medium text-4xl text-white"
      >
        <GoArrowDownRight className="mb-4 md:mb-6 text-5xl" />

        <div>
          <h1 className="md:mb-2">Freelance</h1>
          <h1>Web Developer</h1>
        </div>
      </div>
      <div
        ref={marqueeAnim}
        className="absolute bottom-1/4  md:bottom-6 md:left-0  w-full"
      >
        <Marquee />
      </div>
    </main>
  );
}

export default Main;
