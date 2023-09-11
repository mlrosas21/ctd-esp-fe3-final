import { Comic } from "dh-marvel/interface/types";
import { useState, createContext, useContext, ReactNode } from "react";

interface OrderContextType {
  order: Comic | null; // Allow 'null' as a valid initial value
  setOrder: (order: Comic | null) => void; // Allow 'null' as a valid argument
}

const initialState: OrderContextType = {
  order: null,
  setOrder: (order) => {},
};

export const OrderContext = createContext<OrderContextType>(initialState);

interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [order, setOrder] = useState<Comic | null>(null);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrderContext = (): OrderContextType => {
  const context = useContext(OrderContext);

  return context;
};

export default useOrderContext;
