import './App.css';
import { Button as MyCustomButton } from './components/Button/Button';
import MyCustomLink from './components/Link/Link';

const App = () => {
  const handleButton1Click = () => {
    alert(1)
  };

  const handleButton2Click = async (event) => {
    console.log('[From parent] Button clicked');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <MyCustomButton onClick={handleButton1Click}>
        Some link
      </MyCustomButton>
      <MyCustomButton onClick={handleButton2Click}>Button 2</MyCustomButton>
      <MyCustomButton onClick={() => {
        alert(3)
      }}>Button 3</MyCustomButton>
      <div>
        <MyCustomLink href="https://google.com">Google</MyCustomLink>
      </div>
    </div>
  );
}

export { App };
