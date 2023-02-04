import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = 'Jan-Yaeger Dhillon';
  }, []);
  return (
    <div className="App">
      <h1 className="title">Jan-Yaeger Dhillon</h1>
      <div>
        <a href="https://github.com/jansdhillon" className="link">GitHub</a>
        <a href="https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/" className="link">LinkedIn</a>
      </div>
      <div className="card">
        <h2>About Me</h2>
        <p>My name is Jan.</p>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
    </div>
  )
}

export default App