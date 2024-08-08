import React, { useState } from 'react'



const Navbar = () => {
  // Moved SimpleNumberGame logic inside Navbar component
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      setMessage('Please enter a valid number');
    } else if (value < 0) {
      setMessage('Please enter a positive number');
    } else {
      const nextNumber = [];
      for (let i = 1; i <= 3; i++) {
        nextNumber.push(value + (value % 2 === 0 ? i * 2 : i * 2));
      }
      setMessage(`Next 3 Numbers: ${nextNumber.join(', ')}`);
    }

    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a valid number"
        min="0"
      />
      {message && <p>{message}</p>}
    </div>
  );
};

export default Navbar;
