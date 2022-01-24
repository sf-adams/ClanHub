import React, {useState, useEffect} from 'react';

export default function LoginComponent() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };

  const handlePasswordConfirmChange = (ev) => {
    setPasswordConfirm(ev.target.value);
  };

  return (
    <>
      <div>
        <h2>Sign up!</h2>
        <form action="POST" className="group">
          <div className="form-item email-group-login">
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              id="login-email"
              name="email"
              value={email}
              required
              autoComplete="off"
              onChange={handleEmailChange}
            />
          </div>
          <div className="group">
            <label htmlFor="login-passwprd">Password</label>
            <input
              type="password"
              id="login-password"
              name="password"
              value={password}
              required
              onChange={handlePasswordChange}
            />
          </div>
          <div className="group">
            <label htmlFor="login-password-confirm">Confirm Password</label>
            <input
              type="password"
              id="login-password-confirm"
              name="passwordConfirm"
              value={passwordConfirm}
              required
              onChange={handlePasswordConfirmChange}
            />
          </div>
          <button type="sumbit">Register</button>
        </form>
      </div>
      <div>Already have an account? Login</div>
    </>
  );
}
