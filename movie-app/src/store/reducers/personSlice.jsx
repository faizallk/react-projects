import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    info:null,
}
export const personSlice = createSlice({
    name:"person",
    initialState:initailState,
    reducers:{
        setPersonInfo:(state, action) => {
            state.info = action.payload;
        },
        clearPersonInfo:(state) => {
            state.info = null;
        }
    },
});

export const { setPersonInfo, clearPersonInfo } = personSlice.actions;

export default personSlice.reducer;