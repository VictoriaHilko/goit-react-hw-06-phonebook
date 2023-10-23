import { statusFilters } from "./constants";
import { nanoid } from '@reduxjs/toolkit';


export const contactsInitialState = [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ];

export const contactsReducer = (state = contactsInitialState, action) => {
  // Reducer code
};

const filterInitialState = "";

export const filterReducer = (state = filterInitialState, action) => {
  // Reducer code
};