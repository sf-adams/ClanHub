import React, { useState } from "react";
import UserService from "../../services/UserService";

const FeedNewPostPopUp = () => {
  return (
    <div
      className="feed-container-new-post-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <p>hello world</p>
    </div>
  );
};

export default FeedNewPostPopUp;
