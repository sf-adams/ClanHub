import React from 'react';
import FeedItem from './FeedItem';

const FeedList =({users})=> {
    const userNodes = users.map((user, index) =>{
        return <FeedItem 
                key={index}
                user={user}
                 />
    });
    return (
        <div>{userNodes}</div>
    );
}

export default FeedList;