import { Outlet, Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import Search from "./Search";
import React from "react";
import { CartContext } from "../contexts/CartContext";
const Layout = ({ categories }) => {
  const [cartItemsCount,setCartItemsCount] = React.useState();
  const {getItems} = React.useContext(CartContext);
  
  React.useEffect(()=>{
    const items = getItems(); 
    const totalCount = items.reduce((acc, item) => acc + (item.quantity || 1), 0);
    setCartItemsCount(totalCount);
  },[getItems]);

  const renderCategories = () => {
    return categories.data?.map((cat) => (
      <li key={cat.id}>
        <Link to={`/categories/${cat.id}`}>{cat.title}</Link>
      </li>
    ));
  };
  return (
    <>
      <header>
        <Link to="/">
          <div id="headerHomeIcon">
            <FaHome />
          </div>
        </Link>
        <Search />
        <div id="headerTitle">My store</div>
        <Link to="/basket">
          <div id="headerCartIcon">
            <FaShoppingCart />
            <span>{cartItemsCount}</span>
          </div>
        </Link>
      </header>
      <section>
        <nav>
          {categories.errorMessage !== "" && (
            <div className="error-message">{categories.errorMessage}</div>
          )}
          <ul>{categories.data && renderCategories()}</ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </section>

      <footer>
        <div>
          <Link to={`/basket`}>Basket</Link>
          <Link to={`/`}>Home</Link>
        </div>
      </footer>
    </>
  );
};

export default Layout;
