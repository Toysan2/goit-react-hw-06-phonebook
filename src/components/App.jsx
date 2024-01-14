import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/store';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const { initializeContacts } = actions;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(initializeContacts(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default App;
