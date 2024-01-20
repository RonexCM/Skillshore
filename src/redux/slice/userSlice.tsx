import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: "",
    profile: "",
    experience: "",
    career: "",
    education: "",
    id: "",
    skills: [],
    email: "",
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUserData } = userSlice.actions;
