import React, { useState } from "react";

// INTERNAL IMPORT

import Style from "./MovieDetail.module.css";
import { Header, MovieInformation } from "../index";

const MovieDetail = ({
  menuOpen,
  setMenuOpen,
  themeMode,
  movieInfo,
  isFetching,
  recommendation,
  isRecommendationFetching,
}) => {
  // STATE VARIABLE
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <div
      className={`${Style.MovieDetail} ${themeMode ? "darkMode" : "lightMode"}`}
    >
      <div className={Style.movieDetail_box}>
        <Header
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          themeMode={themeMode}
        />

        <MovieInformation
          movieInfo={movieInfo}
          isFetching={isFetching}
          recommendation={recommendation}
          isRecommendationFetching={isRecommendationFetching}
          themeMode={themeMode}
        />
      </div>
    </div>
  );
};

export default MovieDetail;
