import React from 'react'
import { allPosts } from "contentlayer/generated"
import Link from 'next/link'

const List = () => {
  return (
	<div>
		  {allPosts
        .map((p) => (
          <Link key={p.title} href={`/blog/${p.slug}`} className="w-full">
            <div className="flex flex-col space-y-1">
              <h2 className="text-2xl font-serif font-bold">{p.title}</h2>
              <p className="text-sm font-bold text-neutral-500">{p.date}
              </p>
            </div>
          </Link>
        ))}
	</div>
  )
}

export default List