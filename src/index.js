import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from './components/Store'; // Import actions from store
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts); // Select contacts from Redux state

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      JSON.parse(storedContacts).forEach(contact =>
        dispatch(addContact(contact))
      );
    }
  }, [dispatch]);

  const handleAddContact = newContact => {
    const contact = { id: nanoid(), ...newContact };
    dispatch(addContact(contact)); // Dispatch action to add contact
    localStorage.setItem('contacts', JSON.stringify([...contacts, contact]));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
