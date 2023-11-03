import React from 'react';
import Form from '../../components/Form/Form';

import { useTheme } from '../../contexts/theme';

const PanelContainer = () => {
  const { theme, onChangeTheme } = useTheme();
  return (
    <>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={onChangeTheme}
        />
        Use dark mode
      </label>
    </>
  );
};

export default PanelContainer;
