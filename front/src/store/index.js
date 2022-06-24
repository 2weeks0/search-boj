import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./slices/teamSlice";
import filterReducer from "./slices/filterSlice";
import sortReducer from "./slices/sortSlice";

export default configureStore({
  reducer: {
    team: teamReducer,
    filter: filterReducer,
    sort: sortReducer,
  },
});
