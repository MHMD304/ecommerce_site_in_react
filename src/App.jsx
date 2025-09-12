import React,{ useState } from 'react'
import './App.css'
import Category from './components/Category';
import { getCategories,getProductByCatId } from './fetcher';
import CategoryProduct from './components/CategoryProduct';
function App() {
  const [categories,setCategories] = useState({errorMessage:'',data:[]});
  const [products,setProducts] = useState({errorMessage:'',data:[]});

  React.useEffect(()=>{
    const fetchData = async ()=>{
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  },[])

  const handleCategoryClick = (id)=>{
    const fetchData = async ()=>{
      const responseObject = await getProductByCatId(id);
      setProducts(responseObject);
    }
    fetchData();
  }

  const renderCategories = ()=>{
   return categories.data.map(cat=>(
      <Category onCategoryClick={()=>handleCategoryClick(cat.id)} key={cat.id} id={cat.id} title={cat.title}/>
    ));
  }
  const renderProducts = ()=>{
    return products.data.map(p=>(
      <CategoryProduct key={p.id} {...p} />
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
          {
            categories.data&&renderCategories()
          }
        </nav>
        <main>
          {
            products.errorMessage!==''&&<div>{products.errorMessage}</div>
          }
          {
            products.data&&renderProducts()
          }
        </main>
      </section>
      
      <footer>
          footer
      </footer>
    </>
  )
}

export default App
