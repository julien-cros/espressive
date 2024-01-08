"use client";

import React from "react";
import { motion } from "framer-motion";

const  Loader = () => {	
  return (
    <div className="fixed w-full h-full">
      <div className="w-full flex flex-col justify-center items-center mt-24 md:mt-28">
				<div className="w-3/4 lg:w-2/3 h-full mt-10">
						<div className="h-[46px] md:h-24 sm:pt-1 md:pt-3 lg:pt-1 lg:h-32">
							<p className=" text-center text-4xl md:text-7xl lg:text-9xl font-black lg:tracking-[-0.4rem]">The</p>
						</div>
						<div className=" h-[42px] md:h-20 lg:h-32">
							<p className="text-center text-4xl md:text-7xl lg:text-9xl font-black lg:tracking-[-0.4rem] pr-2">
								Espresso
							</p>
						</div>
						<div className=" h-10 md:h-20 lg:h-32">
							<p className=" text-center text-4xl md:text-7xl lg:text-9xl font-black lg:tracking-[-0.4rem]">
								Universe
							</p>
						</div>
				</div>
        <div className="w-1/4 md:w-1/6 h-3 md:h-4 mt-10 justify-center items-center rounded-full border-2 border-black ">
          <motion.div
            className="h-[8px] md:h-[12px] bg-black w-1/4 md:w-1/6 rounded-full"
            key="loading"
            initial={{ opacity: 1, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{
              duration: 3,
              delay: 0.5,
            }}
          ></motion.div>
        </div>
				<p>0%</p>
      </div>
    </div>
  );
}

export default Loader;
