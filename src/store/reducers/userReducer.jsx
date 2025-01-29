import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : null,
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setUser : (state,action) => {
            state.data = action.payload;
        },

        deleteUser : (state,action) => {
            state.data =  null;
        }
    }
})

export const {setUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;