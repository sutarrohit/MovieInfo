import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./FeatureMovie.module.css";
import images from "../Images/index";

const FeatureMovie = ({ themeMode, SetThemeMode }) => {
  return (
    <div className={Style.Featuremovie}>
      <div className={Style.Featuremovie_box}>
        <Image
          className={Style.Featuremovie_box_img}
          src={images.coverImage}
          alt="Feature Image"
        />
        {/* ----- */}

        <div className={`${Style.movieInfo}`}>
          <div
            className={`${Style.movieInfo_movie}  ${
              themeMode ? "colorWhite" : "colorWhite"
            }`}
          >
            <h5>Plan</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo non quas cum dolore accusantium, inventore delectus
              aperiam commodi. Quam sapiente optio aliquid suscipit, debitis
              expedita tempora perspiciatis veniam sunt non?
            </p>
          </div>
        </div>
        {/* ----- */}
      </div>
    </div>
  );
};

export default FeatureMovie;
