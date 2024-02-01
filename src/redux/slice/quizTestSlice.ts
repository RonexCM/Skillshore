import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizModalTypes } from "../../pages/admin/types";

const initialState = {
  data: {},
};

const quizTestSlice = createSlice({
  name: "quizTestSlice",
  initialState,
  reducers: {
    saveQuizDescription: (state, action: PayloadAction<QuizModalTypes>) => {
      state.data = action.payload;
    },
  },
});

export default quizTestSlice.reducer;
export const { saveQuizDescription } = quizTestSlice.actions;
