import React from "react";

// INTERNAL IMPORT

import Style from "./MovieDetail.module.css";
import { Header, MovieInformation } from "../index";

const MovieDetail = ({ menuOpen, setMenuOpen, themeMode, SetThemeMode }) => {
  return (
    <div
      className={`${Style.MovieDetail} ${themeMode ? "darkMode" : "lightMode"}`}
    >
      <div className={Style.movieDetail_box}>
        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          themeMode={themeMode}
          SetThemeMode={SetThemeMode}
        />

        <MovieInformation
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          themeMode={themeMode}
          SetThemeMode={SetThemeMode}
        />
      </div>
    </div>
  );
};

export default MovieDetail;
