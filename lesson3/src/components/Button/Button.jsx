import PropTypes from 'prop-types';

import classes from './Button.module.scss';

const Button = ({ onClick, children, className, ...props }) => {
  const buttonClass = className ? `${classes.btn} ${className}` : classes.btn;

  const handleClick = (event) => {
    event.stopPropagation();
    onClick && onClick(event);
  };

  return (
    <button {...props} className={buttonClass} onClick={handleClick}>
      {children}
    </button>
  );
};

export { Button };

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
}
