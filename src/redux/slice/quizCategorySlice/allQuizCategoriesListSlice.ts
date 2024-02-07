import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 0,
      title: "",
    },
  ],
};
const allQuizCategoriesListSlice = createSlice({
  name: "allQuizCategoriesListSlice",
  initialState,
  reducers: {
    saveAllQuizCategoriesList: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export default allQuizCategoriesListSlice.reducer;
export const { saveAllQuizCategoriesList } = allQuizCategoriesListSlice.actions;
