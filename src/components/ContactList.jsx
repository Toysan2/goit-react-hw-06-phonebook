import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './Store'; // Import actions from store
import ContactItem from './ContactItem';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts); // Select contacts from Redux state
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={() => dispatch(deleteContact(contact.id))} // Dispatch action to delete contact
        />
      ))}
    </ul>
  );
};

export default ContactList;
