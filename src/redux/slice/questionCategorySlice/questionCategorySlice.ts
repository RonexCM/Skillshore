import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TQuestionCategoryType } from "../../../pages/admin/types";

const initialState = {
  data: {
    id: 0,
    title: "",
    slug: "",
  },
};
const questionCategorySlice = createSlice({
  name: "questionCategorySlice",
  initialState,
  reducers: {
    saveQuestionCategory: (
      state,
      action: PayloadAction<TQuestionCategoryType>
    ) => {
      state.data = action.payload;
    },
  },
});

export default questionCategorySlice.reducer;
export const { saveQuestionCategory } = questionCategorySlice.actions;
