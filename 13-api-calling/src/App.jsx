import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);
 const getData=async ()=>{
  const response=await axios.get('https://picsum.photos/v2/list?page=2&limit=20')
   setData(response.data)
   
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
     
        {data.map(function(elem,idx){
          return <h3>hello {elem.author} {idx}</h3>
        })}
     
    </div>
  )
}

export default App
