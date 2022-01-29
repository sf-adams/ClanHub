
import React, {useRef} from 'react';
import { Link } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileDetails from "../components/profile/ProfileDetails";
import ProfileHistoryList from "../components/profile/ProfileHistoryList";

function ProfileContainer({ user, loggedIn, posts }) {
  return (
    <div className="profile-container">
      <ProfileHeader user={user} />
      <ProfileDetails user={user} loggedIn={loggedIn} />
      <ProfileHistoryList user={user} posts={posts} />

        
function ProfileContainer({user, loggedIn,}) {
  // const [loginRef, setLoginRef] = useRef(loggedIn);

  function namedPhoto(){
    if(loggedIn) {
    return `${loggedIn?.firstName} ${loggedIn?.lastName}`
    }
  }
  
  return (
    <div className="profile-container">
      <h1>This is the profile page.</h1>

      <p>{user?.email}</p>

      <div className="profileRight">
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
      </div>
      <ul>
        <li>{loggedIn?.firstName}</li>
        <li>{loggedIn?.lastName}</li>
        <li>{loggedIn?.email}</li>
        <li>{loggedIn?.bio}</li>
        <li>{loggedIn?.linkedin}</li>
        <li>{loggedIn?.github}</li>
      </ul>

      <Link to="/feed">Click to view your feed.</Link>
    </div>
  );
}

export default ProfileContainer;
