const { createSlice } = require("@reduxjs/toolkit");
const { contactsInitialState } = require("./reducer");
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,

    reducers: {
        addContact: (state, action) => {
            state.push(action.payload);
        },

        prepare: ({ id, name, number }) => {
            return {
              payload: {
                id,
                name,
                number,
              },
            };
          },

        deleteContact: (state, action) => {
            return state.filter(contact => contact.id !== action.payload);
        },
    }
});


const persistConfig = {
    key: 'contacts',
    storage,
  };

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);