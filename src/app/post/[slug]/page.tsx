"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PrevNextPost from "@/components/PrevNextPost";
import { allPosts } from "contentlayer/generated";
import Render from "@/components/Render";
import notFound from "./not-found";
import Link from "next/link";
import React from "react";


type PostPageProps = {
  params?: {
    slug?: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find(({ slug }) => slug === params?.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="grid grid-cols-3 pt-16 z-10">
        <div className="flex justify-center items-center ">
          <Link href={'/'}
            className="h-10 w-10 cursor-pointer hover:scale-105 active:scale-95 transition duration-75 ease-out font-semibold text-base lg:text-lg flex flex-row items-center"
          >
						<FontAwesomeIcon icon={faArrowLeft}  className="pr-1 h-4 w-4 "/>
          	home
          </Link>
        </div>
        <div className="flex justify-center text-2xl md:text-5xl font-bold">
          <Link href={'/'}>espressive</Link>
        </div>
      </div>
      <div className="h-full w-full pt-16 flex justify-center text-3xl md:text-5xl font-bold">
        <h3 className="pl-10 md:pl-0">{post?.title}</h3>
      </div>
      <div className="pt-10 md:pt-20">
        <Render code={post?.body.code} />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h4 className="py-10 ml-96">{post?.updatedAt}</h4>
      </div>
      <PrevNextPost post={post.title} />
    </div>
  );
}
