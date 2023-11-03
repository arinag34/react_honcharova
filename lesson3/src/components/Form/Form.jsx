import { useState } from 'react';
import { Button } from '../Button/Button.jsx';
import { Input } from '../Input/Input.jsx';

const Form = ({ children, ...props }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted', event)
  };

  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

// const CounterForm = ({ children, ...props }) => {
//   // const [minValue, setMinValue] = useState(localStorage.getItem('minValue') || 0);
//   // const [maxValue, setMaxValue] = useState(localStorage.getItem('maxValue') || 10);
//
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     console.log('Submitted', event)
//   };
//
//   return (
//     <form {...props} onSubmit={handleSubmit}>
//       <Input name="min-value" />
//       <Input name="max-value" />
//       <Button type="submit">Submit</Button>
//     </form>
//   );
// };

export { Form };
