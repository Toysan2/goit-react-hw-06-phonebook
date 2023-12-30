import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const { deleteContact, updateFilter } = actions;

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })),
  filter: PropTypes.string
};

export default ContactList;
