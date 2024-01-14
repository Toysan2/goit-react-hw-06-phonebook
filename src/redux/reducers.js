import { createAction, createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  initializeContacts,
  updateFilter,
} from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

// Reducers using builder callback notation
const contactsReducer = createReducer(initialState.contacts, builder => {
  builder
    .addCase(initializeContacts, (state, action) => {
      // Initialize state with contacts from localStorage
      return action.payload;
    })
    .addCase(addContact, (state, action) => {
      // Logic for adding a contact
      state.push(action.payload);
      // Save updated contacts to localStorage
      localStorage.setItem('contacts', JSON.stringify(state));
    })
    .addCase(deleteContact, (state, action) => {
      // Logic for deleting a contact
      const newState = state.filter(contact => contact.id !== action.payload);
      // Save updated contacts to localStorage
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    });
});

const filterReducer = createReducer(initialState.filter, builder => {
  builder.addCase(updateFilter, (state, action) => {
    // Logic for updating filter
    return action.payload;
  });
});

export { contactsReducer, filterReducer };
