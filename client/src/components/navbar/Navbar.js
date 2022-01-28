import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import logo from "../../assets/main_logo.svg";

function Navbar({ menuOpen, setMenuOpen, loggedIn }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!loggedIn) {
      navigate('/new-profile')
    } else {
      navigate('/profile')
    }
  };

  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link to="/home" className="logo" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="middle">
          {/* <Link
            to="/profile"
            className="profile-button"
            onClick={() => setMenuOpen(false)}
          > */}
          <FaRegUser onClick={handleClick} className={"icon", "profile-button"} size="2em" />
          {/* </Link> */}
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
