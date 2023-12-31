"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";

type RenderProps = {
  code: string | undefined;
};

export default function Render({ code }: RenderProps) {
  if (!code) return null;

  const MDX = useMDXComponent(code);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-10 ">
      <article className="prose lg:prose-lg z-10 ">
        <MDX />
      </article>
    </div>
  );
}
