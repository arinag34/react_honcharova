const Button = ({ onClick, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('[From child] Button clicked');
    onClick(event);
  };


  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

export { Button };
