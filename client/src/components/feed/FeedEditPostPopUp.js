import React, { useState, useEffect } from "react";
import axios from "axios";

const FeedEditPostPopUp = ({ post, posts, toggleEdit, handleToggleEdit }) => {
  const [categoryType, setCategoryType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState({});
  const [id, setID] = useState(null);
  const filteredArray = [];

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setCategoryType(localStorage.getItem("Category Type"));
    setTitle(localStorage.getItem("Title"));
    setDescription(localStorage.getItem("Description"));
    setUser(localStorage.getItem("User"));
  }, []);

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

  const updatePostData = () => {
    return (
      axios.put(`http://localhost:8080/api/posts/${id}`),
      {
        categoryType,
        title,
        description,
        user,
      }
    );
  };

  return (
    <div className="feed-container-new-post-modal">
      <h3>New Post title</h3>

      <div className="edit-post-form">
        <div className="edit-form-post-item">
          <select value={categoryType} onChange={handleCategoryChange}>
            <option>Select an option</option>
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
          <button onClick={updatePostData}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FeedEditPostPopUp;
