import React, {useState} from "react";

const EditCommentForm = ({ comment, post, updateComment }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [upvotes, setUpvotes] = useState(comment.upvotes);

  const handleTitleChange = (ev) => {
    setTitle(ev.target.value);
  };

  const handleBodyChange = (ev) => {
    setBody(ev.target.value);
  };

  const updatePostData = () => {
      updateComment({
          id: comment.id,
          title: title,
          body: body,
          upvotes: comment.upvotes,
          post: post
      })
  };

  return (
    <div className="comment-edit-modal">
      <h3 className="comment-edit-title">Edit Comment</h3>
      <div className="comment-edit-form">
        <div className="edit-form-comment-item">
          <label htmlFor="title">Comment title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            required
            placeholder={comment.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="edit-form-comment-item">
          <label htmlFor="body">Comment body</label>
          <input
            type="text"
            id="body"
            name="body"
            value={body}
            required
            placeholder={comment.body}
            onChange={handleBodyChange}
          />
        </div>
        <button onClick={updatePostData}> Update Comment</button>
      </div>
    </div>
  );
};

export default EditCommentForm;
