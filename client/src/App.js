import "./styles/css/style.css";
import { Routes, Route } from "react-router-dom";
import FeedContainer from "./containers/FeedContainer";
import ProfileContainer from "./containers/ProfileContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <FeedContainer/> } />
        <Route path="profile" element={ <ProfileContainer/> } />
      </Routes>
    </div>
  );
}

export default App;
