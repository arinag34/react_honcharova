import { useTasks } from '../../contexts/tasks';
import Task from './Task';

function TaskList() {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
