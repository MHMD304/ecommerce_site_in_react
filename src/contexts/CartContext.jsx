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
        return state.cartItems;
    }
    const incQty = payload=>{
        dispatch({type:"INCQTY",payload});
        return state.cartItems;
    }
    const decQty = payload=>{
        dispatch({type:"DECQTY",payload});
        return state.cartItems;
    }
    const clearBasket = ()=>{
        dispatch({type:"CLEAR",payload:undefined});
        return state.cartItems;
    }
    const getItems = ()=>{
        return state.cartItems;
    }
    const contextValues = {
        addProduct,
        removeProduct,
        incQty,
        decQty,
        clearBasket,
        getItems,
        ...state
    }
    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;