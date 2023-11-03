import { ChangeEventHandler, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';

import { changeTask, deleteTask } from '../../store/tasks';
import { selectTheme } from '../../store/theme';

import Button from '../Button/Button';
import type { Task as TaskType } from '../../models';

function Task({ task }: { task: TaskType }) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme)

  const [isEditing, setIsEditing] = useState(false);

  const handleChangeCheckbox: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeTask({
      ...task,
      done: e.target.checked,
    }))
  };

  const handleEdit: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeTask({
      ...task,
      text: e.target.value,
    }))
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
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
