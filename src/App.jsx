import React,{ useState } from 'react'
import './App.css'
import Category from './components/Category';
import { getCategories} from './fetcher';
import Layout from './components/Layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails.jsx'
import Basket from './components/Basket.jsx'
import Checkout from './components/Checkout.jsx'
import Home from './components/Home.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';

function App() {
  const [categories,setCategories] = useState({errorMessage:'',data:[]});

  React.useEffect(()=>{
    const fetchData = async ()=>{
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  },[])

 
  
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
            <Route path='/' element={<Layout categories={categories} />}>
              <Route index element={<Home/>}/>
              <Route path='products/:pid' element={<ProductDetails/>}  />
              <Route path='basket' element={<Basket/>}/>
              <Route path='checkout' element={<Checkout/>}/>
              <Route path='categories/:cid' element={<Category/>}/>
              <Route path='confirmOrder' element={<OrderConfirmation/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
