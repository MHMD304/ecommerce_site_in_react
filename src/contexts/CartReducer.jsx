const storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const CartReducer = (state, action) => {
  let index = -1;
  let newItems = [...state.cartItems];
  if (action.payload)
    index = state.cartItems.findIndex((x) => x.id === action.payload.id);
  switch (action.type) {
    case "ADD":
    case "INCQTY":
      if (index === -1) {
        //state.cartItems.push({...action.payload,quantity:1}) DON'TTTTTT UPDATE THE STATEEEEEEEEEEE DIRECTLYYY!!!!!!!!!
        newItems.push({ ...action.payload, quantity: 1 });
      } else {
        //state.cartItems[index].quantity++;
        newItems[index].quantity++;
      }
      break;
    case "REMOVE":
      if (index > -1)
        newItems = state.cartItems.filter((x) => x.id !== action.payload.id);
      break;
    case "DECQTY":
      if (index > -1) {
        //state.cartItems[index].quantity--;BADDD WAAAY!!
        if (newItems[index].quantity === 1)
          newItems = newItems.filter((x) => x.id !== action.payload.id);
        else newItems[index].quantity--;
      }
      break;
    case "CLEAR":
      newItems = [];
      break;
    default:
      return state;
  }
  storage(newItems);
  return { ...state, cartItems: newItems };
};
