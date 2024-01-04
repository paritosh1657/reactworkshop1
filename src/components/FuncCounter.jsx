import { useEffect, useState } from "react"
import CounterState from "./CounterState";

const FuncCounter= ()=>{
  const [countValue, setCountValue]= useState(0);
  // const increament= ()=>{
  //   setCountValue(countValue +1);
  // }

  // const decreament= ()=>{
  //   if(countValue > 0){
  //     setCountValue(countValue -1);
  //   }
  // }
  var intervalID;
  useEffect(()=>{
    intervalID =  setInterval(()=>{
      setCountValue(countValue +1)
      console.log("Calling")
    }, 1000);
    return () => clearInterval(intervalID)
  },[countValue])

  
  const stopTimer = ()=>{
    clearInterval(intervalID)
  }

  return (
    <>
      {/* <CounterState countValue= {countValue}/> */}
      <div>Counter {countValue}</div>
      
       {/* {countValue < 5 ? <CounterState countValue={countValue}/> : "More...."} */}
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  )
}

export default FuncCounter