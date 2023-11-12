import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './Portfolio'
import Button from './Components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Hello world</h1> */}
      {/* <Portfolio /> */}
      <Button label = "Login"/>
      <Button label = "Signin"/>

    </>
  )
}

export default App
