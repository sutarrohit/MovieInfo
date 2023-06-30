import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./Movie.module.css";
import images from "../Images/index";
import Link from "next/link";

const Movie = () => {
  // Dummy Data

  const movieList = [
    {
      name: "Jungle Book",
      rating: 1,
      image: images.MovieImg,
    },
    {
      name: "Jungle Book",
      rating: 3,
      image: images.MovieImg,
    },
    {
      name: "Jungle Book",
      rating: 4,
      image: images.MovieImg,
    },
    {
      name: "Jungle Book",
      rating: 3,
      image: images.MovieImg,
    },
    {
      name: "Jungle Book",
      rating: 5,
      image: images.MovieImg,
    },
  ];

  return (
    <div className={Style.Movie}>
      <div className={Style.movie_box}>
        {/*-------Card----- */}
        {movieList.map((el, key) => (
          <Link href="movie/2" key={key}>
            <div className={Style.movie_card}>
              <Image
                src={el.image}
                alt={el.name}
                className={Style.movie_card_img}
              />

              {/* Info */}

              <div className={Style.movie_info}>
                <h5>{el.name}</h5>

                {el.rating == 1 ? (
                  <Image src={images.star} alt={el.name} width={20} />
                ) : el.rating == 2 ? (
                  <>
                    <Image src={images.star} alt={el.name} width={20} />
                    <Image src={images.star} alt={el.name} width={20} />
                  </>
                ) : el.rating == 3 ? (
                  <>
                    <Image src={images.star} alt={el.name} width={20} />
                    <Image src={images.star} alt={el.name} width={20} />
                    <Image src={images.star} alt={el.name} width={20} />
                  </>
                ) : el.rating == 4 ? (
                  <>
                    <Image src={images.star} alt={el.name} width={20} />
                    <Image src={images.star} alt={el.name} width={20} />
                    <Image src={images.star} alt={el.name} width={20} />
                    <Image src={images.star} alt={el.name} width={20} />
                  </>
                ) : (
                  <>
                    <Image src={images.star} alt={el.name} width={20} />
                    <Image src={images.star} alt={el.name} width={20} />
                    <Image src={images.star} alt={el.name} width={20} />
                    <Image src={images.star} alt={el.name} width={20} />
                    <Image src={images.star} alt={el.name} width={20} />
                  </>
                )}
              </div>

              {/*  */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movie;
