import React from 'react';
import { useId } from 'react';
import stl from './SearchBox.module.css';

const SearchBox = ({ onChange, inpValue }) => {
  const id = useId();
  return (
    <div className={stl.SearchBoxwrapper}>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" value={inpValue} onChange={onChange} id={id} />
    </div>
  );
};

export default SearchBox;
