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
    <div className="form-page">
      <h3> Login </h3>
      {error && <p>{error}</p>}

      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        auth={auth}
        className="form-container"
      />

      <div className="return-link-container">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}
export default LoginContainer;
