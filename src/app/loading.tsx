"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed w-full h-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h3 className="text-4xl md:text-8xl text-center font-black pb-4 whitespace-pre">
          The espresso
          <br /> Universe
        </h3>
        <div className="w-1/4 md:w-1/6 h-3 md:h-4 justify-center items-center rounded-full border-2 border-black">
          <motion.div
            onAnimationStart={() => console.log("start")}
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
