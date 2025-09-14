import React from "react";
import { useParams } from "react-router-dom";
import { getProductByCatId } from "../fetcher";
import CategoryProduct from "./CategoryProduct";
const Category = () => {
  const { cid } = useParams();
  const [products, setProducts] = React.useState({
    errorMessage: "",
    data: [],
  });
  React.useEffect(() => {
    const fetchData = async () => {
      const p = await getProductByCatId(cid);
      setProducts(p);
    };
    fetchData();
  }, [cid]);

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

export default Category;
