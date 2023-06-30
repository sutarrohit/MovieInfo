import React from "react";

// INTERNAL IMPORT
import Style from "./Category.module.css";
import { Header, Movie, FeatureMovie, Pagination } from "../index";
const Category = ({ menuOpen, setMenuOpen, themeMode, SetThemeMode }) => {
  return (
    <div
      className={`${Style.Category} ${themeMode ? "darkMode" : "lightMode"}`}
    >
      <div className={Style.category_box}>
        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          themeMode={themeMode}
          SetThemeMode={SetThemeMode}
        />
        <FeatureMovie themeMode={themeMode} SetThemeMode={SetThemeMode} />
        <Movie themeMode={themeMode} SetThemeMode={SetThemeMode} />
        <Pagination themeMode={themeMode} SetThemeMode={SetThemeMode} />
      </div>

      {/* -------------------------------------------- */}
    </div>
  );
};

export default Category;
