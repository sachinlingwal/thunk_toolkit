import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isLoading: false,
};

export const getComments = createAsyncThunk("users/comments", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  console.log(data);
  return data;
});
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: {
    [getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [getComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    },
    [getComments.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
