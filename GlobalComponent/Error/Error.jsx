import React from "react";

// INTERNAL IMPORT
import Style from "./Error.module.css";

const Error = ({ themeMode }) => {
  return (
    <div className={`${Style.Error} ${themeMode ? "darkMode" : "lightMode"} `}>
      <h2>😥 Sorry, there is no movie</h2>
    </div>
  );
};

export default Error;
