"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence, animate } from "framer-motion";
import { allPosts } from "contentlayer/generated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";	

type TitleProps = {
  post: string;
};

const PrevNextPost = ({ post }: TitleProps) => {
  const postIndex = allPosts.findIndex(({ title }) => title === post);

  const [overLeft, setOverLeft] = React.useState(false);
  const [overRight, setOverRight] = React.useState(false);

  const prevPost = allPosts[postIndex - 1];
  const nextPost = allPosts[postIndex + 1];

  return (

	//  simple one with title in left and right

    <div className="h-full w-full fixed grid grid-cols-2 p-10">
      <div className="flex justify-start items-center">
        {prevPost?.title && (
          <Link
            href={prevPost.url}
            className="flex h-20 flex-row items-center"
            onMouseOver={() => setOverLeft(true)}
            onMouseLeave={() => setOverLeft(false)}
          >
            <motion.div
              className={`flex flex-row items-center`}
              key="prev-post-animation"
              initial={{ opacity: 1, x: -0 }}
              animate={
                overLeft ? { opacity: 1, x: 0 } : { opacity: 1, x: -280 }
              }
              transition={{
                duration: 0.5,
              }}
              exit={{ opacity: 1, x: -300, transition: { duration: 0.5 } }}
            >
              <p>{prevPost.title}</p>
              <FontAwesomeIcon
                className={`h-10 w-10 pl-5 ${
                  overLeft ? "rotate-180 transition" : ""
                }`}
                icon={faArrowLeft}
              />
            </motion.div>
          </Link>
        )}
      </div>

			{/* complicated one with hidden text */}

      <div className="flex flex-row justify-end items-center">
        {nextPost?.title && (
          <Link
            href={nextPost.url}
            className="flex h-20 flex-row items-center"
            onMouseOver={() => setOverRight(true)}
            onMouseLeave={() => setOverRight(false)}
          >
            <motion.div
              className={`flex flex-row items-center absolute right-0`}
              initial={{ opacity: 1, x: 0 }}
              animate={
                overRight ? { opacity: 1, x: -400 } : { opacity: 1, x: 0 }
              }
              transition={{
                duration: 0.5,
              }}
              key="next-post-animation"
            >
              <FontAwesomeIcon
                className={`h-10 w-10 pr-10 ${
                  overRight ? "rotate-180 transition" : ""
                }`}
                icon={faArrowRight}
              />
            </motion.div>
            <AnimatePresence>
              {overRight && (
                <motion.div
                  className="flex flex-row items-center"
                  key="next-post-animation"
                  initial={{ opacity: 1, x: 400 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                  }}
                  exit={{ opacity: 1, x: 400 }}
                >
                  <p className={`pl-2 ${overRight ? "block" : "hidden"}`}>
                    {nextPost.title}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PrevNextPost;
