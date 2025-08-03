import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    info:null,
}
export const tvSlice = createSlice({
    name:"tv",
    initialState:initailState,
    reducers:{
        setTvInfo:(state, action) => {
            state.info = action.payload;
        },
        clearTvInfo:(state) => {
            state.info = null;
        }
    },
});

export const { setTvInfo, clearTvInfo } = tvSlice.actions;

export default tvSlice.reducer;