import React, { useState } from "react";
import UserService from "../../services/UserService";

const FeedNewPostPopUp = ({ posts, createPost, loggedIn, handleReset }) => {
  const [categoryType, setCategoryType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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

  const handleCategoryChange = (ev) => {
    setCategoryType(ev.target.value);
  };

  const handleTitleChange = (ev) => {
    setTitle(ev.target.value);
  };

  const handleDescriptionChange = (ev) => {
    setDescription(ev.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await createPost({
      categoryType: categoryType,
      title: title,
      description: description,
      user: loggedIn,
    });
    setCategoryType("");
    setTitle("");
    setDescription("");
  };

  return (
    <div
      className="feed-container-new-post-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>New Post title</h3>

      <form
        action="POST"
        className="new-post-form"
        onSubmit={handleSubmit}
      >
        <div className="new-form-post-item">
          <select defaultValue="" onChange={handleCategoryChange}>
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
          <label htmlFor="description"></label>
          <textarea
            id="description"
            name="description"
            value={description}
            required
            onChange={handleDescriptionChange}
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
