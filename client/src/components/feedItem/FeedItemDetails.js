import React from 'react';

const FeedItemDetails= ({post})=> {
  return (
      <div className="post-details-container">
          <h3 className="post-details-header">{post.title}</h3>
          <p>{post.user.firstName} {post.user.lastName}</p>
          <p>{post.description}</p>
      </div>
  );
}

export default FeedItemDetails;
