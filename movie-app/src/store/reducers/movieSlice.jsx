import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    info:null,
}
export const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{},
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default movieSlice.reducer;