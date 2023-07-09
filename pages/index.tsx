import Post from '@components/Post'
import { GetServerSideProps } from 'next/types'
import { IPost } from '../entities/Post'

interface Props {
	posts: Array<IPost>
}

export default function Index({ posts }: Props) {
	return (
		<main className='flex flex-col pt-8 mx-auto max-w-5xl gap-8'>
			{posts.map((post, index) => (
				<Post post={post} key={index} />
			))}
		</main>
	)
}

export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')

	if (!res.ok) {
		return {
			props: {
				posts: []
			}
		}
	}

	return {
		props: {
			posts: await res.json()
		}
	}
}
