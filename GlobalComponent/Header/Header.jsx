import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdBrightnessHigh, MdBrightnessLow } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./Header.module.css";
import { Profile, Form } from "../index";
import images from "../Images/index";
import {
  selectGenreOrCategory,
  searchMovie,
  setThemeColor,
} from "../../api/currentGenreOrCategory";

const Header = ({ menuOpen, setMenuOpen, openLogin, setOpenLogin }) => {
  // STATE VARIABLES
  const [query, setQuery] = useState("");
  const [fromModal, setFormModal] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const dispatch = useDispatch();

  // MANAGE THEME
  const { themeMode } = useSelector((state) => {
    return state.currentGenreOrCategory;
  });

  // Search Enter Key Press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };

  return (
    <div className={Style.Header} id="top">
      {/* Search */}
      <div className={Style.header_box}>
        {pathname == "/" ? (
          <div className={Style.search}>
            <input
              type="search"
              placeholder="search movies"
              onKeyPress={handleKeyPress}
              onChange={(e) => setQuery(e.target.value)}
            />
            <BsSearch />
          </div>
        ) : (
          <div className={Style.logoShow}>
            <div className={Style.logoShow_img}>
              {themeMode ? (
                <Link href="/">
                  <Image
                    src={images.lightLogo}
                    width={150}
                    alt="darkLogo"
                    height="auto"
                  />
                </Link>
              ) : (
                <Link href="/">
                  <Image
                    src={images.darkLogo}
                    width={150}
                    alt="lightLogo"
                    height="auto"
                  />
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Toggle */}
        <div className={Style.toggle}>
          <div className={Style.toggle_avatar}>
            <RxAvatar
              className={Style.header_box_avatar}
              onClick={() => {
                openLogin ? setOpenLogin(false) : setOpenLogin(true);
              }}
            />

            {openLogin && (
              <Profile
                setOpenLogin={setOpenLogin}
                setFormModal={setFormModal}
              />
            )}
          </div>

          {themeMode ? (
            <MdBrightnessHigh onClick={() => dispatch(setThemeColor(false))} />
          ) : (
            <MdBrightnessLow onClick={() => dispatch(setThemeColor(true))} />
          )}

          {/*Mobile MenuButton */}
          <div className={Style.menuBtn}>
            <HiMenuAlt1
              onClick={() =>
                menuOpen ? setMenuOpen(false) : setMenuOpen(true)
              }
            />
          </div>
        </div>
      </div>

      {fromModal && <Form themeMode={themeMode} setFormModal={setFormModal} />}
    </div>
  );
};

export default Header;
