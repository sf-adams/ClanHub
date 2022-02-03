import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import FeedEditPostPopUp from "./FeedEditPostPopUp";
import FeedItemDeletePopUp from "./FeedItemDeletePopUp";
import axios from "axios";
import PostService from "../../services/PostService";

import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const FeedItem = ({ post, posts, user, deletePost, updatePost }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleDeletionAlert, setToggleDeletionAlert] = useState(false);


  const navigate = useNavigate();
  // () => {
  //               deletePost(post?.id)
  const handleToggleEdit = () => {
    setToggleEdit(!toggleEdit);
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

  const handleModalPopUp = () => {
    setToggleDeletionAlert(!toggleDeletionAlert);
  };

  const confirmDeletion = async (ev) => {
    if (ev.target.innerHTML == "Yes") {
      await deletePost(post?.id);
    }
    setToggleDeletionAlert(false);
  };

  return (
    <>
      <section className="feed-item-object">
        <div className="feed-item-upvotes-wrapper">
          <AiOutlineArrowUp className="feed-item-upvotes" />
          <span className="feed-item-upvotes ">{post.upvotes}</span>
          <AiOutlineArrowDown className="feed-item-upvotes" />
        </div>
        <div className="feed-item-object-text-wrapper">
          <h4 className="feed-item-object-title">{post.title}</h4>
          <p className="feed-item-object-description">{post.description}</p>
          <hr className="line-break"/>
          <div className="feed-item-object-metadata">
            <p className="feed-item-object-author">
              {post.user?.firstName} {post.user?.lastName}
            </p>
            <p>{post.time}</p>
          </div>

          {toggleEdit ? (
            <FeedEditPostPopUp
              post={post}
              posts={posts}
              handleToggleEdit={handleToggleEdit}
              setData={setData}
              updatePost={updatePost}
            />
          ) : null}
          <Link className="feed-item-link" to={`/feed/${post?.id}`} post={post}>
            See post
          </Link>
        </div>
        {user?.email == post.user?.email ? (
          <div className="feed-item-buttons">
            <FiEdit3
              onClick={() => {
                setData(
                  post.id,
                  post.categoryType,
                  post.title,
                  post.description,
                  post.user
                );
              }}
            />
            <MdDeleteOutline onClick={handleModalPopUp} />
          </div>
        ) : null}
        {toggleDeletionAlert ? (
          <FeedItemDeletePopUp confirmDeletion={confirmDeletion} />
        ) : null}
      </section>
    </>
  );
};

export default FeedItem;
