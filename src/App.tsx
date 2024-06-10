import { useState } from 'react'
import { Button } from "@/components/ui/button"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardStackDemo } from './components/cardStackDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React being used for this Blockchain project in fronend</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      <CardStackDemo />
      <div>
      </div>
    </>
  )
}

export default App
