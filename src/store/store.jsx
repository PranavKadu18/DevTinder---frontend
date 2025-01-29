import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileReducer";

export const store = configureStore({
    reducer : {
        profileReducer,
    }
})