import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase-config";
import LoginForm from "../components/forms/LoginForm";
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
    <div className="form-background">
      <div className="form-container">
        <h3> Login </h3>
        {error && <p>{error}</p>}
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          auth={auth}
        />
        <div className="return-link-container">
          <p>No account? Request one
            <a href="mailto:info@codeclan.com?subject=Request%20Username%20and%20Password">here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LoginContainer;
