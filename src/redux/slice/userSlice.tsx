import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    email: "",
    id: "",
    name: "",
    profile: {
      id: 0,
      skills: [],
      education: "",
      experience: "",
      career: "",
    },
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload.data;
    },
    setProfileData: (state, action) => {
      state.data.profile = action.payload;
    },
    logOut: (state) => {
      state.data = initialState.data;
    },
  },
});

export default userSlice.reducer;
export const { setUserData, logOut, setProfileData } = userSlice.actions;
