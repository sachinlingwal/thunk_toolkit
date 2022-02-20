import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "../features/commentSlice";
import postReducer from "../features/postSlice";

export const store = configureStore({
  reducer: {
    userPost: postReducer,
    comment: commentReducer,
  },
});
