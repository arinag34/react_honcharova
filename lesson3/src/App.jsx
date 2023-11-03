import './App.css'
import { useState } from 'react';
import { Button } from './components/Button/Button.jsx';
import { Counter } from './components/Counter/Counter.jsx';
import { Form } from './components/Form/Form.jsx';
import { Input } from './components/Input/Input.jsx';

const USERS = [
  {
    id: 1,
    name: 'First user'
  },
  {
    id: 1,
    name: 'Second user'
  }
]

function App() {
  const [isVisible, setIsVisible] = useState(true)
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // let content;
  //
  // if (isVisible) {
  //   content = <p>Is visible</p>
  //   // content = React.createElement('p', null, 'Is visible')
  // } else {
  //   content = <p>Is hidden</p>
  // }

  const handleClick = () => {
    // setIsVisible(!isVisible);
    setIsVisible((prevState) => !prevState);
  }

  return (
    <>
      {/*{isVisible ? <p>Is visible</p> : <p>Is hidden</p>}*/}
      {/*{isVisible && <p>Is visible</p>*/}
      {/*<p>{isVisible ? 'Is visible' : 'Is hidden'}</p>*/}

      {/*{content}*/}

      {/*{isLoggedIn ? <p>You are signed in</p> : <SignUp />}*/}

      {/*<Button onClick={() => setIsVisible(!isVisible)}>Toggle</Button>*/}

      {/*<Button onClick={() => setIsLoggedIn(!isVisible)}>Log In</Button>*/}
      {/*<ul>*/}
      {/*  {USERS.map((user, index) => (*/}
      {/*    <li key={user.id}>{user.name}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      {isVisible && <Counter />}
      {/*<Counter isVisible={isVisible} />*/}
      <Button onClick={handleClick}>Toggle</Button>
    </>
  )
}

export default App
