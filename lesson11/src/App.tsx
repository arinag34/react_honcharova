import { useCounter } from './hooks/useCounter'
import './App.css'

function App() {
  const { count, increment } = useCounter()

  return (
    <div className="App">
      <header data-testid={"header"} className={'App-header'}>
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={increment}
          >
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
