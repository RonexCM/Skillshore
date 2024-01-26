import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAddQuestionFieldType } from "../../../pages/admin/types";

//added undefined to weightage and in type
const initialState: TAddQuestionFieldType = {
  title: "",
  slug: "",
  description: "",
  options: ["", ""],
  answer: "",
  weightage: undefined,
  status: 1,
  category_id: 0,
};
const addQuestionSlice = createSlice({
  name: "addQuestionSlice",
  initialState,
  reducers: {
    saveQuestionFromAdd: (
      state,
      action: PayloadAction<TAddQuestionFieldType>
    ) => {
      state.title = action.payload.title;
      state.slug = action.payload.slug;
      state.description = action.payload.description;
      state.options = action.payload.options;
      state.answer = action.payload.answer;
      state.weightage = action.payload.weightage;
      state.status = action.payload.status;
      state.category_id = action.payload.category_id;
    },
  },
});

export default addQuestionSlice.reducer;
export const { saveQuestionFromAdd } = addQuestionSlice.actions;
