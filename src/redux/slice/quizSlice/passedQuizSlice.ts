import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFetchQuizQueryTransformResponseType } from "../../../pages/admin/types";

const initialState = {
  data: [
    {
      id: 0,
      title: "",
      slug: "",
      description: "",
      thumbnail: "",
      time: 0,
      retry_after: 0,
      status: "",
      result: "",
      categories: "",
      category: "",
    },
  ],
  meta: {
    current_page: 0,
    from: 0,
    last_page: 0,
    links: [{ url: "", label: "", active: true }],
    path: "",
    per_page: 8,
    to: 8,
    total: 8,
  },
};
const passedQuizSlice = createSlice({
  name: "passedQuizSlice",
  initialState,
  reducers: {
    saveAllQuizList: (
      state,
      action: PayloadAction<TFetchQuizQueryTransformResponseType>
    ) => {
      state.data = action.payload.data;
      state.meta = action.payload.meta;
    },
  },
});

export default passedQuizSlice.reducer;
export const { saveAllQuizList } = passedQuizSlice.actions;
