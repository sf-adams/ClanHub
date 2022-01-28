import React from "react";

const NewFeedItemButton = ({ handleNewPostRequest }) => {
  return (
    <button onClick={handleNewPostRequest}>
      {/* This will be changed to an icon once we have agreed on one */}
      Create new Post
    </button>
  );
};

export default NewFeedItemButton;
