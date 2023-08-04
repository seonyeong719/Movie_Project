import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTopRated } from "../../Apis/api";

const initialState = {
  top: null,
  loading: false,
  done: false,
  error: null,
};

export const getTopList = createAsyncThunk("top/getTopRated", async ({ pageParam }) => {
  const res = await getTopRated({ pageParam });
  return res;
});

const topRatedSlice = createSlice({
  name: "top",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTopList.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getTopList.fulfilled, (state, action) => {
      state.top = action.payload;
      state.loading = false;
      state.done = true;
      state.error = null;
    });

    builder.addCase(getTopList.rejected, (state, action) => {
      state.loading = false;
      state.done = true;
      state.error = action.payload;
    });
  },
});

export default topRatedSlice;
