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

   onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser);
   });

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


    </>
  );
}
