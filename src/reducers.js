import { createAction, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, updateFilter } from './actions';

const initialState = {
  contacts: [],
  filter: ''
};

// Reducers using builder callback notation
const contactsReducer = createReducer(initialState.contacts, builder => {
  builder
    .addCase(addContact, (state, action) => {
      // Logic for adding a contact
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      // Logic for deleting a contact
      return state.filter(contact => contact.id !== action.payload);
    });
});

const filterReducer = createReducer(initialState.filter, builder => {
  builder.addCase(updateFilter, (state, action) => {
    // Logic for updating filter
    return action.payload;
  });
});

export { contactsReducer, filterReducer };