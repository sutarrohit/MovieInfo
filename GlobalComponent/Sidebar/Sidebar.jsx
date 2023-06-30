import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

// INTERNAL IMPORT
import Style from "./Sidebar.module.css";
import { Loader } from "../index";
import images from "../Images/index";
import genreIcons from "../Images/genres/index";
import { selectGenreOrCategory } from "../../api/currentGenreOrCategory";
import { useGetGenresQuery } from "../../api/TMDB";

const Sidebar = ({ menuOpen, setMenuOpen, themeMode }) => {
  // API CALLS
  const { genreIdOrCategoryName } = useSelector((state) => {
    return state.currentGenreOrCategory;
  });
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  // CATEGORIES LIST
  const categories = [
    {
      label: "Popular",
      value: "popular",
    },
    {
      label: "Top Rated",
      value: "topRated",
    },
    {
      label: "Upcoming",
      value: "upcoming",
    },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [genreIdOrCategoryName]);

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
              width={220}
              height={90}
            />
          </div>
        </Link>

        {/* --------------CATEGORIES------------------ */}
        <div className={Style.categories}>
          <p>
            {""}
            <strong>Categories</strong>
          </p>

          {categories.map(({ label, value }) => (
            <Link href="/" key={value}>
              {""}
              <p
                className={Style.link_box}
                onClick={() => dispatch(selectGenreOrCategory(value))}
              >
                <Image
                  className={themeMode ? "imageDark" : "ImageWhite"}
                  src={genreIcons[label.toLowerCase()]}
                  alt="categoryLogo"
                  height={38}
                />
                <span>{label}</span>
              </p>
            </Link>
          ))}
        </div>

        {/*----------------GENRES-------------------*/}

        <div className={Style.genres}>
          <p>
            <strong>Genres</strong>
          </p>

          {isFetching ? (
            <Loader />
          ) : (
            data.genres.map(({ name, id }) => (
              <Link href="/" key={id}>
                <p
                  className={Style.link_box}
                  onClick={() => dispatch(selectGenreOrCategory(id))}
                >
                  <Image
                    className={themeMode ? "imageDark" : "ImageWhite"}
                    src={genreIcons[name.toLowerCase()]}
                    alt="categoryLogo"
                    height={38}
                  />
                  <span>{name}</span>
                </p>
              </Link>
            ))
          )}
        </div>

        {/* -------------------------------------- */}
      </div>
    </div>
  );
};

export default Sidebar;
