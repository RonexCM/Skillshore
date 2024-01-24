import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../services/myApi";
import userSlice from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
