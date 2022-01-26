import React, {useState, useEffect} from 'react';
// import { auth } from "../../auth/firebase-config";

import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function LoginComponent({navigate, auth}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      navigate("/feed");
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth).then(console.log(auth.currentUser));
  };

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };


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
          placeholder="Password"
          onChange={handlePasswordChange}
        />

        <button onClick={login}> Login</button>
      </div>

      <button onClick={logout}> Sign Out </button>
    </>
  );
}
