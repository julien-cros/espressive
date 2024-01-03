"use client";

import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import Titles from "@/components/titles";

export default function Home() {
  // const observer = new IntersectionObserver((entries) => {
  // 	entries.forEach((entry) => {
  // 		console.log(entry);
  // 		if (entry.isIntersecting) {
  // 			entry.target.classList.add("my-show");
  // 		}
  // 		else {
  // 			entry.target.classList.remove("my-show");
  // 		}
  // 	});
  // });

  // const hiddenElements = document.querySelectorAll(".my-hidden");
  // hiddenElements.forEach((el) => observer.observe(el));

  return (
    <main className="flex h-full w-full flex-col items-center">
      <div className="w-2/3 h-full pt-48 fixed">
        <div className="border-dashed border-[1px] border-black w-full h-[600px]">
          <div className="w-full h-[120px] flex items-center border-dashed border-b-[1px] border-black ">
            <p className="text-9xl font-black tracking-[-0.4rem]">The</p>
          </div>
          <div className="w-full h-[120px] flex items-center border-dashed border-b-[1px] border-black"></div>
          <div className="w-full h-[120px] flex items-center justify-end border-dashed border-b-[1px] border-black">
            <p className="text-right text-9xl font-black tracking-[-0.4rem] pr-2">
              Espresso
            </p>
          </div>
          <div className="w-full h-[120px] flex items-center justify-end border-dashed border-b-[1px] border-black "></div>
          <div className="w-full h-[120px]">
            <p className="text-9xl flex items-center font-black tracking-[-0.4rem]">
              Universe
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll z-10">
        {allPosts
          .sort((a, b) => compareDesc(a.createdAt, b.createdAt))
          .map((p) => (
            <Titles threshold={1} duration="300ms" x={0} y={0}>
              <Link key={p.title} href={p.url} className="flex">
                <div className="h-[870px] flex justify-center items-center w-2/3 pb-32 snap-start">
                  <h2 className="text-2xl">{p.title}</h2>
                </div>
              </Link>
            </Titles>
          ))}
      </div>
    </main>
  );
}

// h-screen flex justify-center items-center w-2/3 pb-32 snap-start
