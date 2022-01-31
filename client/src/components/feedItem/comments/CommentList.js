import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

const CommentList = ({
  post,
  filteredComments,
  createComment,
  deleteComment,
  updateComment
}) => {
  const [toggleNoComments, setToggleNoComments] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (filteredComments.length == 0) {
      setToggleNoComments(true);
    }
  });

  const commentNodes = filteredComments.map((comment, index) => {
    return (
      <Comment
        post={post}
        comment={comment}
        key={index}
        updateComment={updateComment}
      />
    );
  });

  return (
    <>
      <div className="comment-list">{commentNodes}</div>
      
      {toggleNoComments ? (
        <div className="new-comment-wrapper">
          <p>
            There are no comments yet for this post. Be the first to create one
          </p>
        </div>
      ) : null}
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        New Comment
      </button>
      {modal ? (
        <NewCommentForm
          post={post}
          createComment={createComment}
          deleteComment={deleteComment}
          updateComment={updateComment}
        />
      ) : null}
    </>
  );
};

export default CommentList;
