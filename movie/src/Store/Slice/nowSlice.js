import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNowPlaying } from "../../Apis/api";

const initialState = {
  nowPlay: null,
  loading: false,
  done: false,
  error: null,
};

export const getNowPlay = createAsyncThunk("nowPlay/getNowPlaying", async ({ pageParam }) => {
  const res = await getNowPlaying({ pageParam });
  return res;
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
      state.nowPlay = action.payload;
      state.loading = false;
      state.done = true;
      state.error = null;
    });

    builder.addCase(getNowPlay.rejected, (state, action) => {
      state.loading = false;
      state.done = true;
      state.error = action.payload;
    });
  },
});

export default nowPlaySlice;
