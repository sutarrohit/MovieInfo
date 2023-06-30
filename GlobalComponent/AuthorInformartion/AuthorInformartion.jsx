import React from "react";
import Image from "next/image";
import Link from "next/link";

// INTERNAL IMPORT
import Style from "./AuthorInformartion.module.css";
import actor from "../Images/actor/index";
import { Movie } from "../index";

const AuthorInformartion = ({ themeMode, actor, actorMovies }) => {
  return (
    <div
      className={`${Style.AuthorInformartion} ${
        themeMode ? "darkMode" : "lightMode"
      }`}
    >
      <div className={Style.AuthorInformartion_box}>
        <div className={Style.AuthorInformartion_image}>
          <img
            className={Style.image}
            src={
              actor?.profile_path
                ? `https://image.tmdb.org/t/p/original${actor?.profile_path}`
                : "https://www.fillmurray.com/200/300"
            }
            alt={actor?.name}
          />
        </div>

        {/*Author Info  */}

        <div className={Style.authorInfo}>
          <h1>{actor?.name}</h1>
          <p>
            Bron:{" "}
            <strong>
              {new Date(actor?.birthday).toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </strong>
          </p>
          <p className={Style.authorInfoBio}>
            {actor?.biography || "Sorry, no biography yet..."}
          </p>

          {/* Button */}
          <div className={Style.button}>
            <Link
              href={`https://imdb.com/name/${actor?.imdb_id}`}
              target="_blank"
            >
              <button>IMDB</button>
            </Link>
            <Link href="/">
              <button>Back</button>
            </Link>
          </div>
        </div>
      </div>

      {/* ACTOR MOVIE */}
      <div className={Style.actorMovies}>
        <h1>All The Movies</h1>
        {actorMovies && <Movie movies={actorMovies} />}
      </div>
    </div>
  );
};

export default AuthorInformartion;
