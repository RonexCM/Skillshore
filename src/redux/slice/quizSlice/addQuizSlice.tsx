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
    thumbnail: null,
    description: "",
    time: 0,
    retry_after: 0,
    question_categories: [0],
    status: 0,
    pass_percentage: 0,
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
