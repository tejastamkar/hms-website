import { createContext, useContext, useEffect, useState } from "react";
import { useGetData } from "../services/store-db.service";

const DataContext = createContext();
import PropTypes from "prop-types";
export const DataProvider = ({ children }) => {
  const { getData } = useGetData();

  const [realData, setRealData] = useState({
    acetone: 0,
    activity: false,
    heartRate: 0,
    diastolic: 0,
    humidity: 0,
    spo2: 0,
    systolic: 0,
    temperature: 0,
    weather: 0,
  });
  const [calcData, setCalcData] = useState({
    acetone: 0,
    activity: false,
    heartRate: 0,
    diastolic: 0,
    humidity: 0,
    spo2: 0,
    systolic: 0,
    temperature: 0,
    weather: 0,
  });
  const [logData, setLogData] = useState([]);

  const getLogData = async () => {
    setCalcData(realData);
  };
  const refreshLog = async () => {
    const temp = await getData();
    if (temp.length > 0) {
      setLogData(temp.slice().reverse());
      setLogData(temp);
    }
  };
  useEffect(() => {
    refreshLog()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DataContext.Provider
      value={{
        realData,
        setRealData,
        getLogData,
        logData,
        setLogData,
        calcData,
        setCalcData,
        refreshLog
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useDataContext = () => useContext(DataContext);
