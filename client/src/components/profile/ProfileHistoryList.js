import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import ProfileHistoryListItem from "./ProfileHistoryListItem";

const ProfileHistoryList = ({ user, posts }) => {
  const [toggleVisiblePosts, setToggleVisiblePosts] = useState(false);

  const filtered = posts.filter((post) => {
    return post.user?.email == user.email;
  });

  const postNodes = filtered.map((post, index) => {
    return <ProfileHistoryListItem key={index} post={post} />;
  });

  const handleClick = () => {
    if (toggleVisiblePosts == false) {
      setToggleVisiblePosts(true);
    } else {
      setToggleVisiblePosts(false);
    }
  };

  return (
    <div className = "profile-history-container">
      <h4 className="profile-section-logged-in-posts" onClick={handleClick}>
        View recent user activity
      </h4>

      <div style={{ display: toggleVisiblePosts ? "block" : "none" }}>
        {postNodes}
         <Link to="/feed">Click to view your feed.</Link>
      </div>

    </div>
  );
};

export default ProfileHistoryList;
