import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 0,
      title: "",
    },
  ],
};
const allQuestionCategoriesListSlice = createSlice({
  name: "allQuestionCategoriesListSlice",
  initialState,
  reducers: {
    saveAllQuestionCategoriesList: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export default allQuestionCategoriesListSlice.reducer;
export const { saveAllQuestionCategoriesList } =
  allQuestionCategoriesListSlice.actions;
