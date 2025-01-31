import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import feedReducer from "./reducers/feedReducer";

const store = configureStore({
    reducer : {
        user : userReducer,
        feed : feedReducer
    }
})

export default store;