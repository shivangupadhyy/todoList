import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // let myObj = {
  //   username: "Shivang",
  //   age: 20
  // } 

  let newArr = [1,2,3,4]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4
    rounded-xl mb-4'>Tailwind test</h1>

    <Card username="Shivang"  btnText = "Check Profile"/>
    <Card username="Ayushi" btnText = "click me"/>
    </>
  )
}

export default App
