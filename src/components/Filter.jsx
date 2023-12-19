import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from './Store'; // Import actions from store
import './Filter.css';

const Filter = () => {
  const filter = useSelector(state => state.filter); // Select filter from Redux state
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.target.value)); // Dispatch action to update filter
  };

  return (
    <label>
      Find contacts by name
      <input
        className="input"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
