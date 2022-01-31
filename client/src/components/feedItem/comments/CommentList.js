import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

const CommentList = ({ filteredComments, createComment }) => {
  const [toggleNoComments, setToggleNoComments] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (filteredComments.length == 0) {
      setToggleNoComments(true);
    }
  });

  const commentNodes = filteredComments.map((comment, index) => {
    return <Comment comment={comment} key={index} />;
  });

  // const handleSubmit = async (ev) => {
  //   ev.preventDefault();
  //   await createUser({
  //     firstName: firstName,
  //     lastName: lastName,
  //     bio: bio,
  //     email: email,
  //     linkedin: linkedin,
  //     github: github,
  //   });
  //   setFirstName("");
  //   setLastName("");
  //   setBio("");
  //   setEmail("");
  //   setLinkedin("");
  //   setGithub("");
  //   navigate("/home");
  // };

  return (
    <>
      <div className="comment-list">{commentNodes}</div>
      {toggleNoComments ? (
        <div className="new-comment-wrapper">
          <p>
            There are no comments yet for this post. Be the first to create one
          </p>
        </div>
      ) : null}
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        New Comment
      </button>
      {modal ? <NewCommentForm /> : null}
    </>
  );
};

export default CommentList;
