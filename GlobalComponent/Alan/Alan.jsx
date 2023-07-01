import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  selectGenreOrCategory,
  searchMovie,
} from "../../api/currentGenreOrCategory";

const useAlan = () => {
  const dispatch = useDispatch();
  const history = useRouter();

  const ALAN_AI_SDK_KEY = process.env.NEXT_PUBLIC_ALAN_AI_SDK_KEY;

  useEffect(() => {
    window?.alanBtn({
      key: ALAN_AI_SDK_KEY,
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
          );

          if (foundGenre) {
            history.push("/");
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith("top")
              ? "top_rated"
              : genreOrCategory;
            history.push("/");
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === "changeMode") {
          if (mode === "light") {
            dispatch(selectGenreOrCategory(false));
          } else {
            dispatch(selectGenreOrCategory(true));
          }
        } else if (command === "search") {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);

  return <div class="alan-btn" />;
};

export default useAlan;
