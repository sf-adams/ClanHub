import React, { useState } from "react";
import FeedEditPostPopUp from "./FeedEditPostPopUp";

const FeedItem = ({ post, posts, user }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleToggleEdit = ()=> {
    setToggleEdit(!toggleEdit);
  }

  const printPosts = () => {
    console.log(posts);
  };

  const setData = (id, categoryType, title, description, user) => {
    setToggleEdit(!toggleEdit);
    localStorage.setItem("ID", id);
    localStorage.setItem("Category Type", categoryType);
    localStorage.setItem("Title", title);
    localStorage.setItem("Description", description);
    localStorage.setItem("User", user);
    console.log(post);
  };

  return (
    <>
      <div className="feed-item-object">
        <h4 className="feed-item-object-title">{post.title}</h4>
        <p className="feed-item-object-description">{post.description}</p>
        <p className="feed-item-object-author">
          {post.user?.firstName} {post.user?.lastName}
        </p>
        {user.email == post.user?.email ? (
          <button
            onClick={() => {
              setData(
                post.id,
                post.categoryType,
                post.title,
                post.description,
                post.user
              );
            }}
          >
            Edit
          </button>
        ) : null}
        {toggleEdit ? (
          <FeedEditPostPopUp
            post={post}
            posts={posts}
            handleToggleEdit={handleToggleEdit}
          />
        ) : null}
      </div>
    </>
  );
};

export default FeedItem;
