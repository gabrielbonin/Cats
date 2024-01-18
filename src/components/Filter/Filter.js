import React from 'react';

const Filter = () => {
  return (
    <div className="pet-filter-container">
      <div className="filter-container">
        <label htmlFor="favoured">favoured</label>
        <select name="favoured" id="favoured" className="form-select">
          <option value="any">any</option>
          <option value="favoured">favoured</option>
          <option value="not favoured">not favoured</option>
        </select>
      </div>
      <div className="filter-container">
        <label htmlFor="gender">gender</label>
        <select name="gender" id="gender" className="form-select">
          <option value="any">any</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
