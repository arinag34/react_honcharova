import React from 'react';

const Input = ({ onChange }) => {
    const handleChange = (e) => {
        const inputValue = e.target.value;
        onChange(inputValue);
    };

    return (
        <input type="text" onChange={handleChange} />
    );
};

export default Input;
