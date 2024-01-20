import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizCategoryType } from "../../../pages/admin/types";

const initialState = {
  id: "",
  title: "",
  slug: "",
};
const editQuizCategorySlice = createSlice({
  name: "editQuizCategorySlice",
  initialState,
  reducers: {
    saveQuizCategoryDetails: (
      state,
      action: PayloadAction<QuizCategoryType>
    ) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.slug = action.payload.slug;
    },
  },
});

export default editQuizCategorySlice.reducer;
export const { saveQuizCategoryDetails } = editQuizCategorySlice.actions;
