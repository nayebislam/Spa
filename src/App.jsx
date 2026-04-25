import { useState } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <SpeedInsights />
    </>
  )
}

export default App
