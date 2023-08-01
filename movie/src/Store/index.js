import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { moviesSlice } from "./Slice/movieSlice";
import nowPlaySlice from "./Slice/nowSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    nowPlay: nowPlaySlice.reducer,
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
