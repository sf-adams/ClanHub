import React from 'react';
import { Link } from "react-router-dom";

function FeedContainer() {
  return (
    <div>
      <h1>This is the feed.</h1>
      <Link to="profile">Click to view your profile.</Link>
    </div>
  );
}

export default FeedContainer;