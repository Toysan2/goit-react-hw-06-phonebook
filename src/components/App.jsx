import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateFilter } from './Store';
import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      JSON.parse(storedContacts).forEach(contact =>
        dispatch(addContact(contact))
      );
    }
  }, [dispatch]);

  const handleFilterChange = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList />
    </div>
  );
};

export default App;
