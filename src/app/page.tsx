"use client";

import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <main className="flex h-full w-full flex-col items-center pb-10">
      <div className="h-full w-full flex justify-center mt-32 text-5xl font-bold">
        <h2>espressive</h2>
      </div>
      <div className="w-2/3 h-full mt-10">
        <div className="border-t-8 border-black w-full h-full">
          <div className="w-full h-[120px] flex items-center ">
            <p className="text-9xl font-black tracking-[-0.4rem]">The</p>
          </div>
          <div className="w-full h-[120px] border-t-8 border-black  flex items-center justify-end">
            <p className="text-right  text-9xl font-black tracking-[-0.4rem] pr-2">
              Espresso
            </p>
          </div>
          <div className="w-full h-[120px] flex items-center border-t-8 border-black ">
            <p className="text-9xl flex items-center font-black tracking-[-0.4rem]">
              Universe
            </p>
          </div>
          <div className="gap-4 pt-36">
            {allPosts
              .sort((a, b) => compareDesc(a.createdAt, b.createdAt))
              .map((p) => (
                <div key={p.title} className="p-10">
                  <div
                    className={"pl-10 border-t-2 border-black"}
                    key={p.title}
                  >
                    <Link href={p.url} className="">
                      <h2 className="text-2xl">{p.title}</h2>
                    </Link>
                    <h3 className="pr-10 text-slate-600 text-xl">
                      {p.updatedAt}
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
