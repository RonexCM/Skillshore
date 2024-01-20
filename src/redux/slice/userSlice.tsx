import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    // resume: "",
    name: "",
    profile: "",
    // description: "",
    // mail: "",
    // phone: "",
    experience: "",
    // language: "",
    // available: "",
    career: "",
    education: "",
    id: "",
    skills: [],
    // email: "",
    // phoneNo: "",
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
