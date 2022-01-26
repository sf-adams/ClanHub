import "./styles/css/style.css";
import react, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import FeedContainer from "./containers/FeedContainer";
import ProfileContainer from "./containers/ProfileContainer";
import LoginContainer from "./containers/LoginContainer";

import { auth } from "./auth/firebase-config";
import {
  onAuthStateChanged
} from "firebase/auth";

function App() {

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  return (
    <div className="App">
      <Routes>
        <Route path = "/" element= {<Navigate to="/login" />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/feed" element={user?<FeedContainer/>: <Navigate to="/login" />} />
        <Route path="/profile" element={<ProfileContainer />} />
      </Routes>
    </div>
  );
}

export default App;
