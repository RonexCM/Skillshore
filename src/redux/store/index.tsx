import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../services/myApi";
import questionSlice from "../slice/questionSlice/questionSlice";
import editQuizCategorySlice from "../slice/quizCategorySlice/editQuizCategorySlice";
import questionListSlice from "../slice/questionSlice/questionListSlice";
import allQuestionCategoriesListSlice from "../slice/questionCategorySlice/allQuestionCategoriesListSlice";
import addQuestionSlice from "../slice/questionSlice/addQuestionSlice";
export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    question: questionSlice,
    editQuizCategoryReducer: editQuizCategorySlice,
    questionList: questionListSlice,
    allQuestionCategories: allQuestionCategoriesListSlice,
    addQuestion: addQuestionSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
