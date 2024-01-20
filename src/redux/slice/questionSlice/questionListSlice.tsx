import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionType, QuestionMetaType } from "../../../pages/admin/types";

const initialState = {
  data: [
    {
      id: 0,
      title: "",
      options: [""],
      weightage: "",
      status: "",
      description: "",
      slug: "",
      answer: "",
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
    saveQuestions: (state, action: PayloadAction<QuestionType[]>) => {
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
