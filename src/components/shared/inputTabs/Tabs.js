import React, { useState } from 'react';
import './tabs.css';

const OptionList = () => {
  const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3']);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const addOption = () => {
    setOptions([...options, `Option ${options.length + 1}`]);
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  return (
    <div className="option-list">
      {options.map((option, index) => (
        <div key={index} className="option-item">
          <input
            type="radio"
            id={`option-${index}`}
            name="options"
            checked={selectedOption === index}
            onChange={() => handleOptionChange(index)}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
          <button className="delete-button" onClick={() => removeOption(index)}>🗑️</button>
        </div>
      ))}
      <button className="add-option-button" onClick={addOption}>Add option</button>
    </div>
  );
};

export default OptionList;
