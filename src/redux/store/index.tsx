import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../services/myApi";
import loginSlice from "../slice/loginSlice";

export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    loginReducer: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
