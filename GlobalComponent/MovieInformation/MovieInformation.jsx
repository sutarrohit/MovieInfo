import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMovie, MdLocalMovies, MdLink } from "react-icons/md";
import { useDispatch } from "react-redux";

// ITERNAL IMPORT
import Style from "./MovieInformation.module.css";

import genreIcon from "../Images/genres/index";
import actor from "../Images/actor/index";
import images from "../Images/index";
import { Movie, Loader } from "../index";
import { selectGenreOrCategory } from "../../api/currentGenreOrCategory";

const MovieInformation = ({
  themeMode,
  movieInfo,
  isFetching,
  recommendation,
  isRecommendationFetching,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={Style.MovieInformation}>
      {isFetching ? (
        <Loader />
      ) : (
        <div className={Style.MovieInformation_box}>
          {/* IMAGES */}
          <div className={Style.MovieInformation_image}>
            <img
              className={Style.image}
              src={
                movieInfo?.poster_path
                  ? `https://image.tmdb.org/t/p/original${movieInfo?.backdrop_path}`
                  : themeMode
                  ? images.darkLogo
                  : images.lightLogo
              }
              alt={movieInfo?.original_title}
            />
            {/*Buttons */}
            <div className={Style.button}>
              {movieInfo?.homepage !== "" ? (
                <Link
                  href={movieInfo?.homepage ? movieInfo?.homepage : "#"}
                  target="_blank"
                >
                  <button>
                    <span>WEBSITE</span>
                    <MdLink />
                  </button>
                </Link>
              ) : (
                <Link href={movieInfo?.homepage ? movieInfo?.homepage : "#"}>
                  <button>
                    <span>WEBSITE</span>
                    <MdLink />
                  </button>
                </Link>
              )}

              <Link
                href={`https://imdb.com/title/${movieInfo?.imdb_id}` || "#"}
                target="_blank"
              >
                <button>
                  <span>IMDB</span>
                  <MdLocalMovies />
                </button>
              </Link>
              <Link href="#">
                <button>
                  <span>TRAILER</span>
                  <MdMovie />
                </button>
              </Link>
            </div>
          </div>

          {/* MOVIE DETAIL */}
          <div className={Style.movieInformation_detail}>
            {/* Information */}
            <h1>{movieInfo?.title}</h1>
            <p>
              {movieInfo?.runtime} min | Language:{" "}
              {movieInfo?.spoken_languages[0]?.name} |
              <strong> Rating: 52/100</strong>
            </p>

            {/* Category Icons */}
            <div className={Style.movieInformation_category}>
              {movieInfo?.genres?.map((genre, key) => (
                <Link
                  href="/"
                  key={key}
                  onClick={() => dispatch(selectGenreOrCategory(genre.id))}
                >
                  <p className={Style.categoryItem}>
                    <Image
                      className={themeMode ? "imageDark" : "imageWhite"}
                      src={genreIcon[genre.name.toLowerCase()]}
                      alt="category"
                      height={38}
                    />
                    <span>{genre.name}</span>
                  </p>
                </Link>
              ))}
            </div>

            {/* MOVIE DESCRIPTION */}
            <h2>Overview</h2>
            {/* <p className={Style.overview}></p> */}
            <p className={Style.overview_info}>{movieInfo?.overview}</p>

            <h2>Top Cast</h2>
            <div className={Style.topCast}>
              {movieInfo &&
                movieInfo.credits.cast.slice(0, 6).map((character, key) => (
                  <Link href={`/actors/${character?.id}` || "#"} key={key}>
                    <div className={Style.cast}>
                      <img
                        src={`https://image.tmdb.org/t/p/original${character.profile_path}`}
                        alt={character?.original_title}
                      />
                      <p>{character.name}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}

      {/*-------------RECOMMENDED MOVIES------------*/}
      <div className={Style.recommended}>
        <h1>You might also like</h1>
        <Movie movies={recommendation} isFetching={isRecommendationFetching} />
      </div>
    </div>
  );
};

export default MovieInformation;
