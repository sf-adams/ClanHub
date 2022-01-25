import React, {useState, useEffect} from 'react';
import { auth } from "../../auth/firebase-config";

import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function LoginComponent() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };

  // const handlePasswordConfirmChange = (ev) => {
  //   setPasswordConfirm(ev.target.value);
  // };

  return (
    <>
      <div>
        <h3> Login </h3>
        <label htmlFor="login-Email"> Email:</label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          required
          autoComplete="off"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <label htmlFor="login-Password"> Password:</label>
        <input
          type="password"
          id="login-password"
          name="email"
          value={password}
          required
          autoComplete="off"
          placeholder="Email"
          onChange={handlePasswordChange}
        />

        <button onClick={login}> Login</button>
      </div>

      <button onClick={logout}> Sign Out </button>
      {/* <div>
        <h2>Login!</h2>
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
          <button type="sumbit">Register</button>
        </form>
      </div> */}
    </>
  );
}
