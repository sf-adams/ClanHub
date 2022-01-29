import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeedList from "../components/feed/FeedList";
import NewFeedItemButton from "../components/feed/NewFeedItemButton";
import FeedNewPostPopUp from "../components/feed/FeedNewPostPopUp";
import UserService from "../services/UserService";
import PostService from "../services/PostService";

function FeedContainer({ user, loggedIn, posts, createPost }) {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   PostService.getPosts().then((posts) => setPosts(posts.data));
  // });


  const handleNewPostRequest = (e) => {
    e.stopPropagation();
    // console.log("Hello");
    setModal(true);
  };

  const handleReset = () => {
    // console.log("hello");
    setModal(false);
  };

  return (
    <div className="feed-container" onClick={handleReset}>
      <div className="feed-container-header">
        {modal ? (
          <FeedNewPostPopUp
            posts={posts}
            createPost={createPost}
            loggedIn={loggedIn}
            handleReset={handleReset}
          />
        ) : null}
        <h1>Welcome to ClanHub.</h1>
        <NewFeedItemButton handleNewPostRequest={handleNewPostRequest} />
        <br></br>
        <Link to="/profile">Click to view your profile.</Link>
      </div>
      <FeedList posts={posts} user={user} />
    </div>
  );
}

export default FeedContainer;
