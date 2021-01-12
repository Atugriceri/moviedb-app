import React from "react";
import { ModeContext } from "../context/ModeContext";
import ModeAPIButton from "./ModeAPIButton";
import { Link } from "react-router-dom";
import Logo from "../logo.jpg"
import { House, Sun, Moon } from 'bootstrap-icons-react';

function Navbar () {
  const modeContextAPI = React.useContext(ModeContext);

  const { backgroundColor, textColor, mode } = modeContextAPI.modeObj;

  return (
        <div>
          <nav className={`navbar navbar-expand-lg ${backgroundColor} navbar-${mode} border-bottom border-warning border-2`}>
            <div className="container">
            <Link className="navbar-brand" href="/">
              <img src={Logo} className="logo ms-2 shadow" />
            </Link>
            <div id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link className={`nav-link active ${textColor} float-left`} aria-current="page" href="/">
                  <House height={35} width={35} />
                </Link>
                <ModeAPIButton />
              </div>
            </div>     
            </div>      
          </nav>
        </div>
    )
}

export default Navbar