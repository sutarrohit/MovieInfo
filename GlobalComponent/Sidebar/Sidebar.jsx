import React from "react";
import Image from "next/image";
import Link from "next/link";

// INTERNAL IMPORT
import Style from "./Sidebar.module.css";
import images from "../Images/index";
import genreIcons from "../Images/genres/index";

const Sidebar = ({ menuOpen, setMenuOpen, themeMode, SetThemeMode }) => {
  // CATEGORIES LIST
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

  // GENRES
  const genres = [
    {
      name: "Action",
      icon: "action",
    },
    {
      name: "Animation",
      icon: "animation",
    },
    {
      name: "Upcoming",
      icon: "upcoming",
    },
    {
      name: "Adenture",
      icon: "adventure",
    },
    {
      name: "Comedy",
      icon: "comedy",
    },
    {
      name: "Crime",
      icon: "crime",
    },
    {
      name: "Drama",
      icon: "drama",
    },
    {
      name: "Documentary",
      icon: "documentary",
    },
    {
      name: "Family",
      icon: "family",
    },
    {
      name: "Fantasy",
      icon: "fantasy",
    },
    {
      name: "History",
      icon: "history",
    },
    {
      name: "Horror",
      icon: "horror",
    },
    {
      name: "Music",
      icon: "music",
    },
    {
      name: "Mystery",
      icon: "mystery",
    },
    {
      name: "Romance",
      icon: "romance",
    },
    {
      name: "Thriller",
      icon: "thriller",
    },
    {
      name: "Tv Movie",
      icon: "tv movie",
    },
    {
      name: "War",
      icon: "war",
    },
    {
      name: "Western",
      icon: "western",
    },
  ];
  return (
    <div
      className={
        menuOpen
          ? `${Style.Sidebar} ${Style.sliderMenuOpen}`
          : `${Style.Sidebar} ${Style.sliderMenuClose}`
      }
    >
      <div
        className={`${Style.Sidebar_box} ${
          themeMode ? "darkMode" : "lightMode"
        }`}
      >
        {/* --------------LOGO-------------------- */}
        <Link href="/">
          <div className={Style.logo}>
            <Image
              className={`${themeMode ? "imageDark" : "imageWhite"} ${
                Style.logo_mobile
              }`}
              src={images.darkLogo}
              alt="logo"
              width={250}
              height={110}
            />
          </div>
        </Link>

        {/* --------------CATEGORIES------------------ */}
        <div className={Style.categories}>
          <p>
            {""}
            <strong>Categories</strong>
          </p>

          {categories.map((el, key) => (
            <Link href="" key={key}>
              {""}
              <p className={Style.link_box}>
                <Image
                  className={themeMode ? "imageDark" : "ImageWhite"}
                  src={genreIcons[el.icon]}
                  alt="categoryLogo"
                  height={38}
                />
                <span>{el.name}</span>
              </p>
            </Link>
          ))}
        </div>

        {/*----------------GENRES-------------------*/}

        <div className={Style.genres}>
          <p>
            <strong>Genres</strong>
          </p>
          {genres.map((el, key) => (
            <Link href="#" key={key}>
              <p className={Style.link_box}>
                <Image
                  className={themeMode ? "imageDark" : "ImageWhite"}
                  src={genreIcons[el.icon]}
                  alt="categoryLogo"
                  height={38}
                />
                <span>{el.name}</span>
              </p>
            </Link>
          ))}
        </div>

        {/* -------------------------------------- */}
      </div>
    </div>
  );
};

export default Sidebar;
