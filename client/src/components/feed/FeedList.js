import React from "react";
import FeedItem from "./FeedItem";

const FeedList = ({
  posts,
  user,
  toggleEdit,
  handleToggleEdit,
  deletePost,
  putPost,
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
        putPost={putPost}
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
