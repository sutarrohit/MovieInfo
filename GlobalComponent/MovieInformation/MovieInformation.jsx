import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMovie, MdLocalMovies, MdLink } from "react-icons/md";

// ITERNAL IMPORT
import Style from "./MovieInformation.module.css";
import images from "../Images/index";
import genreIcon from "../Images/genres/index";
import actor from "../Images/actor/index";
import { Movie } from "../index";

const MovieInformation = ({ themeMode }) => {
  // CATEGORIES
  const categories = [
    {
      name: "Popular",
      icon: "popular",
    },
    {
      name: "Top Rated",
      icon: "topRated",
    },
    {
      name: "Upcoming",
      icon: "upcoming",
    },
  ];

  const topCast = [
    {
      name: "Nancy Jones",
      images: actor.actor,
    },
    {
      name: "Nancy Jones",
      images: actor.actor1,
    },
    {
      name: "Nancy Jones",
      images: actor.actor2,
    },
    {
      name: "Nancy Jones",
      images: actor.actor4,
    },
    {
      name: "Nancy Jones",
      images: actor.actor5,
    },
  ];

  return (
    <div className={Style.MovieInformation}>
      <div className={Style.MovieInformation_box}>
        {/* IMAGES */}
        <div className={Style.MovieInformation_image}>
          <Image
            className={Style.image}
            src={images.MovieImg}
            alt="movieImage"
          />
          {/*Buttons */}
          <div className={Style.button}>
            <Link href="#">
              <button>
                <span>WEBSITE</span>
                <MdLink />
              </button>
            </Link>
            <Link href="#">
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
          <h1>The Simpsons Meet The Becellis In The Feliz Navidad</h1>
          <p>
            4min | Language : English <strong> Rating: 52/100</strong>
          </p>

          {/* Category Icons */}
          <div className={Style.movieInformation_category}>
            {categories.map((el, key) => (
              <Link href="#" key={key}>
                <p className={Style.categoryItem}>
                  <Image
                    className={themeMode ? "imageDark" : "imageWhite"}
                    src={genreIcon[el.icon]}
                    alt="category"
                    height={38}
                  />
                  <span>{el.name}</span>
                </p>
              </Link>
            ))}
          </div>

          {/* MOVIE DESCRIPTION */}
          <h2>Overview</h2>
          {/* <p className={Style.overview}></p> */}
          <p className={Style.overview_info}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            commodi qui harum, ex aut quam dignissimos labore excepturi iste
            eligendi nihil voluptatibus ducimus necessitatibus. Reprehenderit
            laboriosam molestiae eaque eius libero.
          </p>

          <h2>Top Cast</h2>
          <div className={Style.topCast}>
            {topCast.map((el, key) => (
              <Link href="/author/4" key={key}>
                <div className={Style.cast}>
                  <Image
                    className={Style.castImage}
                    src={el.images}
                    alt={el.name}
                  />
                  <p>{el.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/*-------------RECOMMENDED MOVIES------------*/}
      <div className={Style.recommended}>
        <h1>You might also like</h1>
        <Movie />
      </div>
    </div>
  );
};

export default MovieInformation;
