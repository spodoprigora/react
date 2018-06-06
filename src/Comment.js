import React from 'react'


//function components
export default function Comment({comment}) {
   return (
    <div>
      <p>{comment.text}</p>
      <span><b>{comment.user}</b></span>
    </div>
  )
}