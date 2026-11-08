import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export default store;
