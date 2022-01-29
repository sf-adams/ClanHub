import React from "react";

const FeedItem = ({ post }) => {


  return (
    <>
      <div className="feed-item-object">
        <h4 className="feed-item-object-title">{post.title}</h4>
        <p className="feed-item-object-description">{post.description}</p>
        {/* <p className="feed-item-object-author">{post.user.firstName} {post.user.lastName}
  </p> */}
      </div>
    </>
  );
};

export default FeedItem;
