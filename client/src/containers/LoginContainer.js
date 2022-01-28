import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../auth/firebase-config";
import LoginForm from "../components/forms/SignUpForm";
import { useAuthState } from "../auth/AuthContext";

function LoginContainer() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useAuthState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      {/* <Signup navigate={navigate} user={user} setUser={setUser} auth={auth} /> */}
      <Login navigate={navigate} user={user} setUser={setUser} auth={auth} />
    </div>
  );
}
export default LoginContainer;
