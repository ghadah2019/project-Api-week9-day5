import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandiingPgae from './componant/LandiingPgae'
import AllBooks from './componant/AllBooks'
import AllRoutes from './componant/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <AllRoutes/>
    </>
  )
}

export default App
