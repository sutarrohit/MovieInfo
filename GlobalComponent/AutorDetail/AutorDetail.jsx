import React from "react";

// INTERNAL IMPORT
import Style from "./AutorDetail.module.css";
import { Header, AuthorInformartion } from "../index";

const AutorDetail = ({
  menuOpen,
  setMenuOpen,
  themeMode,
  actor,
  actorMovies,
}) => {
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
        />
        <AuthorInformartion
          actor={actor}
          actorMovies={actorMovies}
          themeMode={themeMode}
        />
      </div>
    </div>
  );
};

export default AutorDetail;
