import React from 'react'
import { IComment } from '../../entities/Comment'

interface Props {
	comment: IComment
}

export default function Comment({ comment: {email, body} }: Props) {
	return (
		<div className='p-4 rounded-md border bg-gray-900 border-gray-700 text-white'>
			<p className='text-base'>{email}</p>
			<hr className='border rounded-full my-2 border-gray-400' />
			<p className='text-sm'>{body}</p>
		</div>
	)
}
