"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
    //  left side

    <div className="h-full w-full fixed grid grid-cols-2">
      <div className="flex justify-start items-center">
        {prevPost?.title && (
          <Link
            href={prevPost.url}
            className="flex h-20 flex-row items-center"
            onMouseOver={() => setOverLeft(true)}
            onMouseLeave={() => setOverLeft(false)}
          >
            <motion.div
              className={`flex flex-row items-center p-10 md:hidden lg:block`}
              key="prev-post-animation"
              initial={{ opacity: 0, x: -500 }}
              animate={
                overLeft ? { opacity: 1, x: 0 } : { opacity: 0, x: -500 }
              }
              transition={{
                duration: 0.5,
              }}
              exit={{ opacity: 1, x: -300, transition: { duration: 0.5 } }}
            >
              <p>{prevPost.title}</p>
            </motion.div>

            <motion.div
							className="flex flex-row items-center fixed"
							key="prev-post-arrow-animation"
							initial={{ opacity: 0, x: -10 }}
							animate={
								overLeft ? { opacity: 1, x: -20, } : { opacity: 1, x: 0}
							}
							transition={{
								duration: 0.5,
							}}
						>
              <FontAwesomeIcon
                className="h-5 w-5 md:h-10 md:w-10 pl-5 justify-center items-center bg-gray-100 bg-opacity-75 rounded-sm"
                icon={faArrowLeft}
              />
            </motion.div>
          </Link>
        )}
      </div>

      {/* right side*/}

      <div className="flex flex-row justify-end items-center">
        {nextPost?.title && (
          <Link
            href={nextPost.url}
            className="flex h-20 flex-row items-center"
            onMouseOver={() => setOverRight(true)}
            onMouseLeave={() => setOverRight(false)}
          >
            <motion.div
              className={`flex flex-row items-center justify-end absolute right-0`}
              key="next-post-arrow-animation"
              initial={{ opacity: 0, x: 10 }}
              animate={
                overRight ? { opacity: 1, x: 20 } : { opacity: 1, x: 0 }
              }
              transition={{
                duration: 0.5,
              }}
            >
              <FontAwesomeIcon
                className="h-5 w-5 md:h-10 md:w-10 pr-5 justify-end items-center bg-gray-100 bg-opacity-75 rounded-sm"
                icon={faArrowRight}
              />
            </motion.div>

						<motion.div
							className="flex flex-row items-center p-10 md:hidden lg:block"
							key="next-post-animation"
							initial={{ opacity: 0, x: 400 }}
							animate={
								overRight ? { opacity: 1, x: 0 } : { opacity: 0, x: 380 }
							}
							transition={{
								duration: 0.5,
							}}
						>

              <p>{nextPost.title}</p>
						</motion.div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PrevNextPost;
