import React from "react";
import { getProductsByQuery } from "../fetcher";
import { useSearchParams } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";
const SearchResults = () => {
  const [products, setProducts] = React.useState({
    errorMessage: "",
    data: [],
  });
  const [searchParams] = useSearchParams();
  const query = searchParams.get("s");

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await getProductsByQuery(query);
      setProducts(res);
    };
    fetchData();
  }, [query]);

  const renderProducts = () => {
    if (products.data.length > 0) {
      return products.data.map((p) => <CategoryProduct key={p.id} {...p} />);
    } else {
      return <div className="error-message">No result found</div>;
    }
  };
  return (
    <div>
      {products.errorMessage !== "" && (
        <div className="error-message">{products.errorMessage}</div>
      )}
      {renderProducts()}
    </div>
  );
};

export default SearchResults;
