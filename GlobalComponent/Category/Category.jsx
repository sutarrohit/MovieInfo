import React, { useState } from "react";
import dynamic from "next/dynamic";

// INTERNAL IMPORT
import Style from "./Category.module.css";
import {
  Header,
  Movie,
  FeatureMovie,
  Pagination,
  Error,
  Donate,
} from "../index";

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
  // STATE VARIABLES
  const [openLogin, setOpenLogin] = useState(false);
  const [openDonate, setOpenDonate] = useState(true);
  const UseAlan = dynamic(() => import("../Alan/Alan"));

  return (
    <div
      className={`${Style.Category} ${themeMode ? "darkMode" : "lightMode"}`}
    >
      {isFetching ? (
        <Loader />
      ) : movies?.results.length === 0 ? (
        <>
          {openDonate && <Donate setOpenDonate={setOpenDonate} />}

          <Header
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            themeMode={themeMode}
          />

          <Error themeMode={themeMode} />
        </>
      ) : (
        <div className={Style.category_box}>
          {openDonate && <Donate setOpenDonate={setOpenDonate} />}
          <Header
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            themeMode={themeMode}
          />
          <UseAlan />
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
