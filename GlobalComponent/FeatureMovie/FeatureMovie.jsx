import React from "react";
import Image from "next/image";
import Link from "next/link";
// INTERNAL IMPORT
import Style from "./FeatureMovie.module.css";
import images from "../Images/index";

const FeatureMovie = ({ themeMode, isFetching, movie }) => {
  if (!movie) return null;
  return (
    <Link href={`/movie/${movie.id}` || ""}>
      <div className={Style.Featuremovie}>
        <div className={Style.Featuremovie_box}>
          <img
            className={Style.Featuremovie_box_img}
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie.original_title}
          />
          {/* ----- */}

          <div className={`${Style.movieInfo}`}>
            <div
              className={`${Style.movieInfo_movie}  ${
                themeMode ? "colorWhite" : "colorWhite"
              }`}
            >
              <h5>{movie.title}</h5>
              <p>{movie.overview}</p>
            </div>
          </div>
          {/* ----- */}
        </div>
      </div>
    </Link>
  );
};

export default FeatureMovie;
