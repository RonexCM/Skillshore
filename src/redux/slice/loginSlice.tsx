import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginField } from "../../pages/auth/types";
const initialState = {
  email: "",
  password: "",
};
const loginSlice = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<LoginField>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export default loginSlice.reducer;
export const { addUser } = loginSlice.actions;
