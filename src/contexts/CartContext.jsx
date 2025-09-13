import React,{createContext} from "react";
import { CartReducer } from "./CartReducer";
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(undefined);

const initialState = {cartItems:[]};
const CartContextProvider = ({children})=>{
    const [state,dispatch] = React.useReducer(CartReducer,initialState);
    const addProduct = payload=>{
        dispatch({type:"ADD",payload});
    }
    const removeProduct = payload=>{
        dispatch({type:"REMOVE",payload});
    }
    const incQty = payload=>{
        dispatch({type:"INCQTY",payload});
    }
    const decQty = payload=>{
        dispatch({type:"DECQTY",payload});
    }
    const clearBasket = ()=>{
        dispatch({type:"CLEAR",payload:undefined});
    }
    const contextValues = {
        addProduct,
        removeProduct,
        incQty,
        decQty,
        clearBasket,
        ...state
    }
    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;