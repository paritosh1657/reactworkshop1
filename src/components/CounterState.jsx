import { useEffect } from "react"


const CounterState= (props)=>{
  useEffect(()=>{
    let initialstate;
    initialstate= setInterval(()=>{
      props.countValue +1
    }, 1000);
    return ()=>clearInterval(initialstate)
  }, [])
  return(
    <div>{props.countValue}</div>
  )
}

export default CounterState