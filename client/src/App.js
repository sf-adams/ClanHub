import "./styles/css/style.css";
import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  Link,
  Navigate,
  Outlet
} from 'react-router-dom';
import UserService from './services/UserService';

// Container & Component Imports
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/navbar/Menu";
import FeedContainer from "./containers/FeedContainer";
import ProfileContainer from "./containers/ProfileContainer";
import LoginContainer from "./containers/LoginContainer";
import Signup from "./components/login/Signup";
import HomeContainer from "./containers/HomeContainer";
import SignUpContainer from "./containers/SignUpContainer";
import PrivateRoute from "./auth/PrivateRoute";

// Authentication Imports
import { auth } from "./auth/firebase-config";
import { AuthContextProvider, useAuthState } from "./auth/AuthContext";
import { AuthenticatedRoute } from "./auth/PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";

function App() {

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState({})
  const [users, setUsers] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

//   // useEffect(()=> {
//   //   UserService.getUsers().then((users)=> setUsers(users.data))
//   //   }, [])

//   // useEffect(()=> {
//   //   setLoggedIn(getLoggedIn)
//   // }, [user])

//   // const getLoggedIn = ()=> {
//   //   if (users && user){
//   //     const sel = users.filter((user) => {
//   //       console.log(user.email);
//   //       return user.email === auth.currentUser.email;
//   //     });
//   //     return sel[0];
//   //   }
//   // }

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });


  return (
    <AuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
            <PrivateRoute>
              <HomeContainer />
            </PrivateRoute>
            }
            />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/" element={<LoginContainer />} />
          <Route path="/signup" element={<SignUpContainer />} />
        </Routes>
        {/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}

    </AuthContextProvider>

  );
}

export default App;
