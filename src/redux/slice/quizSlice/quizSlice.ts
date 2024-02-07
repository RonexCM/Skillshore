import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TEditQuizFieldInitialStateType,
  TQuizType,
} from "../../../pages/admin/types";

const initialState: TEditQuizFieldInitialStateType = {
  data: {
    id: 0,
    title: "",
    slug: "",
    thumbnail: null,
    description: "",
    time: 0,
    retry_after: 0,
    status: 0,
    category: {
      id: 0,
      title: "",
    },
  },
};
const quizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    saveQuiz: (state, action: PayloadAction<TQuizType>) => {
      state.data = action.payload;
    },
  },
});

export default quizSlice.reducer;
export const { saveQuiz } = quizSlice.actions;
