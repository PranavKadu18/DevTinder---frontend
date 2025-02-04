import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state : null
}

const requestsSlice = createSlice({
    name : "requests",
    initialState,
    reducers : {
        setRequests : (state,action) => {
            state.data = action.payload;
        }
    }
})

export const {setRequests} = requestsSlice.actions;
export default requestsSlice.reducer;