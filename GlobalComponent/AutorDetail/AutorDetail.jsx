import React from "react";

// INTERNAL IMPORT
import Style from "./AutorDetail.module.css";
import { Header, AuthorInformartion } from "../index";

const AutorDetail = ({ menuOpen, setMenuOpen, themeMode, SetThemeMode }) => {
  return (
    <div
      className={` ${Style.AutorDetail} ${
        themeMode ? "darkMode" : "lightMode"
      }`}
    >
      <div className={Style.authorDetail_box}>
        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          themeMode={themeMode}
          SetThemeMode={SetThemeMode}
        />
        <AuthorInformartion
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          themeMode={themeMode}
          SetThemeMode={SetThemeMode}
        />
      </div>
    </div>
  );
};

export default AutorDetail;
