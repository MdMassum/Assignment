import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleAdd = () =>{
    if(count < 150){
      setCount(count+1);
    }
  }
  const handleSubtract = () =>{
    if(count > 0){
      setCount(count-1);
    }
  }
  return (
    <>
      <h1>Assignment Task</h1>
      <div className="card">
      <label for="file"></label>
        <progress className='progress' id="file" value={count} max="150"></progress>
        <h2>Count is {count}</h2>
        <button onClick={handleAdd} className='button1'> Add
        </button>
        <button onClick={handleSubtract} className='button2'> subtract
        </button>
      </div>
    </>
  )
}

export default App
