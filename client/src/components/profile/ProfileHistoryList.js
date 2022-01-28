import React, {useState, useEffect} from 'react';
import ProfileHistoryListItem from './ProfileHistoryListItem';

const ProfileHistoryList =({user, posts}) => {

  const [toggleVisiblePosts, setToggleVisiblePosts] = useState(false);

  const filtered = posts.filter((post)=> {
    return post.user.email == user.email;
  })

  const postNodes =
    filtered.map((post, index)=> {
        return <ProfileHistoryListItem key={index} post={post} />;
    })
  
  const handleClick = () => {
    if (toggleVisiblePosts == false) {
      setToggleVisiblePosts(true)
    } else {
      setToggleVisiblePosts(false)
    };
  };

  return (
    <>
    <h4 className="profile-section-logged-in-posts"
        onClick={handleClick}>
      View recent user activity
    </h4>
    
      <div style={{display: toggleVisiblePosts ? 'block' : 'none'}}>{postNodes}</div>
    </>
  );
}

export default ProfileHistoryList;


//  useEffect(() => {
//    getPostNodes();
//  }, []);