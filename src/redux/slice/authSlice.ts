import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
<<<<<<< HEAD
    token: null,
=======
    token: null
>>>>>>> 2a0d873 (added persist, removed cookie to manage storage)
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.data.token = action.payload;
    },
    logOut: (state) => {
      state.data.token = initialState.data.token;
    },
  },
});

export default authSlice.reducer;
export const { setToken, logOut } = authSlice.actions;
