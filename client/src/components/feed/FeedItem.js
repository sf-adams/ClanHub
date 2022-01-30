import React, { useState } from "react";
import FeedEditPostPopUp from "./FeedEditPostPopUp";
import axios from "axios";
import PostService from "../../services/PostService";

const FeedItem = ({ post, posts, user, deletePost, updatePost }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleToggleEdit = () => {
    setToggleEdit(!toggleEdit);
  };

  const printPosts = () => {
    console.log(post.id);
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
          <>
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
            <button
              onClick={() => {
                deletePost(post?.id);
              }}
            >
              Delete
            </button>
          </>
        ) : null}
        {toggleEdit ? (
          <FeedEditPostPopUp
            post={post}
            posts={posts}
            handleToggleEdit={handleToggleEdit}
            setData={setData}
            updatePost={updatePost}
          />
        ) : null}
      </div>
    </>
  );
};

export default FeedItem;
