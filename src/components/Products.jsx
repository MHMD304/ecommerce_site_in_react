import React from "react";
import { getProducts } from "../fetcher";
import CategoryProduct from "./CategoryProduct";

const Products = () => {
  const [products, setProducts] = React.useState({
    errorMessage: "",
    data: [],
  });
  React.useEffect(() => {
    const fetchData = async () => {
      const p = await getProducts();
      setProducts(p);
    };
    fetchData();
  }, []);

  const renderProducts = () => {
    return products.data.map((p) => <CategoryProduct key={p.id} {...p} />);
  };
  return (
    <div>
      {products.errorMessage !== "" && (
        <div className="error-message">{products.errorMessage}</div>
      )}
      {products.data && renderProducts()}
    </div>
  );
};

export default Products;
