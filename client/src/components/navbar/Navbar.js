import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">

        <div className="left">
          <Link to="/home" className="logo" onClick={()=>setMenuOpen(false)}>ClanHub</Link>
        </div>

        <div className="middle">
          <Link to="/profile" className='profile-button'>
            <button>Profile</button>
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
