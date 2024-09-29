import React, { useEffect, useState } from "react";
import Images from "../Main/Images/mainPC.jpg";
// import {Link} from 'react-router-dom'
function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <footer
        id="contact"
        className="w-full h-screen sm:h-[80vh] md:h-screen md:py-20 bg-[#1C1D20] px-4 py-8 md:px-40 "
      >
        <div className="w-full md:h-44 lg:h-1/2 h-[21vh]  border-b ">
          <div className=" flex items-center gap-3 lg:gap-7  ">
            <div className="lg:w-[7vw] md:w-24 md:h-24 w-14 h-14 lg:h-[15vh]  overflow-hidden rounded-full">
              <img className="object-cover w-full h-full" src={Images} alt="" />
            </div>
            <h1 className=" text-5xl lg:text-[6vw] md:text-[7vw]  text-white font-pop tracking-tight">
              Let's work
            </h1>
          </div>
          <h1 className="text-5xl lg:text-[6vw] md:text-[7vw]  text-white font-pop tracking-tight">
            togehter
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 font-pop font-semibold  mt-11 items-center">
          <div className=" md:px-10 outline outline-1 hover:bg-[#2563EB] outline-slate-400   w-full lg:w-80 py-5 rounded-full cursor-pointer  ">
            <h2 className="text-white text-center text-lg">
              <a href="mailto:anaskhanzai1@gmail.com">anaskhanzai1@gmail.com</a>
            </h2>
          </div>
          <div className="px-10 outline outline-1 hover:bg-[#2563EB] outline-slate-400  w-full lg:w-80 py-5 rounded-full cursor-pointer  ">
            <h2 className="text-white text-center text-lg">
              <a target="_blank" href="https://wa.me/03151105376">+92 3151105376</a>
            </h2>
          </div>
        </div>
        <div className=" md:mt-32 mt-10 flex  flex-wrap   items-center justify-between">
          <div className=" uppercase  text-white font-pop font-semibold flex gap-2 flex-col  py-4 md:py-0 sm:border-none border-b ">
            <div>
              <h2 className="opacity-60">Socials</h2>
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
          <div className="flex flex-col justify-between items-center mt-8 sm:mt-0 gap-2">
            <div className=" text-white gap-28  font-pop font-bold opacity-60 uppercase flex  justify-between items-center">
              <h2>version</h2>
              <h2>local time</h2>
            </div>
            <div className=" text-white w-full gap-20 font-pop font-bold flex justify-between  items-center">
              <p>2024 © Edition</p>
              <p>{time.toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
