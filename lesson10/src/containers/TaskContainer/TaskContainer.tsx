import AddTask from '../../components/AddTask/AddTask';
import TaskList from '../../components/TaskList/TaskList';

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
