import React from "react";
import { lightMode, darkMode } from "../mode/bootstrapMode";

const ModeContext = React.createContext();

function Context(props) {
  const [modeObj, setModeObj] = React.useState(lightMode);

  function toggleMode() {
    modeObj.mode === "white" ? setModeObj(darkMode) : setModeObj(lightMode);
  }

  return (
    <ModeContext.Provider value={{ modeObj, toggleMode }}>
      {props.children}
    </ModeContext.Provider>
  );
}

export { Context, ModeContext };