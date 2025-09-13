import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartContext';

const CategoryProduct = ({title,image,specs,features,price,stock,id}) => {
    const cartContext = React.useContext(CartContext);
    const {addProduct} = cartContext; 
    const navigate = useNavigate();
    const color = stock === 0 
    ? "red" 
    : stock <= 5 
      ? "orange" 
      : "black";
  return (
    <article>
        <aside>
        <ProductTitle >
            <Link to={`/products/${id}`}>
                {title}
            </Link>
        </ProductTitle>
        <figure>
            <ImageContainer >
                <Image src={`../assets/${image}`} alt={title}/>
            </ImageContainer>
        </figure>
        </aside>
        <aside >
            <ProductInfo >
                <SubTitle>Dimensions</SubTitle>
                <label>{specs.dimensions}</label>
            </ProductInfo>
            {
             specs.capacity&&
             <ProductInfo >
                <SubTitle>Capacity</SubTitle>
                <label>{specs.capacity}</label>
            </ProductInfo>
            }
            <ProductInfo >
                <SubTitle>Features</SubTitle>
                <UnorderdList>
                    {
                        features?.map((f,index)=>{
                            return <li key={`feature${index}`}>{f}</li>
                        })
                    }
                </UnorderdList>
            </ProductInfo>
        </aside>
        <aside  className='category-product-finance'>
            <Price>
                 &pound;{price}   
            </Price>
            <Stock >
                 <label style={{backgroundColor:color ,color:"white"}}>Stock Level:{stock}</label>
                 <label>Free Delivery</label>
            </Stock>
            <Actions >
                 <button onClick={()=>navigate(`/products/${id}`)}>View Product</button>
                 <button onClick={()=>addProduct({id,title,price})}>Add to Basket</button>
            </Actions>
        </aside>
    </article>
  )
}

export default CategoryProduct;
//styles
const ProductTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    line-height: 1.3;
    color: #0066c0;
    margin-bottom: 10px;
    &:hover {
    color: #c7511f;
    text-decoration: underline;
    cursor: pointer;
    }
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    background: white;
    padding: 10px;
    border: 1px solid #eee;
`
const Image = styled.img`
    width: 100%;
    max-width: 200px;
    height: auto;
    object-fit: cover;
    @media(max-width:600px){
        max-width: 150px;
    }
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 15px;
    label{
        background: #f8f8f8;
        padding: 8px 12px;
        border: 1px solid #ddd;
        font-size: 13px;
        color: #555;
    }
`

const SubTitle = styled.h3`
    font-size: 14px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
`
const UnorderdList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    li{
        background: #f8f8f8;
        padding: 6px 12px 6px 25px;
        border: 1px solid #ddd;
        border-bottom: none;
        font-size: 12px;
        color: #555;
        position: relative;
        &::before{
            content: '•';
            position: absolute;
            left: 10px;
            color: #666;
        }

        &:last-child {
            border-bottom: 1px solid #ddd;
        }
    }

`
const Price = styled.div`
    background: #b12704;
    color: white;
    padding: 15px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;

`
const Stock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 15px;
    label {
        padding: 8px 12px;
        font-size: 13px;
        font-weight: bold;
        text-align: center;
        border: 1px solid #ddd;

        &:last-child {
            background: #008a00;
            color: white;
            border-color: #008a00;
        }
    }
`
const Actions = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    flex-direction: column;
    button {
    color: black;
    background-color: #ffd814;
    border: 1px solid #fcd200;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    &:hover {
        background-color: #f7ca00;
        border-color: #f2c200;
    }
    &:first-child {
        background-color: #e7e9ec;
        border-color: #adb1b8;
        color: #0f1111;
    }
    &:first-child:hover {
        background-color: #d5d9dd;
        border-color: #979aa1;
    }
    &:active{
        box-shadow: 0 2px 5px rgba(213, 217, 221, .5);
        background-color: #d5d9dd;
    }
    
    }
    @media(max-width:1200px)
    {
        flex-direction: row;
    }
    @media(max-width:600px)
    {
        flex-direction: column;
        gap: 8px;
    }
`