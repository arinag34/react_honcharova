import { useState } from 'react';
import AppInput from './components/AppInput/AppInput.jsx';
import ProductPage from './components/ProductPage/ProductPage.jsx';

import { createTodos } from './utils/todos'
import TodoList from './components/TodoList/TodoList';

const todos = createTodos();
export default function App() {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);

  const handleChange = event => {
    setIsDark(event.target.checked)
  }

  return (
    <>
      <AppInput />
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={handleChange}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}

// return (
//   <>
//     <button onClick={() => setTab('all')}>
//       All
//     </button>
//     <button onClick={() => setTab('active')}>
//       Active
//     </button>
//     <button onClick={() => setTab('completed')}>
//       Completed
//     </button>
//     <br />
//     <label>
//       <input
//         type="checkbox"
//         checked={isDark}
//         onChange={e => setIsDark(e.target.checked)}
//       />
//       Dark mode
//     </label>
//     <hr />
//     <TodoList
//       todos={todos}
//       tab={tab}
//       theme={isDark ? 'dark' : 'light'}
//     />
//   </>
// );


// return (
//   <>
//     <label>
//       <input
//         type="checkbox"
//         checked={isDark}
//         onChange={e => setIsDark(e.target.checked)}
//       />
//       Dark mode
//     </label>
//     <hr />
//     <ProductPage
//       referrerId="wizard_of_oz"
//       productId={123}
//       theme={isDark ? 'dark' : 'light'}
//     />
//   </>
// );
