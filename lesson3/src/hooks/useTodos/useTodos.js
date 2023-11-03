import { useEffect, useState } from 'react';

// let TODOS = [];

export const useTodos = (url = 'https://jsonplaceholder.typicode.com/todos') => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const signal = controller.signal;

    setIsLoading(true);

    fetch(url, { signal})
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .finally(() => {
        setIsLoading(false)
      });

    return () => {
      controller.abort();
    }
  }, [url]);

  return { isLoading, todos };
}
