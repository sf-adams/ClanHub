import React, {useState} from "react";
import FeedEditPostPopUp from "./FeedEditPostPopUp";

const FeedItem = ({ post, posts, user }) => {
  
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleToggleEdit = ()=> {
    setToggleEdit(!toggleEdit);
  }

  return (
    <>
      <div className="feed-item-object">
        <h4 className="feed-item-object-title">{post.title}</h4>
        <p className="feed-item-object-description">{post.description}</p>
        <p className="feed-item-object-author">
          {post.user?.firstName} {post.user?.lastName}
        </p>
        {user.email == post.user?.email ? (
          <button onClick={handleToggleEdit}>Edit</button>
        ) : null}
        {toggleEdit ? (
          <FeedEditPostPopUp
            post={post}
            posts={posts}
            toggleEdit={toggleEdit}
            handleToggleEdit={handleToggleEdit}
          />
        ) : null}
      </div>
    </>
  );
};

export default FeedItem;
