import React from 'react'
//C:\Users\user\Desktop\Coursera-projects\ecommerce_site_in_react\public\assets\10205751.jfif
const CategoryProduct = ({title,image,specs,features,price,stock}) => {
    const color = stock === 0 
    ? "red" 
    : stock <= 5 
      ? "orange" 
      : "black";
  return (
    <article>
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
                <lable>{specs.dimensions}</lable>
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
                        features?.map((f)=>{
                            return <li>{f}</li>
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
                 <label style={{backgroundColor:color ,color:"white"}}>Stock Level:{stock}</label>
                 <label>Free Delivery</label>
            </div>
            <div className='category-product-action'>
                 <button>View Product</button>
                 <button>Add to Basket</button>
            </div>
        </aside>
    </article>
  )
}

export default CategoryProduct