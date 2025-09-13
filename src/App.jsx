import React,{ useState } from 'react'
import './App.css'
import Category from './components/Category';
import { getCategories} from './fetcher';
import CategoryProduct from './components/CategoryProduct';
import { Link } from 'react-router-dom';
function App() {
  const [categories,setCategories] = useState({errorMessage:'',data:[]});

  React.useEffect(()=>{
    const fetchData = async ()=>{
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  },[])

  const renderCategories = ()=>{
   return categories.data.map(cat=>(
      <li key={cat.id}><Link  to={`categories/${cat.id}`}>{cat.title}</Link></li>
    ));
  }
  
  return (
    <>
      <header>My store</header>
      <section>
        <nav>
          {
            categories.errorMessage!==''&&<div>{categories.errorMessage}</div>
          }
          <ul>
          {
            categories.data&&renderCategories()
          }
          </ul>
        </nav>
        <main>
          
        </main>
      </section>
      
      <footer>
          footer
      </footer>
    </>
  )
}

export default App
