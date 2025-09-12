import React,{ useState } from 'react'
import './App.css'

function App() {
  const [result,setResult] = useState([]);
  React.useEffect(()=>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      setResult(data);
    })
  },[])
  return (
    <>
      <div>
        <h1>hello world</h1>
        {
          result.map((cat)=>{
            return( 
              <div key={cat.id}>
            <li>{cat.id}</li>
             <li>{cat.title}</li>  
             </div> 
            )
          })
        }
        </div>
    </>
  )
}

export default App
