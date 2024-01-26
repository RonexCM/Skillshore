import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TQuizType } from "../../../pages/admin/types";
import { TCommonMetaType } from "../../../pages/admin/types/TCommonTypes";

const initialState = {
  data: [
    {
      id: 0,
      title: "",
      slug: "",
      thumbnail: null,
      description: "",
      time: 0,
      retry_after: 0,
      status: 0,
      category: {
        id: 0,
        title: "",
      },
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
const quizListSlice = createSlice({
  name: "quizListSlice",
  initialState,
  reducers: {
    saveQuizList: (state, action: PayloadAction<TQuizType[]>) => {
      state.data = action.payload;
    },
    saveQuizMetaData: (state, action: PayloadAction<TCommonMetaType>) => {
      state.meta = action.payload;
    },
  },
});

export default quizListSlice.reducer;
export const { saveQuizList, saveQuizMetaData } = quizListSlice.actions;
