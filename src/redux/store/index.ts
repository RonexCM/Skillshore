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
import quizSlice from "../slice/quizSlice";
import userQuizSlice from "../slice/userQuizSlice";

const persistConfig = {
<<<<<<< HEAD
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
  [myApi.reducerPath]: myApi.reducer,
=======
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
    auth: authSlice,
    quiz:quizSlice,
    answer: userQuizSlice,
    [myApi.reducerPath]: myApi.reducer,
>>>>>>> 4525c06 (wipp)
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
<<<<<<< HEAD
export const persistor = persistStore(store);
=======
import quizSlice from "../slice/quizSlice";

export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    user: userSlice,
    quiz: quizSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
>>>>>>> 19cf8ac (updated folder structure, fixed some design inconsistency)
=======
export const persistor = persistStore(store);
>>>>>>> 4525c06 (wipp)
