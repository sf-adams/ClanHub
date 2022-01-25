import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "../components/login/Signup";
import Login from "../components/login/LoginComponent";

function App() {

  const [user, setUser] = useState({});
  let navigate = useNavigate();

  return (
    <>
      <Signup navigate={navigate} />
      <Login navigate={navigate} />
    </>
  );
}
export default App;
