import React from "react";
import blankProfile from "../../assets/new_profile_photo.svg";

const ProfileDetails = ({ user, loggedIn, image, setImage, handleChange, handleClick, loading, photoURL }) => {
  return (
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
          <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
          {/* <img className="profileUserImg" src={blankProfile} alt="" /> */}
          <input type="file" onChange={handleChange} />
          <button disabled={loading || !image} onClick={handleClick}>Upload</button>
          <img src={photoURL} alt="Avatar" className="profileUserImg" />
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
