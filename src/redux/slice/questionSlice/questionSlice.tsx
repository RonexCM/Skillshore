import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TQuestionType } from "../../../pages/admin/types";

const initialState = {
  id: 0,
  title: "",
  slug: "",
  description: "",
  options: [""],
  answer: "",
  weightage: 0,
  status: 0,
  category: { id: 0, title: "" },
};
const questionSlice = createSlice({
  name: "questionSlice",
  initialState,
  reducers: {
    saveQuestion: (state, action: PayloadAction<TQuestionType>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.slug = action.payload.slug;
      state.description = action.payload.description;
      state.options = action.payload.options;
      state.answer = action.payload.answer;
      state.weightage = action.payload.weightage;
      state.status = action.payload.status;
      state.category = action.payload.category;
    },
  },
});

export default questionSlice.reducer;
export const { saveQuestion } = questionSlice.actions;
