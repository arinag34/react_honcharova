import './App.css'
import React, { useEffect, useState } from 'react';
import { Button } from './components/Button/Button';
import { Form } from './components/Form/Form.jsx';
import { Input } from './components/Input/Input.jsx';
import { Typography } from './components/Typography/Typography.jsx';

const USERS = [
  {
    id: '1',
    name: 'John',
    lastName: 'Doe',
  },
  {
    id: '2',
    name: 'John',
    lastName: 'Smith',
  },
]

function App(props) {
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(0);

  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    setCounter(counter - 1);
  }

  const handleToggle = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className="wrapper">
      {isVisible ? <Input /> : null}
      <Button onClick={handleToggle}>Toggle</Button>
      {/*<Input value={value} counter={counter} setCounter={setCounter} onChange={handleChange} />*/}
      <p>{value}</p>
      <div>
        <Button onClick={handleIncrement}>+</Button>
        {counter}
        <Button onClick={handleDecrement}>-</Button>
      </div>
      <ul>
        {USERS.map((user) => {
          return (
            <li key={user.id}>{user.name} {user.lastName}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
