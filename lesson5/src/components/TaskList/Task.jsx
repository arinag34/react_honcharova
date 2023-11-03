import { useState } from 'react';
import { useTasksDispatch } from '../../contexts/tasks';
import { TASK_ACTION_TYPES } from '../../contexts/tasksReducer';
import { useTheme } from '../../contexts/theme';
import Button from '../Button/Button';

function Task({ task }) {
  const dispatch = useTasksDispatch();
  const { theme } = useTheme();

  console.log('[Task]', theme);

  const [isEditing, setIsEditing] = useState(false);

  const handleChangeCheckbox = (e) => {
    dispatch({
      type: TASK_ACTION_TYPES.changeTask,
      payload: {
        task: {
          ...task,
          done: e.target.checked,
        }
      },
    })
  };

  const handleEdit = (e) => {
    dispatch({
      type: TASK_ACTION_TYPES.changeTask,
      payload: {
        task: {
          ...task,
          text: e.target.value,
        }
      },
    })
  };

  const handleDelete = () => {
    dispatch({
      type: TASK_ACTION_TYPES.deleteTask,
      payload: {
        taskId: task.id
      },
    })
  }

  const showForm = () => {
    setIsEditing(true)
  }

  const hideForm = () => {
    setIsEditing(false)
  }

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={handleEdit}
        />
        <Button onClick={hideForm}>Save</Button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <Button onClick={showForm}>Edit</Button>
      </>
    );
  }

  const className = `panel-${theme}`;

  return (
    <section className={className}>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={handleChangeCheckbox}
        />
        {taskContent}
        <Button onClick={handleDelete}>Delete</Button>
      </label>
    </section>
  );
}

export default Task;
