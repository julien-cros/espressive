"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";

type RenderProps = {
  code: string  | undefined;
};

export default function Render({ code }: RenderProps) {

	if (!code) return null;

  const MDX = useMDXComponent(code);

  return (
    <article className="h-full w-full mt-40">
      <MDX />
    </article>
  );
}