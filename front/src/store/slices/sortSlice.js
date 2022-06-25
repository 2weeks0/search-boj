import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    value: localStorage.sort
      ? JSON.parse(localStorage.sort)
      : {
          direction: "asc",
          key: "id",
        },
  },
  reducers: {
    setSort(state, action) {
      if (state.value.key === action.payload) {
        state.value.direction = state.value.direction === "asc" ? "desc" : "asc";
      } else {
        state.value = {
          key: action.payload,
          direction: "asc",
        };
      }
      localStorage.sort = JSON.stringify(state.value);
    },
  },
});

export const { setSort } = sortSlice.actions;

export const selectSort = (state) => state.sort.value;
export default sortSlice.reducer;
