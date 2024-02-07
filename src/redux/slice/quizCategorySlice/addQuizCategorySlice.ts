import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAddQuizCategoryFieldType } from "../../../pages/admin/types";

const initialState = {
  data: { title: "", slug: "" },
};
const addQuizCategorySlice = createSlice({
  name: "addQuizCategorySlice",
  initialState,
  reducers: {
    saveQuizCategoryFromAdd: (
      state,
      action: PayloadAction<TAddQuizCategoryFieldType>
    ) => {
      state.data = action.payload;
    },
  },
});

export default addQuizCategorySlice.reducer;
export const { saveQuizCategoryFromAdd } = addQuizCategorySlice.actions;
