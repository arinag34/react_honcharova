import React from 'react';
import Input from './Input';

const App = () => {
    const handleChange = (inputValue) => {
        console.log('Ваше значення: ', inputValue);
    };

    return (
        <div>
            <h1>Компонент з виводом в консоль</h1>
            <Input onChange={handleChange} />
        </div>
    );
};

export default App;
