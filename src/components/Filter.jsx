import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from './Store';
import './Filter.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.target.value));
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
