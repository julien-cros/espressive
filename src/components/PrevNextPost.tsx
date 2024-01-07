'use client'

import React from 'react'
import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

type TitleProps = {
	post: string
}

const PrevNextPost = ({ post } : TitleProps) => {

	const postIndex = allPosts.findIndex(({ title }) => title === post)
	
	const prevPost = allPosts[postIndex - 1]
	const nextPost = allPosts[postIndex + 1]

	console.log(prevPost)
	console.log(nextPost)

	return (
		<div className='h-full w-full fixed grid grid-cols-2 p-10'>
			<div className='flex justify-start items-center'>
				{prevPost?.title && 
					<Link className='z-10 cursor-pointer' href={prevPost.url}>prev</Link>
				}
			</div>
			<div className='flex justify-end items-center'>
				{nextPost?.title &&
					<Link className=' cursor-pointer' href={nextPost.url}>next</Link>
				}
			</div>
		</div>
	)
}

export default PrevNextPost