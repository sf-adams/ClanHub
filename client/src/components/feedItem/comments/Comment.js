import React, { useState } from "react";
import EditCommentForm from "./EditCommentForm";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import CommentService from "../../../services/CommentService";

const Comment = ({ comment, post, deleteComment, updateComment }) => {
  const [editModal, setEditModal] = useState(false);

  const handleClick = () => {
    console.log(comment);
  };

  const handleEditModalChange = () => {
    setEditModal(!editModal);
  };

  const handleDelete = async ()=> {
    await CommentService.removeComment(comment.id);
    window.location.reload();
  }

  return (
    <div className="comment-wrapper">
      <h3 className="comment-title">{comment.title}</h3>
      <button onClick={updateComment}>click me </button>
      <p className="comment-body">{comment.body}</p>
      {
        <div className="comment-crud-buttons-wrapper">
          <FiEdit3
            className="comment-edit-button"
            onClick={handleEditModalChange}
          />
          <MdDeleteOutline
            className="comment-edit-button"
            onClick={handleDelete}
          />
        </div>
      }
      {editModal ? (
        <EditCommentForm
          handleEditModalChange={handleEditModalChange}
          post={post}
          comment={comment}
          updateComment={updateComment}
        />
      ) : null}
    </div>
  );
};

export default Comment;
