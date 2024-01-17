// import { configureStore } from "@reduxjs/toolkit";
// import { myApi } from "../services/myApi";
// import userReducer from "../slice/userSlice";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/myUserProfileEndpoints";
import userSlice from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
