import React, { useState } from "react";
import UserService from "../../services/UserService";

import { Button, Modal, Form } from "react-bootstrap";

const FeedNewPostPopUp = ({
  posts,
  createPost,
  loggedIn,
  handleReset,
}) => {
  const [categoryType, setCategoryType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [upvotes, setUpvotes] = useState(0);
  const filteredArray = [];

  // This gets all the category types that there are
  const filteredPosts = posts.map((post) => {
    filteredArray.push(post.categoryType);
    return filteredArray;
  });

  // This function gets all the unique values form the array.
  const unique = [...new Set(filteredArray)];

  const uniqueAndFiltered = unique.map((value, index) => {
    return (
      <option value={value} key={index}>
        {value}
      </option>
    );
  });

  const getTime = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const today = new Date();
    return today.toLocaleDateString("en-UK", options);
  };

  const handleCategoryChange = (ev) => {
    setCategoryType(ev.target.value);
  };

  const handleTitleChange = (ev) => {
    setTitle(ev.target.value);
  };

  const handleDescriptionChange = (ev) => {
    setDescription(ev.target.value);
  };

  const handleBodyChange = (ev) => {
    setBody(ev.target.value);
  };

  const resetValues = () => {
    document.getElementById("new-post-category").value = "";
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await createPost({
      categoryType: categoryType,
      title: title,
      description: description,
      body: body,
      time: getTime(),
      upvotes: upvotes,
      user: loggedIn,
    });
    resetValues();
    setCategoryType("");
    setTitle("");
    setDescription("");
    handleReset();
  };

  return (
    <div
      className="feed-container-new-post-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="feed-container-new-post-modal-title">New Post title</h3>

      <form action="POST" className="new-post-form" onSubmit={handleSubmit}>
        <div className="new-form-post-item">
          <label htmlFor="new-post-category">Select a Category</label>
          <select
            id="new-post-category"
            defaultValue=""
            onChange={handleCategoryChange}
          >
            <option value="">Select an option</option>
            {uniqueAndFiltered}
          </select>
        </div>
        <div className="new-form-post-item">
          <label htmlFor="title">Post title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            required
            placeholder="New post title"
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-form-post-item">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            required
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="new-form-post-item">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            value={body}
            required
            onChange={handleBodyChange}
          />
        </div>
        <div className="new-form-post-item">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default FeedNewPostPopUp;
