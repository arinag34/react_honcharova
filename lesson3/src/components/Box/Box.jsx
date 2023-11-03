import classes from './Box.module.scss';

const Box = ({children, ...props}) => {
  return (
    <div {...props} className={classes.container}>
      {children}
    </div>
  );
};

export { Box };
