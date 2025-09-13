import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails.jsx'
import Basket from './components/Basket.jsx'
import Checkout from './components/Checkout.jsx'
import Category from './components/Category.jsx'
import Layout from './components/Layout.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
            <Route path='/' element={<Layout />}>
            <Route path='products/:pid' element={<ProductDetails/>}  />
            <Route path='basket' element={<Basket/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='categories/:cid' element={<Category/>}/>
            </Route>
        </Routes>
        
    </BrowserRouter>
)
