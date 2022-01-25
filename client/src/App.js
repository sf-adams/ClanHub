import "./styles/css/style.css";
import react, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import FeedContainer from "./containers/FeedContainer";
import ProfileContainer from "./containers/ProfileContainer";
import LoginContainer from "./containers/LoginContainer";

import { auth } from "./auth/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState({});

  const checkSignIn = () => {
    console.log(user)
    if (Object.keys(user).length != 0) {
      return true;
    } else {
      return false;
    }
  }


  // const authInitialise = async () => {
  //   await onAuthStateChanged(auth, (currentUser) => {
  //     console.log("hello");
  //     setUser(currentUser);
  //   });
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={<LoginContainer auth={auth} user={user} onAuthStateChanged={onAuthStateChanged} />}
        />
        <Route
          path="/feed"
          element={checkSignIn() ? <FeedContainer /> : <Navigate to="/login" />}
        />
        <Route path="/profile" element={<ProfileContainer />} />
      </Routes>
    </div>
  );
}

export default App;
