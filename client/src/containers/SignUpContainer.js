import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase-config";
import Signup from "../components/login/Signup";
import Login from "../components/login/Login";
import { useAuthContext } from "../auth/AuthContext"

function SignUpContainer() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signUp } = useAuthContext();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-page">

      <h3> Sign Up </h3>

      {/* {error && <Alert variant="danger">{error}</Alert>} */}

        <Form onSubmit={handleSubmit}>

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
          <label htmlFor="signup-password"> Email:</label>

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
          <label htmlFor="signup-password"> Email:</label>

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





          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
  );
}
export default SignUpContainer;
