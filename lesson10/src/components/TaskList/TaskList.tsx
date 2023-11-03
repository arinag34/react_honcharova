import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { selectTasks } from '../../store/tasks';
import Task from './Task';

function TaskList() {
  const tasks = useAppSelector(selectTasks);

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
