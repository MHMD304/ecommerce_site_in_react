import React from 'react';
import { getProductsByQuery } from '../fetcher';
import { useSearchParams } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';
const SearchResults = () => {
  const [products,setProducts] = React.useState({errorMessage:'',data:[]})
  const [searchParams] = useSearchParams();
  const query = searchParams.get('s');

  React.useEffect(()=>{
    const fetchData = async()=>{
        const res = await getProductsByQuery(query);
        setProducts(res);
    } 
    fetchData();
  },[query]);

  const renderProducts = ()=>{
    return products.data.map(p=>(
      <CategoryProduct key={p.id} {...p} />
    ));
    }
  return (
    <div >
          {
            products.errorMessage!==''&&<div>{products.errorMessage}</div>
          }
          {
            products.data&&renderProducts()
          }  
    </div>
  )
}

export default SearchResults;