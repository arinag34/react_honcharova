import { createContext, useContext, useReducer } from 'react';
import tasksReducer from './tasksReducer';

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];


const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export const useTasks = () => {
  const value = useContext(TasksContext);
  if (value === null) {
    throw new Error('useTasks must be used within a TasksProvider')
  }

  return value;
}

export const useTasksDispatch = () => {
  const value = useContext(TasksDispatchContext);
  if (value === null) {
    throw new Error('useTasksDispatch must be used within a TasksProvider')
  }

  return value;
}

export default TasksProvider;
