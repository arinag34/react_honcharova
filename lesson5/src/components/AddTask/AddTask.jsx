import { useState } from 'react';
import { useTasksDispatch } from '../../contexts/tasks';
import { TASK_ACTION_TYPES } from '../../contexts/tasksReducer';
import Button from '../Button/Button';

let nextId = 3;

function AddTask() {
  const dispatch = useTasksDispatch();

  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleClick = (event) => {
    setText('');
    dispatch({
      type: TASK_ACTION_TYPES.addTask,
      payload: {
        id: nextId++,
        text: text,
        done: false,
      }
    })
  }

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={handleChange}
      />
      <Button
        onClick={handleClick}>
        Add
      </Button>
    </>
  );
}

export default AddTask
