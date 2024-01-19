import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      title: "",
      slug: "",
    },
  ],
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    links: [{}],
    path: "",
    per_page: 1,
    to: 1,
    total: 1,
  },
};
const questionListSlice = createSlice({
  name: "questionListSlice",
  initialState,
  reducers: {
    saveQuestionCategories: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    saveQuestionCategoriesMeta: (state, action: PayloadAction<any>) => {
      state.meta = action.payload;
    },
  },
});

export default questionListSlice.reducer;
export const { saveQuestionCategories, saveQuestionCategoriesMeta } =
  questionListSlice.actions;
