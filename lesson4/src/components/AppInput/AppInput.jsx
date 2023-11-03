import { useRef } from 'react';
import Input from './Input';

const AppInput = () => {
  const ref = useRef(null);
  const buttonRef = useRef(null);
  const audioRef = useRef(null);
  const handleClick = () => {
    // obj.a?.b
    // Focus the input element here
    console.log(ref);
    console.log(buttonRef);
    ref.current?.focus();

    audioRef.current?.play();
  }

  return (
    <div>
      {/*<input ref={ref} />*/}
      <Input ref={ref} />
      <button ref={buttonRef} onClick={handleClick}>Focus</button>
      <audio ref={audioRef} src={'/audio.mp3'} controls />
    </div>
  );
};

export default AppInput;
