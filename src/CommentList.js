import React from 'react'
import Comment from './Comment'

export default function  CommentList({comments}) {
  console.log(comments)
  const commentsElements = comments.map((comment) =>  <li key={comment.id}><Comment comment={comment} /></li> )

  return (
    <ul>
      {commentsElements}
    </ul>
  )
}