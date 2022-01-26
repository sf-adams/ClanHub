import React from 'react';
import { Link } from "react-router-dom";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/home">Home</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/feed">Feed</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu;