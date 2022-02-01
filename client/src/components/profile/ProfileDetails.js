import React from "react";
import blankProfile from "../../assets/new_profile_photo.svg";

const ProfileDetails = ({ user, loggedIn, image, setImage, handleChange, handleUpload }) => {
  return (
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
          <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
          <img className="profileUserImg" src={blankProfile} alt="" />
          <button onClick={handleUpload}>Upload</button>
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">
            {loggedIn?.firstName} {loggedIn?.lastName}
          </h4>
          <span className="profileInfoDesc">{loggedIn?.bio}</span>
          <span className="profileInfoLinkedin">
            Linkedin: {loggedIn?.linkedin}
          </span>
          <span className="profileInfoGithub">Github: {loggedIn?.github}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
