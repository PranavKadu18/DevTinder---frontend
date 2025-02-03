import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : null
}

const connectionSlice = createSlice({
    name : "connection",
    initialState,
    reducers : {
        setConnectinfo : (state,action) => {
            state.data = action.payload;
        },

        deleteConnections : (state,action) => {
            state.data = null;
        } 
    }
})

export const {setConnectinfo,deleteConnections} = connectionSlice.actions;
export default connectionSlice.reducer;