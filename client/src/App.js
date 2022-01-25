import "./styles/css/style.css";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import FeedContainer from "./containers/FeedContainer";
import ProfileContainer from "./containers/ProfileContainer";
import LoginContainer from "./containers/LoginContainer";

import { auth } from "./auth/firebase-config";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element= {<Navigate to="/login" />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/feed" element={auth.currentUser==null?<FeedContainer/>: <Navigate to="/login" />} />
        <Route path="/profile" element={<ProfileContainer />} />
      </Routes>
    </div>
  );
}

export default App;
