import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quiz_id: "",
  answers: [],
  total_question: "",
  total_time: "",
};

const userQuizSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    setAnswerData: (state, action) => {
      const { answers: newAnswers, total_question, ...rest } = action.payload;

      state.answers = [...state.answers, ...newAnswers];

      state.total_question = total_question;

      state = { ...state, ...rest };
    },
    setQuizId: (state, action) => ({ ...state, quiz_id: action.payload }),
    setTotalTime: (state, action) => {
      const {
        answers: newAnswers,
        total_question,
        total_time,
        ...rest
      } = action.payload;
      state.answers = [...state.answers, ...newAnswers];

      state.total_question = total_question;

      state.total_time = total_time;

      state = { ...state, ...rest };
    },
  },
});

export default userQuizSlice.reducer;
export const { setAnswerData, setQuizId, setTotalTime } = userQuizSlice.actions;
