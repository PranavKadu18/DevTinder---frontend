import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : null,
}

const feedSlice = createSlice({
    name : "feed",
    initialState,
    reducers : {
        setFeed : (state,action) => {
            state.data = action.payload;
        },

        deleteUserFromFeed : (state,action) => {
            state.data = state.data.filter(user => user._id != action.payload);
        },

        deleteFeed : (state,action) => {
            state.data = null;
        }
    }
})

export const {setFeed,deleteUserFromFeed,deleteFeed} = feedSlice.actions;
export default feedSlice.reducer;