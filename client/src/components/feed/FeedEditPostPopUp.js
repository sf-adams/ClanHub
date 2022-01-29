import React, { useState } from "react";

const FeedEditPostPopUp = ({ post, posts, toggleEdit, handleToggleEdit }) => {
  const [categoryType, setCategoryType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const filteredArray = [];

  const handleCategoryChange = (ev) => {
    setCategoryType(ev.target.value);
  };

  const handleTitleChange = (ev) => {
    setTitle(ev.target.value);
  };

  const handleDescriptionChange = (ev) => {
    setDescription(ev.target.value);
  };

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

  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <div
      className="feed-container-new-post-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>New Post title</h3>

      <div className="edit-post-form">
        <div className="edit-form-post-item">
          <select defaultValue="" onChange={handleCategoryChange}>
            <option value="">Select an option</option>
            {uniqueAndFiltered}
          </select>
        </div>
        <div className="edit-form-post-item">
          <label htmlFor="title">Post title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            required
            placeholder={post.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-form-post-item">
          <label htmlFor="description"></label>
          <textarea
            id="description"
            name="description"
            value={description}
            required
            placeholder={post.description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="new-form-post-item">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FeedEditPostPopUp;
