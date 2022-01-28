import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../auth/firebase-config";
import SignUpForm from "../components/forms/SignUpForm";
import { useAuthState } from "../auth/AuthContext";

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
      if (password === passwordConfirm) {
        await signUp(email, password);
        navigate("/login");
      } else {
        setError("Passwords do not match")
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-page">
      <h3> Sign Up </h3>
      {error && <p>{error}</p>}

      <SignUpForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        passwordConfirm={passwordConfirm}
        setPasswordConfirm={setPasswordConfirm}
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
export default SignUpContainer;