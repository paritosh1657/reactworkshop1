import { useState } from "react"

const HooksDemo =()=>{

  const [counter, setCounter]= useState(0);
  return (
    <>

    <h1>Counter : {counter}</h1>
  
    <button onClick={()=>{
      setCounter(counter +1)
    }}>+</button>
    {counter >0 &&
    <>
    <button onClick={()=>{
      setCounter(counter -1)
    }}>-</button>
    <button onClick={()=>{
      setCounter(0)
    }}>Reset</button>
    </>
  }
    </>
  )
}

export default HooksDemo