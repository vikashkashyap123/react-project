import { useState } from 'react'
import './App.css'

function App() {
  let [counter , setCounter] =useState(15)
  // let counter =15

  const addValue =()=>
{
  // counter = counter +1
  // counter = counter +1
  // counter = counter +1
  // counter = counter +1
  // this line 10-13 will increase the value by one only

  // setCounter(prevcounter => prevcounter + 1)
  // setCounter(prevcounter => prevcounter + 1)
  // setCounter(prevcounter => prevcounter + 1)
  // setCounter(prevcounter => prevcounter + 1)
  //this line 16-19 will incr the value with plus 4

  if(counter<30)
  setCounter(counter+1)
} 
const removeValue =()=>{
  if(counter>0){
    setCounter(counter - 1)
  }

}
 return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={removeValue}>remove value: {counter}</button>
    </>
  )
}

export default App
