import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../auth/firebase-config";

function Menu({ menuOpen, setMenuOpen }) {
  const [toggleListShow1, setToggleListShow1] = useState(false);
  const [toggleListShow2, setToggleListShow2] = useState(false);

  useEffect(() => {
    document.getElementsByClassName("menu-container")[0].opacity = 0;
  })

  const handleDropdown1 = (ev) => {
    const sel = document.getElementsByClassName("menu-arrow-icon")[0];
    toggleListShow1
      ? sel.classList.remove("menu-arrow-icon-active")
      : sel.classList.add("menu-arrow-icon-active");

    setToggleListShow1(!toggleListShow1);
  };

  const handleDropdown2 = (ev) => {
    const sel = document.getElementsByClassName("menu-arrow-icon")[1];
    toggleListShow2
      ? sel.classList.remove("menu-arrow-icon-active")
      : sel.classList.add("menu-arrow-icon-active");
    setToggleListShow2(!toggleListShow2);
  };

  const logout = async () => {
    setMenuOpen(false);
    await signOut(auth);
  };

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="menu-container">
        <ul>
          <FiArrowRight className="menu-arrow-icon" onClick={handleDropdown1} />
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/home">Home</Link>
            {toggleListShow1 ? (
              <ul className="nested-menu-list" id="nested-menu-list-1">
                <li className="nested-menu-item">Feature Requests</li>
                <li className="nested-menu-item">Roadmap</li>
              </ul>
            ) : null}
          </li>
          <FiArrowRight className="menu-arrow-icon" onClick={handleDropdown2} />
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/feed">Feed</Link>
            {toggleListShow2 ? (
              <ul className="nested-menu-list" id="nested-menu-list-2">
                <li className="nested-menu-item">Categories</li>
                <li className="nested-menu-item">Trending</li>
                <li className="nested-menu-item">Blog</li>
              </ul>
            ) : null}
          </li>
          <li>
            <Link to="/terms">Terms and conditions</Link>
          </li>
          <li onClick={logout}>
            <Link to="/">Sign Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
