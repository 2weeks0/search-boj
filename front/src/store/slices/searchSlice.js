import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { search } from "../../api";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searched: undefined,
    page: 1,
  },
  reducers: {
    plusPage(state) {
      state.page = state.page + 1;
    },
    resetPage(state) {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchThunk.fulfilled, (state, action) => {
      if (state.searched?.items) {
        state.searched.items.push(...action.payload.items);
      } else {
        state.searched = action.payload;
      }
    });
  },
});

export const { plusPage, resetPage } = searchSlice.actions;

export const searchThunk = createAsyncThunk(
  "search/search",
  async ({ team, page }) => await search({ team, page })
);

export const selectSearched = (state) => state.search.searched;
export const selectPage = (state) => state.search.page;
export default searchSlice.reducer;
