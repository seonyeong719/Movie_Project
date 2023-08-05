import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUpComing } from "../../Apis/api";

const initialState = {
  up: null,
  loading: false,
  done: false,
  error: null,
};

export const getUpComingList = createAsyncThunk("up/getUpComing", async (pageParam) => {
  const res = await getUpComing(pageParam);
  return res;
});

const upComingSlice = createSlice({
  name: "up",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUpComingList.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getUpComingList.fulfilled, (state, action) => {
      state.up = action.payload;
      state.loading = false;
      state.done = true;
      state.error = null;
    });

    builder.addCase(getUpComingList.rejected, (state, action) => {
      state.loading = false;
      state.done = true;
      state.error = action.payload;
    });
  },
});

export default upComingSlice;
