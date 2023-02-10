import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "daxesh" },
  { id: 1, name: "maulik" },
  { id: 2, name: "sairaj" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
