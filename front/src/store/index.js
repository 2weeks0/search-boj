import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./slices/teamSlice";
import filterReducer from "./slices/filterSlice";

export default configureStore({
  reducer: {
    team: teamReducer,
    filter: filterReducer,
  },
});
