import { useContext, createContext, useState, useEffect } from "react";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [place, setPlace] = useState("Hyderabad");
  const [cropArray, setCropArray] = useState([
    "Rice",
    "wheat",
    "jowar",
    "Maize",
    "SoyaBean",
  ]);
  const [cropPrices, setCropPrices] = useState(["50", "65", "70", "45", "35"]);

  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <GeneralContext.Provider
      value={{
        cropArray,
        cropPrices,
        orders,
        addOrder,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => useContext(GeneralContext);
