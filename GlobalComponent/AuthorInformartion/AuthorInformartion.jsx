import React from "react";
import Image from "next/image";
import Link from "next/link";

// INTERNAL IMPORT
import Style from "./AuthorInformartion.module.css";
import actor from "../Images/actor/index";
import { Movie } from "../index";

const AuthorInformartion = () => {
  return (
    <div className={Style.AuthorInformartion}>
      <div className={Style.AuthorInformartion_box}>
        <div className={Style.AuthorInformartion_image}>
          <Image className={Style.image} src={actor.actor} alt="actor" />
        </div>

        {/*Author Info  */}

        <div className={Style.authorInfo}>
          <h1>Rohit Sutar</h1>
          <p>
            Bron: <strong>1996</strong>
          </p>
          <p className={Style.authorInfoBio}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, alias
            voluptatem! Esse, repellat quisquam facilis harum sed nisi voluptate
            hic architecto perferendis laboriosam amet similique temporibus
            necessitatibus, cumque tempora a!
          </p>

          {/* Button */}
          <div className={Style.button}>
            <Link href="#">
              <button>IMDB</button>
            </Link>
            <Link href="#">
              <button>Back</button>
            </Link>
          </div>
        </div>
      </div>

      {/* ACTOR MOVIE */}
      <div className={Style.actorMovies}>
        <h1>All The Movies</h1>
        <Movie />
      </div>
    </div>
  );
};

export default AuthorInformartion;
