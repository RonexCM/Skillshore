import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TAddQuizFieldInitialStateType,
  TAddQuizFieldType,
} from "../../../pages/admin/types";

const initialState: TAddQuizFieldInitialStateType = {
  data: {
    title: "",
    slug: "",
    category_id: null,
    thumbnail: null,
    description: "",
    time: null,
    retry_after: null,
    question_categories: [null],
    status: 1,
    pass_percentage: null,
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
