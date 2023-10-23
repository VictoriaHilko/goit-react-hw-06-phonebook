import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filterReducer } from "./reducer";


const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});