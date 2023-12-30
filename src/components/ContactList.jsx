
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store';
const { deleteContact, updateFilter } = actions;

import ContactItem from './ContactItem';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <label>
        Find contacts by name
        <input
          className="input"
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </label>
      <ul>
        {filteredContacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
