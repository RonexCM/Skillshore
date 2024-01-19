import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FetchQuestionType,
  QuestionMetaType,
} from "../../../pages/admin/types/TQuestionTypes";

const initialState = {
  data: [
    {
      title: "",
      options: [""],
      weightage: "",
      status: "",
    },
  ],
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    links: [{}],
    path: "",
    per_page: 1,
    to: 1,
    total: 1,
  },
};
const questionListSlice = createSlice({
  name: "questionListSlice",
  initialState,
  reducers: {
    saveQuestions: (state, action: PayloadAction<FetchQuestionType[]>) => {
      state.data = action.payload;
    },
    saveQuestionsMetaData: (state, action: PayloadAction<QuestionMetaType>) => {
      state.meta = action.payload;
    },
  },
});

export default questionListSlice.reducer;
export const { saveQuestions, saveQuestionsMetaData } =
  questionListSlice.actions;
