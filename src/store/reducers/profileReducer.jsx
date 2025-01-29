import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    data : null,
}

const profileSlice = createSlice({
    name : "profiles",
    initialState,
    reducers : {
        setProfiles : (state,action) => {
            state = action.payload;
        },

        deleteProfile : (state,action) => {
            state = null;
        }
    }
})

export const {setProfiles,deleteProfile} = profileSlice.actions;
export default profileSlice.reducers;