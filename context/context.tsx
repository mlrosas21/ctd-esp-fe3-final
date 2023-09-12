import { Buyer, Comic } from "dh-marvel/interface/types";
import {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface OrderContextType {
  order: {
    comic: Comic | undefined;
    buyer: Buyer | undefined;
  };
  setOrder: Dispatch<
    SetStateAction<{ comic: Comic | undefined; buyer: Buyer | undefined }>
  >;
}

const initialState: OrderContextType = {
  order: {
    comic: undefined,
    buyer: undefined,
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
