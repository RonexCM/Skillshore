import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TQuizCategoryType } from "../../../pages/admin/types";

const initialState = {
  data: {
    id: 0,
    title: "",
    slug: "",
  },
};
const quizCategorySlice = createSlice({
  name: "quizCategorySlice",
  initialState,
  reducers: {
    saveQuizCategory: (state, action: PayloadAction<TQuizCategoryType>) => {
      state.data = action.payload;
    },
  },
});

export default quizCategorySlice.reducer;
export const { saveQuizCategory } = quizCategorySlice.actions;
