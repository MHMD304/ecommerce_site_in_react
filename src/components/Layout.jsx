import { Outlet,Link } from 'react-router-dom'
import { FaHome, FaShoppingCart } from "react-icons/fa";
import Search from './Search';
const Layout = ({categories}) => {
    const renderCategories = ()=>{
   return categories.data.map(cat=>(
      <li key={cat.id}><Link  to={`/categories/${cat.id}`}>{cat.title}</Link></li>
    ));
  }
  return (
        <>
      <header>
        <Link to="/"><div id="headerHomeIcon"><FaHome/></div></Link>
        <Search/>
        <div id="headerTitle">My store</div>
        <Link to='/basket'><div id="headerCartIcon"><FaShoppingCart/></div></Link>
        
      </header>
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
            <Outlet/>
        </main>
      </section>
      
      <footer>
          <Link to={`/basket`} >Basket</Link>
          <Link to={`/`} >Home</Link>
      </footer>
    </>
  )
}

export default Layout