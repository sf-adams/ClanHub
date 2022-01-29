import React from "react";
import FeedItem from "./FeedItem";

const FeedList = ({ posts, user, toggleEdit, handleToggleEdit }) => {
  const postNodes = posts.map((post, index) => {
    return (
      <FeedItem
        key={post.id}
        post={post}
        posts={posts}
        user={user}
        toggleEdit={toggleEdit}
        handleToggleEdit={handleToggleEdit}
      />
    );
  });

  return (
    <>
      <div>{postNodes}</div>
    </>
  );
};

export default FeedList;
