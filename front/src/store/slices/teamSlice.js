import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchUser } from "../../api";

const teamSlice = createSlice({
  name: "team",
  initialState: {
    team: localStorage.team ? JSON.parse(localStorage.team) : [],
    user: undefined,
  },
  reducers: {
    addTeammate(state) {
      if (state.team.find((it) => it.handle === state.user.handle)) {
        return;
      }
      state.team.push(state.user);
      localStorage.team = JSON.stringify(state.team);
    },
    removeTeammate(state, action) {
      const index = state.team.findIndex((it) => it.handle === action.payload.handle);
      state.team.splice(index, 1);
      localStorage.team = JSON.stringify(state.team);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchUserThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { addTeammate, removeTeammate } = teamSlice.actions;

export const searchUserThunk = createAsyncThunk(
  "team/searchUser",
  async (id) => await searchUser(id)
);

export const selectTeam = (state) => state.team.team;
export const selectUser = (state) => state.team.user;
export default teamSlice.reducer;
