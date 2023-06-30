import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// INTERNAL IMPORT
import { tmbdApi } from "./TMDB";
import genreOrCategoryReducer from "./currentGenreOrCategory";

export default configureStore({
  reducer: {
    [tmbdApi.reducerPath]: tmbdApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmbdApi.middleware),
});
