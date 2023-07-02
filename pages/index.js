import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// INTERNAL IMPORT
import { Category, Sidebar, Loader } from "../GlobalComponent/index";
import { useGetMoviesQuery } from "../api/TMDB";

const Home = () => {
  // STATE VARIABLES
  const [menuOpen, setMenuOpen] = useState(false);

  // MANAGE STATE
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery, themeMode } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  // Fetching Movie Data
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  return (
    <div className={` ${"container"}  ${themeMode ? "darkMode" : "lightMode"}`}>
      <Sidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        themeMode={themeMode}
      />

      <Category
        movies={data}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        themeMode={themeMode}
        currentPage={page}
        setPage={setPage}
        totalPages={isFetching ? "" : data?.total_pages}
        isFetching={isFetching}
        Loader={Loader}
      />
    </div>
  );
};

export default Home;
