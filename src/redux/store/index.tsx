import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../services/myApi";
import questionSlice from "../slice/questionSlice/questionSlice";
import editQuizCategorySlice from "../slice/quizCategorySlice/editQuizCategorySlice";
import questionListSlice from "../slice/questionSlice/questionListSlice";
export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    question: questionSlice,
    editQuizCategoryReducer: editQuizCategorySlice,
    questionList: questionListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
