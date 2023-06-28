import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdBrightnessHigh, MdBrightnessLow } from "react-icons/md";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

// INTERNAL IMPORT
import Style from "./Header.module.css";

const Header = ({ menuOpen, setMenuOpen, themeMode, SetThemeMode }) => {
  return (
    <div className={Style.Header}>
      {/* Search */}
      <div className={Style.header_box}>
        {" "}
        <div className={Style.search}>
          <BsSearch />
          <input type="search" placeholder="search movies" />
        </div>
        {/* Toggle */}
        <div className={Style.toggle}>
          {themeMode ? (
            <MdBrightnessHigh onClick={() => SetThemeMode(false)} />
          ) : (
            <MdBrightnessLow onClick={() => SetThemeMode(true)} />
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
    </div>
  );
};

export default Header;
