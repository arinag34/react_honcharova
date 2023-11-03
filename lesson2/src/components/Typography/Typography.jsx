const Typography = ({ className = '', children, ...props }) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};

export { Typography };
