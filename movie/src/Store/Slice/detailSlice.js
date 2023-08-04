import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetail } from "../../Apis/api";

const initialState = {
  detail: null,
  loading: false,
  done: false,
  error: null,
};

export const getDetailList = createAsyncThunk("detail/getDetail", async ({ pageParam }) => {
  const res = await getDetail({ pageParam });
  return res;
});

const detailSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetailList.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getDetailList.fulfilled, (state, action) => {
      state.detail = action.payload;
      state.loading = false;
      state.done = true;
      state.error = null;
    });

    builder.addCase(getDetailList.rejected, (state, action) => {
      state.loading = false;
      state.done = true;
      state.error = action.payload;
    });
  },
});

export default detailSlice;
