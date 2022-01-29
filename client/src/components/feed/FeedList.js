import React from "react";
import FeedItem from "./FeedItem";

const FeedList = ({
  posts,
  user,
  toggleEdit,
  handleToggleEdit,
  deletePost,
}) => {
  const postNodes = posts.map((post, index) => {
    return (
      <FeedItem
        key={post.id}
        post={post}
        posts={posts}
        user={user}
        handleToggleEdit={handleToggleEdit}
        deletePost={deletePost}
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
