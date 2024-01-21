import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    email: "",
    id: "",
    name: "",
    profile: {
      id: "",
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
      state.data = action.payload;
    },
    logOut: (state) => {
      state.data = initialState.data;
    },
  },
});

export default userSlice.reducer;
export const { setUserData, logOut } = userSlice.actions;
