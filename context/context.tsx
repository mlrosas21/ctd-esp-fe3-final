import { OrderContextType } from "dh-marvel/interface/types";
import {
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";

const initialState: OrderContextType = {
  order: {
    comic: undefined,
    buyer: {
      personalInfo: undefined,
      deliveryInfo: undefined,
      paymentInfo: undefined
    },
  },
  setOrder: (order) => {},
};

export const OrderContext = createContext<OrderContextType>(initialState);

interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [order, setOrder] = useState<OrderContextType["order"]>(
    initialState.order
  );

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
