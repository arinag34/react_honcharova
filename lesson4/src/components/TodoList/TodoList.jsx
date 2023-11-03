import { useMemo } from 'react';
import { filterTodos } from '../../utils/todos';
import List from './List';

export default function TodoList({ todos, theme, tab }) {
  // const visibleTodos = filterTodos(todos, tab);

  const memoizedVisibleTodos = useMemo(() => {
    return filterTodos(todos, tab);
  }, [todos, tab]);

  return (
    <div className={theme}>
      <ul>
        <p>
          <b>Note: <code>List</code> is artificially slowed down!</b>
        </p>
        <List items={memoizedVisibleTodos} />
      </ul>
    </div>
  );
}
