import useOrderContext from "context/context";
import React from "react";

const CheckoutPage = () => {
  const { order, setOrder } = useOrderContext();

  return (
    <>
      <h2>Checkout</h2>

      <p>{order.id}</p>
    </>
  );
};

export default CheckoutPage;
