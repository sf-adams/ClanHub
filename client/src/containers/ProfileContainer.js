import React from 'react';
import { Link } from "react-router-dom";

function ProfileContainer({user}) {
  return (
    <div className="profile-container">
      <h1>This is the profile page.</h1>

      <p>{user?.email}</p>


      <Link to="/feed">Click to view your feed.</Link>




    </div>
  );
}

export default ProfileContainer;
