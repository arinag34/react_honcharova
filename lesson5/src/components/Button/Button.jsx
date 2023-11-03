import { useTheme } from '../../contexts/theme';

const Button = ({ children, ...props }) => {
  const { theme } = useTheme();

  const className = `button-${theme}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
