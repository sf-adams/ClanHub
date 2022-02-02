import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";
import {IoCreateOutline} from 'react-icons/io5'

const CommentList = ({
  post,
  filteredComments,
  createComment,
  deleteComment,
  updateComment,
}) => {
  const [toggleNoComments, setToggleNoComments] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (filteredComments.length == 0) {
      setToggleNoComments(true);
    }
  });

  const handleModalToggle = () => {
    console.log("Hello");
    setModal(!modal);
  };

  const commentNodes = filteredComments.map((comment, index) => {
    return (
      <Comment
        post={post}
        comment={comment}
        key={index}
        updateComment={updateComment}
        handleModalToggle={handleModalToggle}
      />
    );
  });

  return (
    <>
      <div className="comment-list">
        {toggleNoComments ? (
          <div className="new-comment-wrapper">
            <p>
              There are no comments yet for this post. Be the first to create
              one
            </p>
          </div>
        ) : null}
        {commentNodes}
        <IoCreateOutline
          onClick={handleModalToggle}
          className="comment-button create-comment-button"
        />
      </div>

      {modal ? (
        <NewCommentForm
          post={post}
          createComment={createComment}
          deleteComment={deleteComment}
          updateComment={updateComment}
          handleModalToggle={handleModalToggle}
        />
      ) : null}
    </>
  );
};

export default CommentList;
