import styled from "styled-components";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
const Basket = () => {
  const { getItems, clearBasket, removeProduct, incQty, decQty } =
    useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(getItems());
  }, [getItems]);

  const renderCart = () => {
    return cartItems.map((item) => (
      <React.Fragment key={item.id}>
        <div>
          <Link to={`/products/${item.id}`}>
            <p>{item.title}</p>
          </Link>
        </div>
        <BasketQty>
          <p>{item.quantity}</p>
          <IconsContainer>
            <FaPlus onClick={() => setCartItems(incQty({ id: item.id }))} />
            <FaMinus onClick={() => setCartItems(decQty({ id: item.id }))} />
            <FaTrash
              onClick={() => setCartItems(removeProduct({ id: item.id }))}
            />
          </IconsContainer>
        </BasketQty>
        <BasketPrice>
          <p>&pound;{item.price}</p>
        </BasketPrice>
      </React.Fragment>
    ));
  };

  const renderTotal = () => {
    const items = getItems();
    const total = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total;
  };

  return (
    <BasketContainer>
      <BasketTitle>Shopping Cart</BasketTitle>
      <BasketButton onClick={() => navigate("/checkout")}>
        CheckOut
      </BasketButton>
      <BasketTable>
        <BasketHeader>
          <h4>Item</h4>
          <h4>Quantiy</h4>
          <h4>Price</h4>
        </BasketHeader>
        <BasketHeaderLine />
        <BasketHeader>{renderCart()}</BasketHeader>
        <BasketHeaderLine />
        <BasketButton onClick={() => setCartItems(clearBasket())}>
          Clear
        </BasketButton>
        <BasketTotal>Total:{renderTotal()}&pound;</BasketTotal>
      </BasketTable>
    </BasketContainer>
  );
};

export default Basket;
const BasketContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  grid-template-columns: 0.1fr 1fr 0.1fr;
`;

const BasketTable = styled.div`
  grid-column: 1 / span 3;

  grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
  column-gap: 20px;
  padding-left: 10px;
`;

const BasketHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
`;

const BasketHeaderLine = styled.hr`
  margin-bottom: 20px;
  border: 1px solid gray;
`;

const BasketTitle = styled.h2`
  grid-column: 1 / span 2;

  padding-bottom: 20px;
`;

const BasketQty = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;

const BasketPrice = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const BasketTotal = styled.h2`
  justify-self: end;
`;

const BasketButton = styled.button`
  border-radius: 8px;
  padding: 0 5px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 5px;
  alig-item: center;
  justify-content: center;
  font-size: 20px;
`;
