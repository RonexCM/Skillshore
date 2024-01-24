import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TLoggedInUserDetails } from "../../pages/auth/types";
const initialState = {
  email: "",
  password: "",
  isLoggedIn: false,
};
const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    loggedInUser: (state, action: PayloadAction<TLoggedInUserDetails>) => {
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export default loginSlice.reducer;
export const { loggedInUser } = loginSlice.actions;
