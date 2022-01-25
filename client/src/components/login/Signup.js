import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";


export default function Signup({navigate, user, setUser, auth}) {
  // const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");


  const register = async () => {user = { user };
    try {
      if (password === passwordConfirm) {
         user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(auth.currentUser);
        navigate('/feed')
      } else {
        console.log("Your passwords did not match please try again");
        console.log(auth.currentUser);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
        <h3> Register User </h3>
        <div className="group">
          <label htmlFor="signup-Email"> Email:</label>
          <input
            type="email"
            id="signup-email"
            name="email"
            value={email}
            required
            autoComplete="off"
            placeholder="Email"
            onChange={handleEmailChange}
          />
        </div>
        <div className="group">
          <label htmlFor="signup-password"> Password:</label>
          <input
            type="password"
            id="-signup-password"
            name="[password]"
            value={password}
            required
            autoComplete="off"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <label htmlFor="signup-confirm-password">Confirm password:</label>
        <input
          type="password"
          id="signup-confirm-password"
          name="passwordConfirm"
          value={passwordConfirm}
          required
          autoComplete="off"
          onChange={handleEmailChange}
          placeholder="Password Confirmation..."
          onChange={handlePasswordConfirmChange}
        />
        <button onClick={register}> Create User</button>
        <h4> User Logged In: </h4>
        {user?.email}
      </div>
    </>
  );
}
