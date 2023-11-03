const Form = ({ children, ...props }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted', event)
  };

  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export { Form };
