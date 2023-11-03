import { useEffect } from 'react';

export const useClickListener = () => {
  useEffect(() => {
    const handleClick = () => {
      console.log('Clicked');
    }
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    }
  }, []);
}
