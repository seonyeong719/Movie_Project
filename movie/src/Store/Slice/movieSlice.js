import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../../Apis/api";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export const getMovie = createAsyncThunk("movies/getMovies", async ({ pageParam }) => {
  const res = await getMovies(pageParam);
  return res.data;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovie.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.movies = [...state.movies, ...action.payload.results];
      state.loading = false;
      state.error = null;
    });

    builder.addCase(getMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default moviesSlice;
