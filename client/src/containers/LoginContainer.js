import { useState } from "react";
import Signup from "../components/login/Signup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../auth/firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <Signup />

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      

      <button onClick={logout}> Sign Out </button>
    </>
  );
}

export default App;

// import React, { useState } from "react";
// import Signup from "../components/login/Signup";
// import LoginComponent from "../components/login/LoginComponent";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../auth/firebase-config";

// export default function LoginContainer() {
//   const [user, setUser] = useState({});

//   const logout = async () => {
//     await signOut(auth);
//   };

//   onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });

//   return (
//     <>
//       <Signup />
//       <LoginComponent />
//       <h4>User signed in</h4>
//       {user?.email}
//       <button onClick = {logout}>Log out</button>
//     </>
//   );
// }
