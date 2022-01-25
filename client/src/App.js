import "./styles/css/style.css";
import { Routes, Route } from "react-router-dom";
import FeedContainer from "./containers/FeedContainer";
import ProfileContainer from "./containers/ProfileContainer";
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <div className="App">
      <LoginContainer />
      <Routes>
        <Route path="/" element={ <FeedContainer/> } />
        <Route path="profile" element={ <ProfileContainer/> } />
      </Routes>
    </div>
  );
}

export default App;
