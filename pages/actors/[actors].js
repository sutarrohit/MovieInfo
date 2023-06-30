import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// INTERNAL IMPORT
import { Sidebar, AutorDetail, Loader } from "@/GlobalComponent";
import { selectGenreOrCategory } from "../../api/currentGenreOrCategory";
import {
  useGetActorsDetailsQuery,
  useGetMoviesByActorIdQuery,
} from "../../api/TMDB";
import actor from "@/GlobalComponent/Images/actor";

const author = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState(1);

  const { themeMode } = useSelector((state) => state.currentGenreOrCategory);

  const router = useRouter();
  const id = router.query.actors;

  const { data, isFetching, error } = useGetActorsDetailsQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });

  return (
    <div className={` ${"container"}  ${themeMode ? "darkMode" : "lightMode"}`}>
      <Sidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        themeMode={themeMode}
      />

      {isFetching ? (
        <Loader />
      ) : (
        <AutorDetail
          actor={data}
          actorMovies={movies}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          themeMode={themeMode}
        />
      )}
    </div>
  );
};

export default author;
