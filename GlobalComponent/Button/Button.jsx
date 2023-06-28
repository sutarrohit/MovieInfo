import React from "react";

// INTERNAL IMPORT
import Style from "./Button.module.css";
const Button = ({ btnName, themeMode, btnFuction, icon }) => {
  return (
    <div className={`${Style.Button} ${themeMode ? "lightMode" : "darkMode"}`}>
      <button onClick={() => btnFuction()}>
        {btnName}
        {icon}
      </button>
    </div>
  );
};

export default Button;
