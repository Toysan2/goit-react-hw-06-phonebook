import '../components/SharedLayouts.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
const { addContact } = actions;


const App = () => {
  const dispatch = useDispatch();
    useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      JSON.parse(storedContacts).forEach(contact =>
        dispatch(addContact(contact))
      );
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
