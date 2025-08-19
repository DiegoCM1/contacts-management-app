import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-red-700'>
        This is amazing.
      </div>
      <p>
        Count: {count}
      </p>
      <div className='flex mt-2 justify-around'>
        <button onClick={() => {setCount(count + 1)}} className='bg-green-600 border border-gray-400 rounded-2xl p-1'>
          Increment
        </button>
        <button  onClick={() => {setCount(count - 1)}} className='bg-gray-600 border border-gray-400 rounded-2xl p-1'>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
