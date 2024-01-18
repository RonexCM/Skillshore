import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../services/myApi";
import editQuestionSlice from "../slice/questionSlice/editQuestionSlice";
import editQuizCategorySlice from "../slice/quizCategorySlice/editQuizCategorySlice";
import questionListSlice from "../slice/questionSlice/questionListSlice";
export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    editQuestionReducer: editQuestionSlice,
    editQuizCategoryReducer: editQuizCategorySlice,
    questionList: questionListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
