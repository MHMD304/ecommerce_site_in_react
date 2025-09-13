import React,{createContext} from "react";
import { CartReducer } from "./CartReducer";
export const CartContext = createContext(undefined);

const initialState = {cartItems:[]};
const CartContextProvider = ({children})=>{
    const [state,dispatch] = React.useReducer(CartReducer,initialState);
    const addProduct = payload=>{
        dispatch({type:"ADD",payload});
    }
    const contextValues = {
        addProduct,
        ...state
    }
    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;