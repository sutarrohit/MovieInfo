import React, { useState } from "react";
import Link from "next/link";

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
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
          onClick={() => handleClick()}
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
