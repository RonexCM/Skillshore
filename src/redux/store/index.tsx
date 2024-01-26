import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../services/myApi";
import questionSlice from "../slice/questionSlice/questionSlice";
import questionListSlice from "../slice/questionSlice/questionListSlice";
import allQuestionCategoriesListSlice from "../slice/questionCategorySlice/allQuestionCategoriesListSlice";
import addQuestionSlice from "../slice/questionSlice/addQuestionSlice";
import addQuizSlice from "../slice/quizSlice/addQuizSlice";
import addQuizCategorySlice from "../slice/quizCategorySlice/addQuizCategorySlice";
import addQuestionCategorySlice from "../slice/questionCategorySlice/addQuestionCategorySlice";
import quizCategorySlice from "../slice/quizCategorySlice/quizCategorySlice";
import quizCategoryListSlice from "../slice/quizCategorySlice/quizCategoryListSlice";
import quizSlice from "../slice/quizSlice/quizSlice";
import quizListSlice from "../slice/quizSlice/quizListSlice";
import questionCategorySlice from "../slice/questionCategorySlice/questionCategorySlice";
import questionCategoryListSlice from "../slice/questionCategorySlice/questionCategoryListSlice";
import allQuizCategoriesListSlice from "../slice/quizCategorySlice/allQuizCategoriesListSlice";
export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    question: questionSlice,
    questionList: questionListSlice,
    addQuestion: addQuestionSlice,
    allQuestionCategories: allQuestionCategoriesListSlice,
    quizCategory: quizCategorySlice,
    quizCategoryList: quizCategoryListSlice,
    addQuizCategory: addQuizCategorySlice,
    allQuizCategories: allQuizCategoriesListSlice,
    quiz: quizSlice,
    quizList: quizListSlice,
    addQuiz: addQuizSlice,
    questionCategory: questionCategorySlice,
    questionCategoryList: questionCategoryListSlice,
    addQuestionCategory: addQuestionCategorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
