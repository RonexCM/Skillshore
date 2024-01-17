import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionType } from "../../pages/list/types/types";

const initialState = {
  id: "",
  title: "",
  slug: "",
  description: "",
  options: ["", "", "", ""],
  answer: "",
  weightage: "",
  status: "",
};
const editQuestionSlice = createSlice({
  name: "editQuestionSlice",
  initialState,
  reducers: {
    saveQuestionDetails: (state, action: PayloadAction<QuestionType>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.slug = action.payload.slug;
      state.description = action.payload.description;
      state.options = action.payload.options;
      state.answer = action.payload.answer;
      state.weightage = action.payload.weightage;
      state.status = action.payload.status;
    },
  },
});

export default editQuestionSlice.reducer;
export const { saveQuestionDetails } = editQuestionSlice.actions;
