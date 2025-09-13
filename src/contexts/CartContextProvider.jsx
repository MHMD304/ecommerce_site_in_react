import { CartContext } from "./CartContext";
const initialState = {cartItems:[]};
const CartContextProvider = ({children})=>{
    return (
        <CartContext.Provider value={initialState}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;