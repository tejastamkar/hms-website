import { createContext, useContext, useEffect, useState } from "react";
import { storeData, useGetData } from "../services/store-db.service";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { getData } = useGetData();
  const [realData, setRealData] = useState({
    acetone: 0,
    bp: 0,
    heartRate: 0,
    sp2: 0,
    temperature: 0,
  });
  const [logData, setLogData] = useState([]);

  const getLogData = async () => {
    await storeData({ realData });
    const temp = await getData();
    setLogData(temp);
  };

  useEffect(() => {
    (async () => {
      const temp = await getData();
      setLogData(temp);
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{ realData, setRealData, getLogData, logData, setLogData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
