import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../services/myApi";
import editQuestionSlice from "../slice/editQuestionSlice";
import editQuizCategorySlice from "../slice/editQuizCategorySlice";
export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    editQuestionReducer: editQuestionSlice,
    editQuizCategoryReducer: editQuizCategorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
