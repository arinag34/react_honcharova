import { ChangeEventHandler, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { addTask } from '../../store/tasks';
import Button from '../Button/Button';

function AddTask() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.tasks.loading)

  const [text, setText] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value)
  }

  const handleClick = () => {
    setText('');
    dispatch(addTask(text))
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
      {loading && <p>Creating the task...</p>}
    </>
  );
}

export default AddTask
