import axios from "axios"
import { useEffect, useState } from "react"

const DataFetch = ()=>{
  const [data, getData]= useState([])
  const handleGetApiData = () =>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      getData(response.data)
      console.log(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    handleGetApiData()
  }, [])
  return (
    <div>
    <table className="table">
      <thead className="thead-dark">
        <tr>
        <th >Id</th>
        <th >Title</th>
        <th >Body</th>
        </tr>
      </thead>
      <tbody>
        {data.map((items)=>(
          <tr key={items.id}>
            <td>{items.id}</td>
            <td>{items.title}</td>
            <td>{items.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default DataFetch