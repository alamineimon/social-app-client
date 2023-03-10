import React from 'react'
import Posts from '../Posts/Posts'
import SharedPost from '../PostShare/SharedPost'
import './PostSide.css'
const PostSide = () => {
  return (
   <div className="PostSide">
    <SharedPost/>
       <Posts/>
   </div>
  )
}

export default PostSide