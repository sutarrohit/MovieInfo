import React from "react";

// INTERNAL IMPORT
import Style from "./Category.module.css";
import { Header, Movie, FeatureMovie, Pagination, Error } from "../index";

const Category = ({
  menuOpen,
  setMenuOpen,
  themeMode,
  movies,
  currentPage,
  totalPages,
  setPage,
  isFetching,
  Loader,
}) => {
  return (
    <div
      className={`${Style.Category} ${themeMode ? "darkMode" : "lightMode"}`}
    >
      {isFetching ? (
        <Loader />
      ) : movies?.results.length === 0 ? (
        <>
          <Header
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            themeMode={themeMode}
          />

          <Error themeMode={themeMode} />
        </>
      ) : (
        <div className={Style.category_box}>
          <Header
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            themeMode={themeMode}
          />
          <FeatureMovie
            themeMode={themeMode}
            isFetching={isFetching}
            movie={movies?.results[0]}
            excludeFirst={""}
          />
          <Movie
            themeMode={themeMode}
            isFetching={isFetching}
            movies={movies}
            excludeFirst={true}
          />
          <Pagination
            themeMode={themeMode}
            currentPage={currentPage}
            setPage={setPage}
            totalPages={totalPages}
          />
        </div>
      )}

      {/* -------------------------------------------- */}
    </div>
  );
};

export default Category;
