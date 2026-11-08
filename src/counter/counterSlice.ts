import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  value: number;
}

const initialState: InitialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
      //or same result
      //state.value += 1;
    },
    // Increment Action by value
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value = state.value - 1;
        //or same result
        //state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export const selectCounterValue = (state: { counter: InitialState }) =>
  state.counter.value;
export const { increment, decrement, reset, incrementByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
