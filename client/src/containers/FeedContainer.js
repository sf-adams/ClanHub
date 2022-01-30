import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeedList from "../components/feed/FeedList";
import NewFeedItemButton from "../components/feed/NewFeedItemButton";
import FeedNewPostPopUp from "../components/feed/FeedNewPostPopUp";
import FeedSearchBar from "../components/feed/FeedSearchBar";
import UserService from "../services/UserService";
import PostService from "../services/PostService";

function FeedContainer({
  user,
  loggedIn,
  search,
  posts,
  createPost,
  deletePost,
  updatePost,
  handleSearch,
}) {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const numOfPosts = posts.length;
  let numPages = 1;

  useEffect(() => {
    for (let i = 0; i < posts.length; i++) {
      if (19 % i == 1) {
        numPages++;
      }
    }

  });

  const handleNewPostRequest = (e) => {
    e.stopPropagation();
    setModal(true);
  };

  const handleReset = () => {
    setModal(false);
  };

  const handleToggleEdit = () => {
    setToggleEdit(true);
  };

  return (
    <div className="feed-container" onClick={handleReset}>
      <div className="feed-container-header">
        <FeedSearchBar search={search} handleSearch={handleSearch} />
        {modal ? (
          <FeedNewPostPopUp
            posts={posts}
            createPost={createPost}
            loggedIn={loggedIn}
            handleReset={handleReset}
            handleToggleEdit={handleToggleEdit}
          />
        ) : null}
        <h1>Welcome to ClanHub.</h1>
        <NewFeedItemButton handleNewPostRequest={handleNewPostRequest} />
        <br></br>
        <Link to="/profile">Click to view your profile.</Link>
      </div>
      <FeedList
        posts={posts}
        user={user}
        toggleEdit={toggleEdit}
        deletePost={deletePost}
        updatePost={updatePost}
        handleToggleEdit={handleToggleEdit}
      />
      <button>Page: {numPages}</button>
      {numPages > 1 ? <button>Next page</button> : null}
      <p>{numOfPosts}</p>
    </div>
  );
}

export default FeedContainer;
