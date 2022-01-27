import "./styles/css/style.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import FeedContainer from "./containers/FeedContainer";
import ProfileContainer from "./containers/ProfileContainer";
import LoginContainer from "./containers/LoginContainer";
import HomeContainer from "./containers/HomeContainer";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/navbar/Menu";
import { auth } from "./auth/firebase-config";
import {
  onAuthStateChanged
} from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import UserService from './services/UserService';

function App() {

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState({})
  const [users, setUsers] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=> {
    UserService.getUsers().then((users)=> setUsers(users.data))
    }, [])

  useEffect(()=> {
    setLoggedIn(getLoggedIn)
  }, [user])

  const getLoggedIn = ()=> {
    if (users && user){
      const sel = users.filter((user) => {
        console.log(user.email);
        return user.email === auth.currentUser.email;
      });
      return sel[0];
    }
  }
  
// jdbaskjf
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  return (
    <>
      <div className="App">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route
            path="/home"
            element={user ? <HomeContainer /> : <Navigate to="/login" />}
          />
          <Route
            path="/feed"
            element={
              user ? <FeedContainer auth={auth} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/profile"
            element={<ProfileContainer loggedIn={loggedIn} user={auth.currentUser} />}
          />
        </Routes>
      </div>
      <button onClick={getLoggedIn}>click me</button>
    </>
  );
}

export default App;
