import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ProfileDetails from "../components/profile/ProfileDetails";
import ProfileHistoryList from "../components/profile/ProfileHistoryList";


function ProfileContainer({ user, posts, loggedIn }) {

  function namedPhoto(){
    if(loggedIn) {
    return `${loggedIn?.firstName} ${loggedIn?.lastName}`
    }
  }

  return (
    <div className="profile-container">


      <ProfileDetails user={user} loggedIn={loggedIn} />
      <ProfileHistoryList user={user} posts={posts} />



      {/* <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
            <img className="profileUserImg" src={blankProfile} alt="" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">{namedPhoto()}</h4>
            <span className="profileInfoDesc">I'm the first user!</span>
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default ProfileContainer;
