import React, {useEffect} from 'react';
import ProfileHistoryListItem from './ProfileHistoryListItem';

const ProfileHistoryList =({user, posts}) => {

  // if (user!=undefined) {
  //   const getPostNodes = () => {
  //     const postNodes = user.posts.map((post, index) => {
  //       return <ProfileHistoryListItem key={index} post={post} />;
  //     });
  //     return postNodes;
  //   };
  // }

  
  // console.log(user.email)

  // const filtered = posts.filter((post) => {
    // console.log(user)
  // })

  // const postNodes= filtered.map((post, index) => {
  //    return <ProfileHistoryListItem key={index} post={post}/>
  //   })


  const filtered = posts.filter((post)=> {
    return post.user.email == user.email;
  })

  const postNodes =
    filtered.map((post, index)=> {
        return <ProfileHistoryListItem key={index} post={post} />;
    })
  

  
  

  const handleClick = () => {
    // console.log(postNodes);
    // console.log(user.email)
    // console.log(posts)
    console.log(posts)
  };

  return (
    <>
      <h3>Hello world</h3>
      <button onClick={handleClick}>click me </button>
      <div>{postNodes}</div>
    </>
  );
}

export default ProfileHistoryList;


//  useEffect(() => {
//    getPostNodes();
//  }, []);