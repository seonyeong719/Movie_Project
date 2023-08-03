import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import nowPlaySlice from "./Slice/nowSlice";
import moviesSlice from "./Slice/movieSlice";
import searchSlice from "./Slice/searchSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    nowPlay: nowPlaySlice.reducer,
    search: searchSlice.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === "development") {
      return [...getDefaultMiddleware(), logger];
    }
    return getDefaultMiddleware();
  },
});

export default store;
