import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSearch } from "../../Apis/api";

const initialState = {
  search: null,
  loading: false,
  done: false,
  error: null,
};

export const getSearchList = createAsyncThunk("search/getSearch", async ({ title }) => {
  const res = await getSearch({ title });
  return res;
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSearchList.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getSearchList.fulfilled, (state, action) => {
      state.search = action.payload;
      state.loading = false;
      state.done = true;
      state.error = null;
    });

    builder.addCase(getSearchList.rejected, (state, action) => {
      state.loading = false;
      state.done = true;
      state.error = action.payload;
    });
  },
});

export default searchSlice;
