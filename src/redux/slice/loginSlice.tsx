import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TLoginField } from "../../pages/auth/types";
const initialState = {
  email: "",
  password: "",
  loggedIn: false,
};
const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TLoginField>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.loggedIn = true;
    },
  },
});

export default loginSlice.reducer;
export const { addUser } = loginSlice.actions;
