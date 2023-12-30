import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.css'

const ContactItem = ({ contact, onDelete }) => (
  <div className="contact-item">
  <li>
    {contact.name}: {contact.number}
    <button className="button-del" onClick={onDelete}>Delete</button>
  </li>
</div>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
