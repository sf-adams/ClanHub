import React from "react";
import { BsPencilSquare } from "react-icons/bs";

const NewFeedItemButton = ({ handleNewPostRequest }) => {
  return (
    <BsPencilSquare onClick={handleNewPostRequest}/>
  );
};

export default NewFeedItemButton;
