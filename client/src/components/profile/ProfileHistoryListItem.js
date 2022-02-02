import React from 'react';
import {Link} from 'react-router-dom';

const ProfileHistoryListItem = ({post})=> {
  return(
    <div className = "profile-history-list-item-wrapper">
      <Link to ={`/feed/${post.id}`}>
      <h3 className = "profile-history-list-item-title">{post.title}</h3>
      </Link>
      <p className = "profile-history-list-item-description">
        {post.description}
      </p>
    </div>
  );
}
export default ProfileHistoryListItem;

