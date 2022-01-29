import React from 'react';
import FeedItem from './FeedItem';

const FeedList = ({ posts, user }) => {
  const postNodes = posts.map((post, index) => {
    return <FeedItem key={index} post={post} user={user} />;
  });

  return (
    <>
      <div>{postNodes}</div>
    </>
  );
};

export default FeedList;