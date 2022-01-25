import { useState } from "react";
import Signup from "../components/login/Signup";
import Login from '../components/login/LoginComponent'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../auth/firebase-config";

function App() {
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  

  return (
    <>
      <Signup />
      <Login/>

      
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
