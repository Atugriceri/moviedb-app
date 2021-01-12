import React from "react";
import { ModeContext } from "../context/ModeContext";
import { Link } from "react-router-dom";
import { Sun, Moon } from 'bootstrap-icons-react';

function ModeAPIButton(props) {
  const modeContextAPI = React.useContext(ModeContext);
  const { toggleMode } = modeContextAPI;
  const { btn } = modeContextAPI.modeObj;

  return (
    <Link className="nav-link text-warning" onClick={toggleMode}>
      <i className={`${btn} iconSize d-flex`}></i>
    </Link>
  );
}

export default ModeAPIButton;