import React from "react";
import blankProfile from "../../assets/new_profile_photo.svg";
;

const ProfileDetails = ({user}) => {
  return (
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
          <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
          <img className="profileUserImg" src={blankProfile} alt="" />
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">
            {user?.firstName} {user?.lastName}
          </h4>
          <span className="profileInfoDesc">{user?.bio}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
