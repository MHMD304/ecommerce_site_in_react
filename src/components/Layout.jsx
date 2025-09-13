import React from 'react'
import { Outlet,Link } from 'react-router-dom'
const Layout = ({categories}) => {
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
            <Outlet/>
        </main>
      </section>
      
      <footer>
          footer
      </footer>
    </>
  )
}

export default Layout