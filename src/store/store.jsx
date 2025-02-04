import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import feedReducer from "./reducers/feedReducer";
import connectionReducer from "./reducers/connectionReducer";
import requestsSlice from "./reducers/requestsReducer"

const store = configureStore({
    reducer : {
        user : userReducer,
        feed : feedReducer,
        connection : connectionReducer,
        requests : requestsSlice
    }
})

export default store;