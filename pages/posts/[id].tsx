import Comment from '@components/posts/Comment'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React from 'react'
import { IComment } from '../../entities/Comment'

interface Props {
	comments: Array<IComment>
}

export default function Post({ comments }: Props) {
	return (
		<main className='flex flex-col pt-8 mx-auto max-w-5xl gap-8'>
			<section className='rounded-md h-96 bg-gray-700 p-4'>
				<h2 className='text-2xl mb-4 text-bold'>Title</h2>
				<p className=''>... article ...</p>
			</section>
			<section className=''>
				<h2 className='text-xl my-4 text-bold text-center'>Comments</h2>
				<div className='flex flex-col gap-8'>
					{comments.map((comment, index) => (
						<Comment comment={comment} key={index} />
					))}
				</div>
			</section>
		</main>
	)
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }: GetServerSidePropsContext) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params!!.id}/comments`)

	if (!res.ok) {
		return {
			props: {
				comments: []
			}
		}
	}

	return {
		props: {
			comments: await res.json()
		}
	}
}
