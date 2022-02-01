import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileDetails from "../components/profile/ProfileDetails";
import ProfileHistoryList from "../components/profile/ProfileHistoryList";
import { useAuth, upload } from "../auth/firebase-config";
import { useAuthState} from

function ProfileContainer({ user, posts, loggedIn }) {

  const [image, setImage] = useState(null);
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

  function handleChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  function handleClick() {
    upload(image, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])

  function namedPhoto(){
    if(loggedIn) {
    return `${loggedIn?.firstName} ${loggedIn?.lastName}`
    }
  }

  return (
    <div className="profile-container">
      <ProfileHeader user={user}/>
      <ProfileDetails
        user={user}
        image={image}
        setImage={setImage}
        handleChange={handleChange}
        handleUpload={handleClick}
        loading={loading}
        photoURL={photoURL}
        />
      <ProfileHistoryList user={user} posts={posts} />

      <p>{user?.email}</p>

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
