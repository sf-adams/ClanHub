import React from "react";
import FeedItem from "./FeedItem";

const FeedList = ({
  posts,
  user,
  toggleEdit,
  handleToggleEdit,
  deletePost,
  updatePost
}) => {
  const postNodes = posts.map((post, index) => {
    return (
      <FeedItem
        key={index}
        post={post}
        posts={posts}
        user={user}
        handleToggleEdit={handleToggleEdit}
        deletePost={deletePost}
        updatePost={updatePost}
      />
    );
  });

  return (
    <>
      <div className="feed-list">{postNodes}</div>
    </>
  );
};

export default FeedList;
