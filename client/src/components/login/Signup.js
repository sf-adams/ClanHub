import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../auth/firebase-config";

export default function Signup() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      if (password === passwordConfirm) {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
      } else {
        console.log("Your passwords did not match please try again");
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
        <input placeholder="Email..." onChange={handleEmailChange} />
        <input placeholder="Password..." onChange={handlePasswordChange} />
        <label htmlFor="signup-confirm-password">Confirm password</label>
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
