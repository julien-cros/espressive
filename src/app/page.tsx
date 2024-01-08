"use client";

import Loader from "@/components/Loader";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 5000);
  // });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="flex h-full w-full flex-col items-center pb-4 md:pb-10 mt-16">
          <div className="h-full w-full flex justify-center text-2xl md:text-5xl font-bold">
            <h2>espressive</h2>
          </div>
          <div className="w-3/4 lg:w-2/3 h-full mt-10">
            <div className="border-t-4 md:border-t-8 border-black w-full h-full">
              <div className="w-full h-10 md:h-20 lg:h-[120px] flex items-center ">
                <p className="text-4xl md:text-7xl lg:text-9xl font-black lg:tracking-[-0.4rem]">
                  The
                </p>
              </div>
              <div className="w-full h-10 md:h-20  lg:h-[120px] border-t-4 md:border-t-8 border-black  flex items-center justify-end">
                <p className="text-right text-4xl md:text-7xl lg:text-9xl font-black lg:tracking-[-0.4rem] pr-2">
                  Espresso
                </p>
              </div>
              <div className="w-full h-10 md:h-20  lg:h-[120px]flex items-center border-t-4 md:border-t-8 border-black ">
                <p className="text-4xl md:text-7xl lg:text-9xl flex items-center font-black lg:tracking-[-0.4rem]">
                  Universe
                </p>
              </div>
              <motion.div
								key="loading"
								initial={{ opacity: 0, y: "10%" }}
								animate={{ opacity: 1, y: "0%" }}
								transition={{
									duration: 1,
								}}
							>
                <div className="gap-4 pt-10 md:pt-36">
                  {allPosts
                    .sort((a, b) => compareDesc(a.createdAt, b.createdAt))
                    .map((p) => (
                      <div key={p.title} className="pt-4 md:p-10">
                        <div
                          className={"pl-2 md:pl-10 border-t-2 border-black"}
                          key={p.title}
                        >
                          <Link href={p.url} className="">
                            <h2 className="text-md md:text-2xl">{p.title}</h2>
                          </Link>
                          <h3 className=" text-slate-600 text-sm md:text-xl">
                            {p.updatedAt}
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
