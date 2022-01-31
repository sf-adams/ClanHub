import React from 'react';

const FeedItemDetails= ({post, comments})=> {


  const handleClick = ()=> {
    console.log(comments)
  }


  return (
      <div className="post-details-container">
          <h3 className="post-details-header">{post.title}</h3>
          <p>{post.user.firstName} {post.user.lastName}</p>
          <p>{post.description}</p>
          <p>{post.body}</p>
          <button onClick = {handleClick}>click me </button>
      </div>
  );
}

export default FeedItemDetails;
