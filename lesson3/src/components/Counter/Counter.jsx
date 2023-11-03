import { useEffect, useState } from 'react';
import { useClickListener } from '../../hooks/useClickListener/useClickListener.js';
import { useTodos } from '../../hooks/useTodos/useTodos.js';
import { Box } from '../Box/Box.jsx';
import { Button } from '../Button/Button.jsx';

const handleClick = () => {
  console.log('Clicked');
}

// const USERS = [
//   {
//     id: 1,
//     name: 'First user'
//   },
//   {
//     id: 1,
//     name: 'Second user'
//   }
// ]

const Counter = ({ isVisible, url }) => {
  const [counter, setCounter] = useState(0);


  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  const { isLoading, todos } = useTodos();

  useClickListener();

  console.log('Counter', { isLoading, todos });

  return (
    <Box>
      {isLoading ?
        <p>Loading...</p>
        : <ul>{todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>
        })}</ul>}
      <h2>Counter {counter}</h2>
      <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
    </Box>
  );
};

export { Counter };
