// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { FetchQuestionsType } from "../../pages/admin/adminTypes/types";

// const initialState = {
//   data: {
//     data: [""],
//     links: {
//       first: "",
//       last: "",
//       prev: "",
//       next: "",
//     },
//     meta: {
//       current_page: 0,
//       from: 0,
//       last_page: 0,
//       links: [{ url: "", label: "", active: true }],
//       path: "",
//       per_page: 0,
//       to: 0,
//       total: 0,
//     },
//   },
// };
// const questionListSlice = createSlice({
//   name: "questionListSlice",
//   initialState,
//   reducers: {
//     saveQuestions: (state, action: PayloadAction<FetchQuestionsType>) => {
//       state.data = action.payload;
//     },
//   },
// });

// export default questionListSlice.reducer;
// export const { saveQuestions } = questionListSlice.actions;
