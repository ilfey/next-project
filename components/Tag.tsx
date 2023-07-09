import React from 'react'

interface Props {
  tag: string
}

export default function Tag({tag} : Props) {
  return (
    <span className='border rounded-md bg-cyan-900 p-1 text-xs'>{tag}</span>
  )
}
