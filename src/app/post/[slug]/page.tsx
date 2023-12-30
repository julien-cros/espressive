import { allPosts } from "contentlayer/generated";
import Render from "@/components/render";
import React from "react";

type PostPageProps = {
	params?: {
	  slug?: string;
	};
  };


export default async function PostPage({ params } : PostPageProps) {
	const post = allPosts.find(({ slug }) => slug === params?.slug);
  
	return (
	  <div className="w-full flex flex-col">
			<p className="flex font-bold text-3xl h-full justify-center">
				{post?.title}
			</p>
			<Render code={post?.body.code} />
	  </div>
	);
  }