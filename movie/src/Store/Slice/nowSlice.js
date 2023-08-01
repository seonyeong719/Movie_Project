import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNowPlaying } from "../../Apis/api";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export const getNowPlay = createAsyncThunk("nowPlay/getNowPlaying", async ({ pageParam }) => {
  const res = await getNowPlaying(pageParam);
  return res.data;
});

export const nowPlaySlice = createSlice({
  name: "nowPlay",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getNowPlay.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getNowPlay.fulfilled, (state, action) => {
      state.movies = [...state.movies, ...action.payload.results];
      state.loading = false;
      state.error = null;
    });

    builder.addCase(getNowPlay.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default nowPlaySlice;
