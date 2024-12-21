import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [realData, setRealData] = useState({
    acetone: 0,
    bp: 0,
    heartRate: 0,
    sp2: 0,
    temperature: 0,
  });

  return (
    <DataContext.Provider value={{ realData, setRealData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
