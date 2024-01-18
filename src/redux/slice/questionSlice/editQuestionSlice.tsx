import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionType } from "../../../pages/admin/types/types";

const initialState = {
  data: {
    id: "",
    title: "",
    slug: "",
    description: "",
    options: ["", "", "", ""],
    answer: "",
    weightage: "",
    status: "",
  },
};
const editQuestionSlice = createSlice({
  name: "editQuestionSlice",
  initialState,
  reducers: {
    saveQuestionDetails: (state, action: PayloadAction<QuestionType>) => {
      state.data = action.payload;
    },
  },
});

export default editQuestionSlice.reducer;
export const { saveQuestionDetails } = editQuestionSlice.actions;
