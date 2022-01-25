import { useState } from "react";
import Signup from "../components/login/Signup";
import Login from "../components/login/LoginComponent";

function App() {

  const [user, setUser] = useState({});

  return (
    <>
      <Signup />
      <Login />
    </>
  );
}
export default App;
