import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../auth/firebase-config";
import Signup from "../components/login/Signup";
import Login from "../components/login/Login";
import { useAuthState } from "../auth/AuthContext"

function SignUpContainer() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signUp } = useAuthState();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-page">
      <h3> Sign Up </h3>
      {/* {error && <Alert variant="danger">{error}</Alert>} */}

      <form onSubmit={handleSubmit}>

        <div className="inner-container">
          <label htmlFor="signup-Email"> Email:</label>
          <input
            type="email"
            id="signup-email"
            name="email"
            value={email}
            required
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inner-container">
          <label htmlFor="signup-password"> Password:</label>
          <input
            type="password"
            id="signup-password"
            name="[password]"
            value={password}
            required
            autoComplete="off"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inner-container">
          <label htmlFor="signup-confirm-password"> Confirmation:</label>
          <input
            type="password"
            id="signup-confirm-password"
            name="passwordConfirm"
            value={passwordConfirm}
            required
            autoComplete="off"
            placeholder="Password Confirmation..."
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <div className="button">
          <button variant="primary" type="Submit">
            Sign up
          </button>
        </div>
      </form>

      <div className="return-link-container">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}
export default SignUpContainer;
