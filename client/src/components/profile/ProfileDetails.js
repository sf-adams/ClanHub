import {useState, useEffect} from "react";
import blankProfile from "../../assets/new_profile_photo.svg";
import { useAuth} from "../../auth/AuthContext";
import { upload } from "../../auth/firebase-config";

const ProfileDetails = ({ user, loggedIn }) => {

  const [image, setImage] = useState(null);
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  const [displayPhoto, setDisplayPhoto] = useState("https://icon-library.com/images/add-person-icon/add-person-icon-3.jpg");

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
      setDisplayPhoto(currentUser.photoURL);
  }
  }, [currentUser])

  return (
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
          <div className="profile-banner-wrapper">
            <div className="profile-banner-overlay">
              <h3>Profile</h3>
            </div>
            <img className="profile-cover-img" src="https://source.unsplash.com/yxNURc8he3o" alt="Profile banner image" />
          </div>
          {/* <img className="profileUserImg" src={blankProfile} alt="" /> */}
          <input type="file" onChange={handleChange} />
          <button disabled={loading || !image} onClick={handleClick}>Upload</button>
          <img src={displayPhoto} alt="Avatar" className="profileUserImg"/>
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
