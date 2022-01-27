import "./styles/css/style.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate
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

// Authentication Imports
import { auth } from "./auth/firebase-config";
import { AuthContextProvider, useAuthState } from "./auth/AuthContext";
import { AuthenticatedRoute } from "./auth/AuthenticatedRoute";
import { UnauthenticatedRoute } from "./auth/UnauthenticatedRoute";
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

  const AuthenticatedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`AuthenticatedRoute: ${isAuthenticated}`)
    return (
      <Route
        {...props}
        render={routeProps =>
          isAuthenticated ? <C {...routeProps} /> : <Navigate to="/login" />
        }
      />
    )
  }

  const UnauthenticatedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
    return (
      <Route
        {...props}
        render={routeProps =>
          !isAuthenticated ? <C {...routeProps} /> : <Navigate to="/" />
        }
      />
    )
  }


  return (
    <AuthContextProvider>
      <Router>
        <Route
          path="/login"
          element={
          <UnauthenticatedRoute>
            <LoginContainer />
          </UnauthenticatedRoute>
          }
        />
        {/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}


      </Router>
      {/* <button onClick={getLoggedIn}>click me</button> */}
    </AuthContextProvider>










  );
}

export default App;
