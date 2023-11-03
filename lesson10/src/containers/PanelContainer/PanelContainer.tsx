import { ChangeEventHandler } from 'react';
import Form from '../../components/Form/Form';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectTheme, toggleTheme } from '../../store/theme';

const PanelContainer = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme)

  const handleChangeTheme: ChangeEventHandler<HTMLInputElement> = () => {
    dispatch(toggleTheme())
  }

  return (
    <>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={handleChangeTheme}
        />
        Use dark mode
      </label>
    </>
  );
};

export default PanelContainer;
