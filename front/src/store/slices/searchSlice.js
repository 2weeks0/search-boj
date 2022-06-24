import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { search } from "../../api";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searched: undefined,
  },
  extraReducers: (builder) => {
    builder.addCase(searchThunk.fulfilled, (state, action) => {
      state.searched = action.payload;
    });
  },
});

export const searchThunk = createAsyncThunk(
  "search/search",
  async ({ team, page }) => await search({ team, page })
);

export const selectSearched = (state) => state.search.searched;
export default searchSlice.reducer;
