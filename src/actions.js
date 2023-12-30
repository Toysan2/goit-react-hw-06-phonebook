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

