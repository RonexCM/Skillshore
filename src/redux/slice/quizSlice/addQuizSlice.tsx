import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TAddQuizFieldInitialStateType,
  TAddQuizFieldType,
} from "../../../pages/admin/types";

const initialState: TAddQuizFieldInitialStateType = {
  data: {
    title: "",
    slug: "",
    category_id: 0,
    description: "",
    time: "",
    retry_after: "",
    thumbnail: "",
    question_categories: [0],
    status: 1,
    pass_percentage: "",
  },
};
const addQuizSlice = createSlice({
  name: "addQuizSlice",
  initialState,
  reducers: {
    saveQuizFromAdd: (state, action: PayloadAction<TAddQuizFieldType>) => {
      state.data = action.payload;
    },
  },
});

export default addQuizSlice.reducer;
export const { saveQuizFromAdd } = addQuizSlice.actions;
