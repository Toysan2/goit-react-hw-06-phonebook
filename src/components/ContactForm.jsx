import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './Store'; // Import actions from store
import { nanoid } from 'nanoid'; // Import nanoid to generate unique IDs
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ id: nanoid(), name, number })); // Dispatch action to add contact
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
