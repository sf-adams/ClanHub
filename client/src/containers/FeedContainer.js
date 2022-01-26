import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import FeedList from '../components/feed/FeedList';
import UserService from '../services/UserService';

function FeedContainer() {

  const [users, setUsers] = useState([]);

  useEffect(() =>{
    UserService.getUsers().then(users =>{
      setUsers(users);
    })
  }, [])
  

  return (
    <>
      <div className="feed-container-header">
        <h1>Welcome to ClanHub.</h1>
        <Link to="/profile">Click to view your profile.</Link>
      </div>
      <FeedList users={users}/>
    </>
  );
}

export default FeedContainer;