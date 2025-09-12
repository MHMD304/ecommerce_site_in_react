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
      <header>My store</header>
      <section>
        <nav>
          {
            result.map((cat)=>(
              <div key={cat.id}>{cat.title}  </div> 
            ))
          }
        </nav>
        <article>
          main area
       </article>
      </section>
      <footer>
          footer
      </footer>
    </>
  )
}

export default App
