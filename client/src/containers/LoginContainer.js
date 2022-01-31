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
        <div className="form-left">
        <h3 className="form-text">ClanHub</h3>
          <span className="form-desc">
            Community, Connect, Contribute
          </span>
        </div>

        <div className="form-right">
          <div className="form-box">

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
      </div>
    </div>
  );
}
export default LoginContainer;
