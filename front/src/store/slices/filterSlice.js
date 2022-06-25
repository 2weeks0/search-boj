import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    tier: localStorage.tierFilter ? JSON.parse(localStorage.tierFilter) : [],
  },
  reducers: {
    filterTier(state, action) {
      const idx = state.tier.indexOf(+action.payload);
      if (idx !== -1) {
        state.tier.splice(idx, 1);
      } else {
        state.tier.push(+action.payload);
      }
      localStorage.tierFilter = JSON.stringify(state.tier);
    },
    filterTierAll(state, action) {
      const arr = [];
      const tier = +action.payload.substring(0, action.payload.length - 2);

      for (let i = 0; i < 5; i++) {
        if (!state.tier.includes(tier + i)) {
          arr.push(tier + i);
        }
      }

      if (arr.length === 0) {
        for (let i = 0; i < 5; i++) {
          state.tier.splice(state.tier.indexOf(tier + i), 1);
        }
      } else {
        state.tier.push(...arr);
      }

      localStorage.tierFilter = JSON.stringify(state.tier);
    },
  },
});

export const { filterTier, filterTierAll } = filterSlice.actions;

export const selectTierFilter = (state) => state.filter.tier;
export default filterSlice.reducer;
