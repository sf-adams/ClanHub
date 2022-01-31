import React, { useState, useEffect } from "react";
import FeedItemDetails from "../components/feedItem/FeedItemDetails";

const FeedItemContainer = ({
  posts,
  comments,
  createComment,
  deleteComment,
  updateComment,
}) => {
  const feedNodes = posts.map((post, index) => {
    if (post.id == window.location.href.at(-1)) {
      return (
        <FeedItemDetails
          post={post}
          key={index}
          comments={comments}
          createComment={createComment}
          deleteComment={deleteComment}
          updateComment={updateComment}
        />
      );
    }
  });

  return (
    <>
      <div className="below">{feedNodes}</div>
     
    </>
  );
};

export default FeedItemContainer;
