'use client'

import React from 'react'
import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
					<Link href={prevPost.url}><FontAwesomeIcon className='h-10 w-10' icon={faArrowLeft}/></Link>
				}
			</div>
			<div className='flex justify-end items-center'>
				{nextPost?.title &&
					<Link href={nextPost.url}><FontAwesomeIcon className='h-10 w-10' icon={faArrowRight}/></Link>
				}
			</div>
		</div>
	)
}

export default PrevNextPost