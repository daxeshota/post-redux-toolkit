import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userID) => {
        const id = nanoid();
        return {
          payload: {
            id,
            title,
            content,
            date: new Date().toISOString(),
            userID,
          },
        };
      },
    },
  },
});

export const { addPost } = postSlice.actions;
export const selectAllPosts = (state) => state.posts;
export default postSlice.reducer;
