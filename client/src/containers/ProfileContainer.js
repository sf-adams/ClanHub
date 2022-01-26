import React from 'react';
import { Link } from "react-router-dom";
import blankProfile from "../assets/new_profile_photo.svg";

function ProfileContainer({user}) {
  return (
    <div className="profile-container">
      <h1>This is the profile page.</h1>

      <p>{user?.email}</p>

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src={blankProfile}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Tony Jones</h4>
                <span className="profileInfoDesc">I'm the first user!</span>
            </div>
          </div>
        </div>

      <Link to="/feed">Click to view your feed.</Link>

    </div>
  );
}

export default ProfileContainer;
