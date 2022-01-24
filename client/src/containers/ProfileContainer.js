import React from 'react';
import { Link } from "react-router-dom";

function ProfileContainer() {
  return (
    <div>
      <h1>This is the profile page.</h1>
      <Link to="/">Click to view your feed.</Link>
    </div>
  );
}

export default ProfileContainer;
