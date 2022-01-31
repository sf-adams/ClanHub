import React from "react";
import EditCommentForm from "./EditCommentForm";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import CommentService from '../../../services/CommentService'

const Comment = ({ comment, post, deleteComment, updateComment }) => {
  const handleClick = () => {
    console.log(comment);
  };

  return (
    <div className="comment-wrapper">
      <h3 className="comment-title">{comment.title}</h3>
      <button onClick={updateComment}>click me </button>
      <p className="comment-body">{comment.body}</p>
      {
        <div className="comment-crud-buttons-wrapper">
          <FiEdit3 className="comment-edit-button" />
          <MdDeleteOutline
            className="comment-edit-button"
            onClick={() => {
              CommentService.removeComment(comment.id);
            }}
          />
        </div>
      }
      <EditCommentForm
        post={post}
        comment={comment}
        updateComment={updateComment}
      />
    </div>
  );
};

export default Comment;
