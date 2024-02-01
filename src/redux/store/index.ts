import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../services/myApi";
import userSlice from "../slice/userSlice";
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
import allQuizCategoriesListSlice from "../slice/quizCategorySlice/allQuizCategoriesListSlice";
import allQuizListSlice from "../slice/quizSlice/allQuizListSlice";
import quizTestSlice from "../slice/quizTestSlice";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["user", "auth"],
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
    }),
  ],
};

const rootReducer = combineReducers({
  user: userSlice,
  auth: authSlice,
  allQuizCategories: allQuizCategoriesListSlice,
  allQuiz: allQuizListSlice,
  allModal: quizTestSlice,
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
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(myApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
