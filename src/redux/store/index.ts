import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../services/myApi";
import userSlice from "../slice/userSlice";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 12dcc4d (added persist & encryption)
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
<<<<<<< HEAD
<<<<<<< HEAD
import authSlice from "../slice/authSlice";
<<<<<<< HEAD
=======
>>>>>>> 12dcc4d (added persist & encryption)
=======
import authSlice from "../slice/authSlice";
>>>>>>> 2a0d873 (added persist, removed cookie to manage storage)

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
  [myApi.reducerPath]: myApi.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootReducer>(
  persistConfig,
  rootReducer
);
<<<<<<< HEAD

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
=======
import quizSlice from "../slice/quizSlice";
=======
>>>>>>> 12dcc4d (added persist & encryption)

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
<<<<<<< HEAD
>>>>>>> 19cf8ac (updated folder structure, fixed some design inconsistency)
=======
export type AppDispatch = typeof store.dispatch;
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
