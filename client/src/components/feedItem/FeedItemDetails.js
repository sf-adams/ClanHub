import React from "react";
import CommentList from "./comments/CommentList";
import FeedItemParagraph from "./FeedItemParagraph";

const FeedItemDetails = ({
  post,
  comments,
  createComment,
  deleteComment,
  updateComment,
}) => {
  const filteredComments = comments.filter((filtered) => {
    return filtered.post.id == post.id;
  });

  const spacedText = post.body
    .split("\n")
    .map((str, index) => <FeedItemParagraph key={index} str={str} />);

  return (
    <div className="post-page">
      <div className="post-details-container">
        <h3 className="post-details-header">{post.title}</h3>
        <p className="post-details-author">
          {post.user?.firstName} {post.user?.lastName}
        </p>
        <h4 className="post-details-description-title">Post description</h4>
        <p>{post.description}</p>
        <h4 className="post-details-body-title">Post Body</h4>
        <div className="post-body-text">{spacedText}</div>
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
