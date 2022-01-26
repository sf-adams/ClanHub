import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import logo from "../../assets/main_logo.svg";

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">

        <div className="left">
          <Link to="/home" className="logo" onClick={()=>setMenuOpen(false)}>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="middle">
          <Link to="/profile" className='profile-button' onClick={()=>setMenuOpen(false)}>
            <FaRegUser  className="icon" size="2em"/>
          </Link>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
