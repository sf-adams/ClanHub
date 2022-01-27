import "./styles/css/style.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect
} from 'react-router-dom';
import { Navigate } from "react-router-dom";
import UserService from './services/UserService';

// Container & Component Imports
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/navbar/Menu";
import FeedContainer from "./containers/FeedContainer";
import ProfileContainer from "./containers/ProfileContainer";
import LoginContainer from "./containers/LoginContainer";
import HomeContainer from "./containers/HomeContainer";

// Authentication Imports
import { auth } from "./auth/firebase-config";
import { AuthContextProvider } from "./auth/AuthContext";
import { AuthenticatedRoute } from "./auth/AuthenticatedRoute";
import { UnauthenticatedRoute } from "./auth/UnauthenticatedRoute";
import { onAuthStateChanged } from "firebase/auth";
import Signup from "./components/login/Signup";


function App() {

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState({})
  const [users, setUsers] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(()=> {
  //   UserService.getUsers().then((users)=> setUsers(users.data))
  //   }, [])

  // useEffect(()=> {
  //   setLoggedIn(getLoggedIn)
  // }, [user])

  // const getLoggedIn = ()=> {
  //   if (users && user){
  //     const sel = users.filter((user) => {
  //       console.log(user.email);
  //       return user.email === auth.currentUser.email;
  //     });
  //     return sel[0];
  //   }
  // }

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  return (
    <>
      <AuthContextProvider>
        <Router>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Routes>
            <UnauthenticatedRoute path="/login" element={<LoginContainer />} />
            {/* <UnauthenticatedRoute path="/signup" component={<Signup />} />
            <AuthenticatedRoute path="/" component={<HomeContainer />} /> */}
            {/* <AuthenticatedRoute exact path="/feed" component={<FeedContainer />} />
            <AuthenticatedRoute exact path="/profile" component={<ProfileContainer />} /> */}

            {/* <Route path="/" element={<Navigate to="/login" />} /> */}
            {/* <Route path="/login" element={<LoginContainer />} /> */}
            {/* <Route
              path="/home"
              element={user ? <HomeContainer /> : <Navigate to="/login" />}
            /> */}
            {/* <Route
              path="/feed"
              element={
                user ? <FeedContainer auth={auth} /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/profile"
              element={<ProfileContainer user={auth.currentUser} />}
            /> */}
          </Routes>
        </Router>
      </AuthContextProvider>
      {/* <button onClick={getLoggedIn}>click me</button> */}
    </>
  );
}

export default App;
