"use client";

import { allPosts } from "contentlayer/generated";
import Render from "@/components/Render";
import React from "react";

type PostPageProps = {
  params?: {
    slug?: string;
  };
};

export default async function PostPage({ params }: PostPageProps) {
  const post = allPosts.find(({ slug }) => slug === params?.slug);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-full w-full pt-16 flex justify-center text-2xl md:text-5xl font-bold">
        <h2>espressive</h2>
      </div>
      <div className="pt-10 md:pt-20">
        <Render code={post?.body.code} />
      </div>
    </div>
  );
}
