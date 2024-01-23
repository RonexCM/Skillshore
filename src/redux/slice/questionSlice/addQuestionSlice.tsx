import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddQuestionFieldType } from "../../../pages/admin/types";

// api bata answer ra category field aako chaina so maile data ma api bata aako data lai data{} vanera define garera state.data = action.paylod gare vane data{} filed override dvayera answer ra category id field hatcha iniitalValues bata whict is passed as formk initial values so i need to define initialState this way

// edit field ma category id chaiyo tara category id backend bata aako chaina

// aaile category id navayera cateory title(STRING) use gareko chu as identifier but question add or edit garda category id (number) matra accept garcha - #URGENT need to send question category_id that the question belongs to, api to fetch all category ids
const initialState = {
  title: "",
  slug: "",
  description: "",
  options: ["", "", ""],
  answer: "",
  weightage: 0,
  status: 1,
  category_id: 0,
};
const adduestionSlice = createSlice({
  name: "addQuestionSlice",
  initialState,
  reducers: {
    saveQuestionFromAdd: (
      state,
      action: PayloadAction<AddQuestionFieldType>
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

export default adduestionSlice.reducer;
export const { saveQuestionFromAdd } = adduestionSlice.actions;
