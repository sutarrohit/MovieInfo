import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

// INTERNAL IMPORT
import Style from "./Movie.module.css";
import images from "../Images/index";
import Link from "next/link";
import { Loader } from "../index";

const Movie = ({ themeMode, isFetching, movies, excludeFirst }) => {
  const startFrom = excludeFirst ? 1 : 0;

  return (
    <div className={Style.Movie} id="skills">
      <div className={Style.movie_box}>
        {/*-------Card----- */}

        {isFetching ? (
          <Loader />
        ) : (
          movies?.results.slice(startFrom, 13).map((movie, key) => (
            <Link href={`/movie/${movie.id}`} key={key}>
              <div className={Style.movie_card}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`
                      : "#"
                  }
                  alt={movie.original_title}
                  className={Style.movie_card_img}
                />

                {/* Info */}

                <div className={Style.movie_info}>
                  <h5>{movie.original_title}</h5>

                  {movie.vote_average <= 2 ? (
                    <Image src={images.star} alt={"Rating"} width={20} />
                  ) : movie.vote_average <= 4 ? (
                    <>
                      <Image src={images.star} alt={"Rating"} width={20} />
                      <Image src={images.star} alt={"Rating"} width={20} />
                    </>
                  ) : movie.vote_average <= 6 ? (
                    <>
                      <Image src={images.star} alt={"Rating"} width={20} />
                      <Image src={images.star} alt={"Rating"} width={20} />
                      <Image src={images.star} alt={"Rating"} width={20} />
                    </>
                  ) : movie.vote_average <= 8 ? (
                    <>
                      <Image src={images.star} alt={"Rating"} width={20} />
                      <Image src={images.star} alt={"Rating"} width={20} />
                      <Image src={images.star} alt={"Rating"} width={20} />
                      <Image src={images.star} alt={"Rating"} width={20} />
                    </>
                  ) : (
                    <>
                      <Image src={images.star} alt={"Rating"} width={20} />
                      <Image src={images.star} alt={"Rating"} width={20} />
                      <Image src={images.star} alt={"Rating"} width={20} />
                      <Image src={images.star} alt={"Rating"} width={20} />
                      <Image src={images.star} alt={"Rating"} width={20} />
                    </>
                  )}
                </div>

                {/*  */}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Movie;
