import React, {useState, useEffect} from "react";
import Comment from "./Comment";

const CommentList = ({ filteredComments }) => {

  const [toggleNoComments, setToggleNoComments] = useState(false)

  useEffect(() => {
    if(filteredComments.length == 0) {
      setToggleNoComments(true)
    }
  })

  const commentNodes = filteredComments.map((comment, index) => {
    return <Comment 
    comment={comment}
    key = {index}
    />;
  });

  const handleClick = () => {
    console.log(filteredComments.length);
  };

  return (
    <>
      <div className="comment-list">{commentNodes}</div>
      {toggleNoComments?<div className="new-comment-wrapper">
        <p>
          There are no comments yet for this post. Be the first to create one
        </p>
        <button>New Comment</button>
      </div>: null}
    </>
  );
};

export default CommentList;
