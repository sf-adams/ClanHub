import React from "react";

const Comment = (comment) => {
  
  const handleClick = () => {
      console.log(comment.comment)
  };
  
    return (
      <div className="comment-wrapper">
          <h3 className="comment-title">{comment.comment.body}</h3>
          <button onClick = {handleClick}></button>
      </div>
  );
};

export default Comment;
