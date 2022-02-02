import React from 'react';

const ProfileHistoryListItem = ({post})=> {
  return(
    <div className = "profile-history-list-item-wrapper">
      <h3 className = "profile-history-list-item-title">{post.title}</h3>
      <p className = "profile-history-list-item-description">
        {post.description}
      </p>
    </div>
  );
}
export default ProfileHistoryListItem;

