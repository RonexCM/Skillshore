import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../services/myApi";
import userSlice from "../slice/userSlice";
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
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import authSlice from "../slice/authSlice";

const persistConfig = {
    key: "root",
    storage,
    version: 1,
    whitelist: ["user","auth"],
    transforms: [
        encryptTransform({
            secretKey: "my-super-secret-key",
        }),
    ],
};

const rootReducer = combineReducers({
    user: userSlice,
    auth: authSlice, question: questionSlice,
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
    [myApi.reducerPath]: myApi.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootReducer>(
    persistConfig,
    rootReducer
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(myApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
