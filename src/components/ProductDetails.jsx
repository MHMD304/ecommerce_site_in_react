import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher';

const ProductDetails = () => {
  const {pid} = useParams();
  const [product,setProduct] = React.useState({errorMessage:'',data:{}});

  React.useEffect(()=>{
    const fetchData =  async ()=> {
        const p = await getProductById(pid);
        console.log(p);
        setProduct(p);
    }
    fetchData();
  },[pid])
  const pData = product.data[0];

  if (!pData) return <div>Loading...</div>;

  const {title,image,specs,features,price,stock,description} = pData;

  return (
   <article >
           <aside>
           <div className='category-product-title'>
                   {title}
           </div>
           <figure>
               <div className='category-product-image-container'>
                   <img src={`../assets/${image}`} alt={title}/>
               </div>
           </figure>
           </aside>
           <aside className='category-product-info'>
               <div className='category-product-info-dimensions'>
                   <h3>Dimensions</h3>
                   <label>{specs.dimensions}</label>
               </div>
               {
                specs.capacity&&
                <div className='category-product-info-capacity'>
                   <h3>Capacity</h3>
                   <label>{specs.capacity}</label>
               </div>
               }
               <div className='category-product-info-features'>
                   <h3>Features</h3>
                   <ul>
                       {
                           features?.map((f,index)=>{
                               return <li key={`feature${index}`}>{f}</li>
                           })
                       }
                   </ul>
               </div>
           </aside>
           <aside  className='category-product-finance'>
               <div className='category-product-finance-price'>
                    &pound;{price}   
               </div>
               <div className='category-product-info-stock'>
                    <label >Stock Level:{stock}</label>
                    <label>Free Delivery</label>
               </div>
               <div className='category-product-action'>
                    <button>Add to Basket</button>
               </div>
           </aside>
           <div>{description}</div>
       </article>

  )
}

export default ProductDetails