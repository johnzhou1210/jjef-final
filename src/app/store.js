import { configureStore } from "@reduxjs/toolkit";
import userListsReducer from "./userListsSlice";

export default configureStore({
  reducer: {
    userLists: userListsReducer,
  },
});
