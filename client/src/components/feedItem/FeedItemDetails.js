import React from 'react';
import CommentList from './comments/CommentList'

const FeedItemDetails= ({post, comments})=> {


  const filteredComments = comments.filter((filtered)=> {
    return filtered.post.id == post.id;
  })

  // const commentNodes = filteredComments.map((comment)=> {
  //   return 
  // })

  return (
    <div className="post-page">
      <div className="post-details-container">
        <h3 className="post-details-header">{post.title}</h3>
        <p>
          {post.user.firstName} {post.user.lastName}
        </p>
        <p>{post.description}</p>
        <p>{post.body}</p>
      </div>
      <CommentList filteredComments ={filteredComments}/>
    </div>
  );
}

export default FeedItemDetails;
