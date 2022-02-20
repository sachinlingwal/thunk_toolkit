import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("users/posts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
});
const initialState = {
  posts: [],
  loading: false,
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
  },
});
export const {} = postSlice.actions;
export default postSlice.reducer;
