import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
     username:"vikash",
     age:21
  }
  let newArr =[1,2,3]

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="vikash" />

    </>
  )
}

export default App
