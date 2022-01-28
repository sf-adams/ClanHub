import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase-config";
import Signup from "../components/login/Signup";
import Login from "../components/login/Login";

function LoginContainer() {

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  let navigate = useNavigate();

  return (
    <div className="login-page">
      {/* <Signup navigate={navigate} user={user} setUser={setUser} auth={auth} /> */}
      <Login navigate={navigate} user={user} setUser={setUser} auth={auth} />
    </div>
  );
}
export default LoginContainer;
