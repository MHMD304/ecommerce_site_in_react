import React,{ useState } from 'react'
import './App.css'
import Category from './components/Category';


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

  const renderCategories = ()=>{
   return result.map(cat=>(
      <Category key={cat.id} id={cat.id} title={cat.title}/>
    ));
  }

  return (
    <>
      <header>My store</header>
      <section>
        <nav>
          {
            result&&renderCategories()
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
