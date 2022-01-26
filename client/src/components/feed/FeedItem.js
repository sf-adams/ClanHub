import React from 'react';

const FeedItem = ({user})=> {
  return (
      <div className="feed-item-object">
          {user.email}
      </div>
  );
}

export default FeedItem;
