import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAddQuestionCategoryFieldType } from "../../../pages/admin/types";

const initialState = {
  data: {
    title: "",
    slug: "",
  },
};
const addQuestionCategorySlice = createSlice({
  name: "addQuestionCategorySlice",
  initialState,
  reducers: {
    saveQuestionCategoryFromAdd: (
      state,
      action: PayloadAction<TAddQuestionCategoryFieldType>
    ) => {
      state.data = action.payload;
    },
  },
});

export default addQuestionCategorySlice.reducer;
export const { saveQuestionCategoryFromAdd } = addQuestionCategorySlice.actions;
