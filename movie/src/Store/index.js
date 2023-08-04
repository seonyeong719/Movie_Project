import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import nowPlaySlice from "./Slice/nowSlice";
import moviesSlice from "./Slice/movieSlice";
import searchSlice from "./Slice/searchSlice";
import topRatedSlice from "./Slice/topSlice";
import upComingSlice from "./Slice/upSlice";
import detailSlice from "./Slice/detailSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    nowPlay: nowPlaySlice.reducer,
    search: searchSlice.reducer,
    top: topRatedSlice.reducer,
    up: upComingSlice.reducer,
    detail: detailSlice.reducer,
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
