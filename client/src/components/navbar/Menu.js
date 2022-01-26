import React from 'react';
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from "../../auth/firebase-config";

function Menu({ menuOpen, setMenuOpen }) {

  const logout = async () => {
    await signOut(auth).then(console.log(auth.currentUser));
  };



  return (
    <div className={"menu " +(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/home">Home</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/feed">Feed</Link>
        </li>
        <li onClick={()=>setMenuOpen(false).then({logout})}>
          <Link to="/" >Sign Out</Link>
        </li>

      </ul>
    </div>
  )
}

export default Menu;