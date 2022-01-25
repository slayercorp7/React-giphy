import React, { useState } from "react";
import propTypes  from "prop-types";

const AddCategorie = ({categories}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInpChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if(inputValue.trim().length > 2){
        categories(cat => [inputValue,...cat]);
        setInputValue('');
      }
      
  };
  AddCategorie.propTypes = {
    categories : propTypes.func.isRequired
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="enter text"
          onChange={handleInpChange}
        />
      </form>
    </>
  );
  
};

export default AddCategorie;
