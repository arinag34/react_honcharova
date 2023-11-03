import { ButtonHTMLAttributes } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectTheme } from '../../store/theme';

const Button = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const theme = useAppSelector(selectTheme)

  const className = `button-${theme}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
