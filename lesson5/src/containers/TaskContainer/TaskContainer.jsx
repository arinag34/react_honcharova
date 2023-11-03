import AddTask from '../../components/AddTask/AddTask';
import TaskList from '../../components/TaskList/TaskList';
import { useTasks, useTasksDispatch } from '../../contexts/tasks';
// Version 1
// import tasksReducer, { TASK_ACTION_TYPES } from '../../contexts/tasksReducer';

// Version 2
// import { TASK_ACTION_TYPES } from '../../contexts/tasksReducer';

// Version 1
// const initialTasks = [
//   { id: 0, text: 'Visit Kafka Museum', done: true },
//   { id: 1, text: 'Watch a puppet show', done: false },
//   { id: 2, text: 'Lennon Wall pic', done: false },
// ];

// Version 1
// const TaskContainer = () => {
//   // const [tasks, setTasks] = useState(initialTasks);
//
//   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
//
//   const handleAddTask = (text) => {
//     // setTasks([
//     //   ...tasks,
//     //   {
//     //     id: nextId++,
//     //     text: text,
//     //     done: false,
//     //   },
//     // ]);
//     dispatch({
//       type: TASK_ACTION_TYPES.addTask,
//       payload: {
//         id: nextId++,
//         text: text,
//         done: false,
//       }
//     })
//   }
//
//   const handleChangeTask = (task) => {
//     // setTasks(
//     //   tasks.map((t) => {
//     //     if (t.id === task.id) {
//     //       return task;
//     //     } else {
//     //       return t;
//     //     }
//     //   })
//     // );
//     dispatch({
//       type: TASK_ACTION_TYPES.changeTask,
//       payload: {
//         task
//       },
//     })
//   }
//
//   const handleDeleteTask = (taskId) => {
//     // setTasks(tasks.filter((t) => t.id !== taskId));
//     dispatch({
//       type: TASK_ACTION_TYPES.deleteTask,
//       payload: {
//         taskId
//       },
//     })
//     // dispatch({
//     //   type: 'CUSTOM_DELETE_TASK',
//     //   taskId,
//     // })
//   }
//
//   return (
//     <>
//       <h1>Task List</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// };

// Version 2
const TaskContainer = () => {
  return (
    <>
      <h1>Task List</h1>
      <AddTask />
      <TaskList />
    </>
  );
};

export default TaskContainer;
