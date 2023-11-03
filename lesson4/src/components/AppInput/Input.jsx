import { forwardRef } from 'react';

// memo(SomeComponent)
// forwardRef(SomeComponent)

const Input = forwardRef((props, ref) => {
  console.log('[Input]', { props, ref });
  return (
    <input ref={ref} {...props} />
  );
});

Input.displayName = 'Input';

export default Input;
