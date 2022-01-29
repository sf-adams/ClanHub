import React from "react";
import FeedEditPostPopUp from "./FeedEditPostPopUp";

const FeedItem = ({ post, posts, user, toggleEdit, handleToggleEdit }) => {
  const handleCLick = () => {
    console.log(post.user.email);
    console.log(user.email);
  };

  return (
    <>
      <div className="feed-item-object">
        <h4 className="feed-item-object-title">{post.title}</h4>
        <p className="feed-item-object-description">{post.description}</p>
        <p className="feed-item-object-author">
          {post.user?.firstName} {post.user?.lastName}
        </p>
        {user.email == post.user?.email ? (
          <button onClick={handleCLick}>Edit</button>
        ) : null}
        {toggleEdit?<FeedEditPostPopUp
          post={post}
          posts={posts}
          toggleEdit={toggleEdit}
          handleToggleEdit={handleToggleEdit}
        />:null}
      </div>
    </>
  );
};

export default FeedItem;
