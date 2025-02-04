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
        },
        updateRequests : (state,action) => {
            state.data = state.data.filter(req => req._id != action.payload)
        }
    }
})

export const {setRequests,updateRequests} = requestsSlice.actions;
export default requestsSlice.reducer;