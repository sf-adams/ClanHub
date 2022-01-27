import React from 'react';
import FeedItem from './FeedItem';

const FeedList =({posts})=> {
    const postNodes = posts.map((post, index) =>{
        return <FeedItem
                key={index}
                post={post}
                 />
    });
    

    return (
        <>
        <div>{postNodes}</div>
        </>
    );
}

export default FeedList;