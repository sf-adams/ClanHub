import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase-config";
// import {
//   onAuthStateChanged
// } from "firebase/auth";
import Signup from "../components/login/Signup";
import Login from "../components/login/LoginComponent";

function LoginContainer({user, onAuthStateChanged}) {

  // const [user, setUser] = useState({});
  let navigate = useNavigate();

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  return (
    <>
      <Signup navigate={navigate} user={user} auth={auth} onAuthStateChanged={onAuthStateChanged}/>
      <Login navigate={navigate} user={user} auth={auth} onAuthStateChanged={onAuthStateChanged}/>
    </>
  );
}
export default LoginContainer;
