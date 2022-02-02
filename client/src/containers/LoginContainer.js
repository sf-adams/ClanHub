// Library Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Component Imports
import LoginForm from "../components/forms/LoginForm";
import main_title from "../assets/main_title.svg";

// Authentication Imports
import { useAuthState } from "../auth/AuthContext";
import { auth } from "../auth/firebase-config";

function LoginContainer({ user, loggedIn, getUserObject }) {

  // Creating variable for firebase authentication
  const { logIn } = useAuthState();

  // Creating states for user input
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  // Creating variable for navigation
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password).then(() => {
             navigate("/home");
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-container">
        <div className="form-left">
        <img src={main_title} alt="" className ="form-page-title"/>
          <span className="form-desc">
            (Insert great line here)
          </span>
        </div>

        <div className="form-right">
            <LoginForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
              auth={auth}
              error={error}
            />

        </div>
      </div>
  );
}
export default LoginContainer;
