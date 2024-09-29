import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <>
      <div className=" w-full ">
        <div className="overflow-hidden font-pop whitespace-nowrap  flex   ">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease:"linear", duration: 5 }}
            className=" text-9xl md:text-[17vw] lg:text-[15vw]  font-normal tracking-tighter  pr-16 text-white  leading-none"
          >
           Anas Khan
          </motion.h1>
          <motion.h1
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease:"linear", duration:5 }}
            className="text-9xl md:text-[17vw] lg:text-[15vw] font-normal tracking-tighter pr-9 text-white  leading-none"
          >
             Anas Khan
          </motion.h1>
        </div>
      </div>
    </>
  );
}

export default Marquee;
