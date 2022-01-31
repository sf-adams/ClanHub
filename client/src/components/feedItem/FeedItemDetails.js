import React from 'react';
import CommentList from './comments/CommentList'

const FeedItemDetails = ({
  post,
  comments,
  createComment,
  deleteComment,
  updateComment
}) => {
  const filteredComments = comments.filter((filtered) => {
    return filtered.post.id == post.id;
  });

  const spacedText = post.body.split("\n").map((str) => (
    <>
      <p>{str}</p>
      <br />
    </>
  ));


  const handleClick = ()=> {
    console.log(spacedText);
  }
  // const commentNodes = filteredComments.map((comment)=> {
  //   return
  // })

  return (
    <div className="post-page">
      <div className="post-details-container">
        <h3 className="post-details-header">{post.title}</h3>
        <button onClick={handleClick}>click me</button>
        <p>
          {post.user?.firstName} {post.user?.lastName}
        </p>
        <p>{post.description}</p>
        <div>{spacedText}</div>
      </div>
      <CommentList
        filteredComments={filteredComments}
        createComment={createComment}
        deleteComment={deleteComment}
        updateComment={updateComment}
        post={post}
      />
    </div>
  );
};

export default FeedItemDetails;
