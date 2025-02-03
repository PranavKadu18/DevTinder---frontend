import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import feedReducer from "./reducers/feedReducer";
import connectionReducer from "./reducers/connectionReducer";

const store = configureStore({
    reducer : {
        user : userReducer,
        feed : feedReducer,
        connection : connectionReducer
    }
})

export default store;