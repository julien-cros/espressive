"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";
import { motion }	from "framer-motion";

type RenderProps = {
  code: string | undefined;
};

export default function Render({ code }: RenderProps) {
  if (!code) return null;

  const MDX = useMDXComponent(code);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-10 ">
			<motion.div
				key="posts-bottom-animation"
				initial={{ opacity: 0, y: "2%" }}
				animate={{ opacity: 1, y: "0%" }}
				transition={{ duration: 0.5 }}
			>
      <article className="prose lg:prose-lg z-10 ">
        <MDX />
      </article>
			</motion.div>
    </div>
  );
}
