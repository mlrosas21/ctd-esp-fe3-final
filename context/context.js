import { useState, createContext, useContext } from "react";

const initialState = {
  order: null,
  setOrder: (order) => {}
};

export const OrderContext = createContext(initialState);

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrderContext = () => {
  const context = useContext(OrderContext);

  return context;
};

export default useOrderContext;
