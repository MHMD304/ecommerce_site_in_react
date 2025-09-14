import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    shippingAddress1: "",
    touched: {
      name: false,
      email: false,
      shippingAddress1: false,
    },
  });
  const [disabled, setDisabled] = React.useState(true);
   const errors = React.useMemo(() => ({
    name: form.name.length === 0,
    email: form.email.length === 0,
    shippingAddress1: form.shippingAddress1.length === 0,
  }), [form.name, form.email, form.shippingAddress1]);
  
  const formInvalid = React.useCallback(() => {
    const disabled = Object.keys(errors).some((x) => errors[x]);
    return disabled;
  },[errors]);

  React.useEffect(() => {
    setDisabled(formInvalid());
  }, [form,formInvalid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) {
      return;
    }
    navigate("/confirmOrder");
  };
 

  
  const handleBlur = (e) => {
    const { name } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        touched: { ...prev.touched, [name]: true },
      };
    });
  };
  const showError = (feild) => (errors[feild] ? form.touched[feild] : false);

  return (
    <form onSubmit={handleSubmit}>
      <CheckoutContainer>
        <CheckoutTitle>Shopping Checkout</CheckoutTitle>
        <CheckoutHeader>
          <h4>Your Details</h4>
        </CheckoutHeader>
        <CheckoutHeaderLine />
        <CheckoutTable>
          <CheckoutFormLabel>Name:</CheckoutFormLabel>
          <CheckoutInput
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Enter Name"
            invalid={showError("name")}
            onBlur={handleBlur}
          />
          <CheckoutFormLabel>Email:</CheckoutFormLabel>
          <CheckoutInput
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Enter Email"
            invalid={showError("email")}
            onBlur={handleBlur}
          />
        </CheckoutTable>
        <CheckoutHeader>
          <h4>Address Details</h4>
        </CheckoutHeader>
        <CheckoutHeaderLine />
        <CheckoutTable>
          <CheckoutFormLabel>Copy to shipping</CheckoutFormLabel>
          <CheckoutFormCheckbox type="checkbox" />

          <CheckoutFormLabel>Billing Address</CheckoutFormLabel>

          <CheckoutAddress>
            <CheckoutInput type="text" name="billingAddress1" />
            <CheckoutInput type="text" name="billingAddress2" />
            <CheckoutInput type="text" name="billingCity" />
          </CheckoutAddress>

          <CheckoutFormLabel>Shipping Address</CheckoutFormLabel>

          <CheckoutAddress>
            <CheckoutInput
              type="text"
              name="shippingAddress1"
              placeholder="Enter first address line"
              onChange={handleChange}
              invalid={showError("shippingAddress1")}
              onBlur={handleBlur}
            />
            <CheckoutInput type="text" name="shippingAddress2" />
            <CheckoutInput type="text" name="shippingCity" />
          </CheckoutAddress>
        </CheckoutTable>
        <CancelButton onClick={() => navigate("/basket")}>Cancel</CancelButton>
        <CheckoutButton disabled={disabled}>Confirm Order</CheckoutButton>
      </CheckoutContainer>
    </form>
  );
};

export default Checkout;
const CheckoutContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: repeat(6, auto);
  grid-template-columns: 0.1fr 1fr 0.1fr;
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

const CheckoutTable = styled.div`
  grid-column: 1 / span 3;
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: 0.1fr 0.4fr 0.1fr 0.4fr;
  column-gap: 20px;
  padding-left: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 15px;
    padding-left: 0;
  }
`;

const CheckoutHeader = styled.div`
  grid-column: 1 / span 3;
  padding-top: 20px;
`;

const CheckoutHeaderLine = styled.hr`
  grid-column: 1 / span 3;
  margin-bottom: 20px;
  border: none;
  border-top: 1px solid gray;
`;

const CheckoutTitle = styled.h2`
  grid-column: 1 / span 2;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    grid-column: 1;
    text-align: center;
  }
`;

const CheckoutAddress = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
`;

const CheckoutFormLabel = styled.label`
  justify-self: end;

  @media (max-width: 768px) {
    justify-self: start;
  }
`;

const CheckoutInput = styled.input`
  border-width: 1px;
  border-style: solid;
  padding: 8px;
  border-radius: 5px;

  ${(props) =>
    props.invalid &&
    `
    border-color: #d93025;
    border-width: 2px;
  `}

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CheckoutFormCheckbox = styled.input`
  grid-column: 2 / span 3;
  justify-self: start;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-column: 1;
  }
`;

const CheckoutButton = styled.button`
  border-radius: 8px;
  height: 40px;
  grid-column: 3;
  padding: 0 20px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    width: 100%;
    margin-top: 10px;
  }
`;

const CancelButton = styled.button`
  border-radius: 8px;
  height: 40px;
  grid-column: 1;
  padding: 0 20px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    width: 100%;
  }
`;

