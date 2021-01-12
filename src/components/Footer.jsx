import React from "react";
import { ModeContext } from "../context/ModeContext";
import { Link } from "react-router-dom";
import ModeAPIButton from "./ModeAPIButton";


function Footer(props) {
  const modeContextAPI = React.useContext(ModeContext);

  const { backgroundColor, textColor } = modeContextAPI.modeObj;

  return (
    <footer
      className={[backgroundColor, textColor, "py-5", "text-center", "border-top", "border-warning", "border-2", "mt-auto", "footer"].join(" ")}
    >
      <div className="container">
        <p className="mb-1">
          Coded by{" "}
          <a
            href="https://github.com/Atugriceri"
            className={`${textColor}`}
            target="_blank"
          >
            Alper Tugriceri
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
