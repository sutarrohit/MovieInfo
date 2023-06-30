import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// INTENAL IMPORT
import { MovieDetail, Sidebar } from "@/GlobalComponent";
import { useGetMovieQuery, useGetRecommendationsQuery } from "../../api/TMDB";

const movie = () => {
  // STATE VARIABLES
  const { themeMode } = useSelector((state) => state.currentGenreOrCategory);
  const [menuOpen, setMenuOpen] = useState(false);

  // GET API DATA
  const router = useRouter();
  const moiveId = router.query.movie;

  const { data, isFetching, error } = useGetMovieQuery(moiveId);

  const { data: recommendation, isFetching: isRecommendationFetching } =
    useGetRecommendationsQuery({ list: "/recommendations", movie_id: moiveId });

  return (
    <div className={` ${"container"}  ${themeMode ? "darkMode" : "lightMode"}`}>
      <Sidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        themeMode={themeMode}
      />

      <MovieDetail
        movieInfo={data}
        isFetching={isFetching}
        recommendation={recommendation}
        isRecommendationFetching={isRecommendationFetching}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        themeMode={themeMode}
      />
    </div>
  );
};

export default movie;
