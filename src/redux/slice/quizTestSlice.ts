import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizModalTypes } from "../../pages/admin/types";
// import { QuizModalType} from "../../pages/admin/types/TQuizModalTest";
// import { QuizModalType } from "../../pages/admin/types";

const initialState = {
  data: {},
};

const quizTestSlice = createSlice({
  name: "quizTestSlice",
  initialState,
  reducers: {
    saveQuizDescription: (state, action: PayloadAction<QuizModalTypes>) => {
      console.log(action.payload);
      state.data = action.payload;
    //   console.log(state.data);
    },
  },
});

export default quizTestSlice.reducer;
export const { saveQuizDescription } = quizTestSlice.actions;
