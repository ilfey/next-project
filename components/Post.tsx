import Link from "next/link";
import { IPost } from "../entities/Post";
import Tag from "./Tag";

interface Props {
  post: IPost
}

export default function Post({post: {id, body, title}}: Props) {
	return (
		<Link href={`/posts/${id}`}>
			<div className='p-4 rounded-md border bg-teal-900 border-gray-400 text-white'>
				<h2 className='text-2xl'>{title}</h2>
				<p className='text-sm opacity-70'>{body}</p>
				<Tag tag='Tag'/>
			</div>
		</Link>
	)
}
