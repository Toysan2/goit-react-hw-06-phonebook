import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  contacts: [],
  filter: '',
};

// Actions
export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/delete');
export const updateFilter = createAction('filter/update');

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

// Store
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
