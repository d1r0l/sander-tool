import React from 'react';

const FilterItem = ({ label }) => {
  return (
    <div className='py-2 px-3 rounded-2xl text-wrap flex-wrap flex items-center gap-x-2 border-BLACK-4 border'>
      <label htmlFor={label}>{label}</label>
      <input type="checkbox" name={label} id={label} />
    </div>
  );
};

export default FilterItem;
