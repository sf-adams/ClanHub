import React from 'react';
import { Link } from "react-router-dom";

function FeedContainer() {
  return (
    <div>
      <h1>This is the feed.</h1>
      <Link to="/">Click to view your feed.</Link>
    </div>
  );
}

export default FeedContainer;