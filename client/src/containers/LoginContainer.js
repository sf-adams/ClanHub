import React, { useState } from "react";
import Signup from "../components/login/Signup";
import LoginComponent from "../components/login/LoginComponent";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../auth/firebase-config";

export default function LoginContainer() {
  const [user, setUser] = useState({});

  const logout = async () => {
    await signOut(auth);
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <>
      <Signup />
      <LoginComponent />
      <h4>User signed in</h4>
      {user?.email}
      <button onClick = {logout}>Log out</button>
    </>
  );
}
