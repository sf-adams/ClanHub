import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCommentForm = ({ post, createComment, handleModalToggle }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [upvotes, setUpvotes] = useState(0);
  const navigate  = useNavigate();

  const handleTitleChange = (ev) => {
    setTitle(ev.target.value);
  };

  const handleBodyChange = (ev) => {
    setBody(ev.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await createComment({
      hello: title,
      title: title,
      body: body,
      upvotes: upvotes,
      post: post,
    });
    window.location.reload()
  };

  return (
    <div className="new-comment-modal">
      <h3 className="new-comment-modal-title">New Comment</h3>

      <form
        action="comment"
        className="new-comment-form"
        onSubmit={handleSubmit}
      >
        <div className="new-form-comment-item">
          <label htmlFor="title">Comment title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            required
            placeholder="New comment title"
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-form-comment-item">
          <label htmlFor="body">Comment body:</label>
          <textarea
            id="body"
            name="body"
            value={body}
            required
            onChange={handleBodyChange}
          />
        </div>
        <div className="new-form-comment-item">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default NewCommentForm;
