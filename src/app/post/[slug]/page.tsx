"use client"

import { allPosts } from "contentlayer/generated";
import Render from "@/components/Render";
import React from "react";
// import Loading from "@/app/loading";

type PostPageProps = {
	params?: {
	  slug?: string;
	};
  };


export default async function PostPage({ params } : PostPageProps) {
	const post = allPosts.find(({ slug }) => slug === params?.slug);
  
	return (
	  <div className="w-full h-full flex flex-col mt-40">
			<p className="flex font-bold text-3xl h-full justify-center">
				{post?.title}
			</p>
			<Render code={post?.body.code} />
	  </div>
	);
  }