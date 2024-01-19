import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {
      resume: "",
      name: "",
      profile: "",
      description: "",
      mail: "",
      phone: "",
      experience: "",
      language: "",
      available: "",
      role: "",
      education: "",
      id: "",
      skills: [""],
      email: "",
      phoneNo: "",
    },
  },
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUserData } = userSlice.actions;
