"use client";

import { allPosts } from "contentlayer/generated";
import Render from "@/components/Render";
import React from "react";
import { useRouter } from "next/navigation";
import PrevNextPost from "@/components/PrevNextPost";

type PostPageProps = {
  params?: {
    slug?: string;
  };
};

export default async function PostPage({ params }: PostPageProps) {
  const post = allPosts.find(({ slug }) => slug === params?.slug);

	const router = useRouter();

	if (!post) {
		router.push('/404');
		return null;
	}

  return (
    <div className="w-full h-full flex flex-col">
			<div className="grid grid-cols-3 pt-16">
			<div className="flex justify-center items-center cursor-pointer" onClick={() => router.back()}>back</div>
      <div className="flex justify-center text-2xl md:text-5xl font-bold">
				<h2>espressive</h2>
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
			<PrevNextPost post={post.title}/>
    </div>
  );
}
 