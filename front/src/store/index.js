import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./slices/teamSlice";
import searchReducer from "./slices/searchSlice";

export default configureStore({
  reducer: {
    team: teamReducer,
    search: searchReducer,
  },
});
