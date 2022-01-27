import "./styles/css/style.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import { Navigate } from "react-router-dom";
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
import { AuthContextProvider } from "./auth/AuthContext";
import { AuthenticatedRoute } from "./auth/AuthenticatedRoute";
import { UnauthenticatedRoute } from "./auth/UnauthenticatedRoute";
import { onAuthStateChanged } from "firebase/auth";



function App() {

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState({})
  const [users, setUsers] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

//   const AuthenticatedRoute = ({ component: C, ...props }) => {
//     const { isAuthenticated } = useAuthState()
//     console.log(`AuthenticatedRoute: ${isAuthenticated}`)
//     return (
//       <Route
//         {...props}
//         render={routeProps =>
//           isAuthenticated ? <C {...routeProps} /> : <Navigate to="/login" />
//         }
//       />
//     )
//   }

//   const UnauthenticatedRoute = ({ component: C, ...props }) => {
//     const { isAuthenticated } = useAuthState()
//     console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
//     return (
//       <Route
//         {...props}
//         render={routeProps =>
//           !isAuthenticated ? <C {...routeProps} /> : <Navigate to="/" />
//         }
//       />
//     )
//   }

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

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <>
      <Router>
        {/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
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
            element={<ProfileContainer user={auth.currentUser} />}
          />
        </Routes>
      </Router>
      {/* <button onClick={getLoggedIn}>click me</button> */}
    </>









    //   <AuthContextProvider>
    //     <Router>
    //       <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    //       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    //       <Routes>
    //         <UnauthenticatedRoute path="/login" element={<LoginContainer />} />
    //         {/* <UnauthenticatedRoute path="/signup" component={<Signup />} />
    //         <AuthenticatedRoute path="/" component={<HomeContainer />} /> */}
    //         {/* <AuthenticatedRoute exact path="/feed" component={<FeedContainer />} />
    //         <AuthenticatedRoute exact path="/profile" component={<ProfileContainer />} /> */}

    //         {/* <Route path="/" element={<Navigate to="/login" />} /> */}
    //         {/* <Route path="/login" element={<LoginContainer />} /> */}
    //         {/* <Route
    //           path="/home"
    //           element={user ? <HomeContainer /> : <Navigate to="/login" />}
    //         /> */}
    //         {/* <Route
    //           path="/feed"
    //           element={
    //             user ? <FeedContainer auth={auth} /> : <Navigate to="/login" />
    //           }
    //         />
    //         <Route
    //           path="/profile"
    //           element={<ProfileContainer user={auth.currentUser} />}
    //         /> */}
    //       </Routes>
    //     </Router>
    //   </AuthContextProvider>
    //   {/* <button onClick={getLoggedIn}>click me</button> */}
    // </>

//     <AuthContextProvider>
//     <Router>
//       <div>
//         <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{' '}
//         <Link to="/signup">SignUp</Link>
//       </div>
//       <AuthenticatedRoute exact path="/" component={HomeContainer} />
//       {/* <UnauthenticatedRoute exact path="/signup" component={S} /> */}
//       <UnauthenticatedRoute exact path="/login" component={LoginContainer} />
//     </Router>
//   </AuthContextProvider>
  );
}

export default App;
