import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAllQuizCategoryType } from "../../../pages/admin/types";

const initialState = {
  data: [
    {
      id: 0,
      title: "",
    },
  ],
};
const allQuizCategoriesListSlice = createSlice({
  name: "allQuizCategoriesListSlice",
  initialState,
  reducers: {
    saveAllQuizCategoriesList: (
      state,
      action: PayloadAction<TAllQuizCategoryType[]>
    ) => {
      state.data = action.payload;
    },
  },
});

export default allQuizCategoriesListSlice.reducer;
export const { saveAllQuizCategoriesList } = allQuizCategoriesListSlice.actions;
