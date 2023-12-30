import { configureStore } from '@reduxjs/toolkit';
import * as actions from './actions';
import reducers from './reducers';

const store = configureStore({
  reducer: {
    contacts: reducers.contactsReducer,
    filter: reducers.filterReducer
  }
});

export default store;
export { actions };
