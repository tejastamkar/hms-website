import { useEffect } from "react";
import { useDataContext } from "../context/DataContext";
import { useGetDeviceData } from "../services/realtime-db.service";
import imageAssets from "../utils/imageAssets";

export default function HomePage() {
  const { realData } = useDataContext();
  const { acetone, bp, heartRate, sp2, temperature } = realData;
  const { isLoading } = useGetDeviceData();
    useEffect(() => {
        console.log(realData);
        
    }, [realData]);
  return (
    <>
      {" "}
      <h1 className="text-6xl font-bold text-center my-10">
        Welcome to SMART-CARE
      </h1>
      {isLoading ? (
        <>
          <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </>
      ) : (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto mt-10 p-4 rounded-md">
          <h2 className="font-bold mx-auto text-center text-3xl my-3">
            Sensor Reading
          </h2>
          <div className="flex items-center gap-5 mb-5">
            <img
              src={imageAssets.heartRate}
              alt="Heart Rate"
              className="w-12 h-12"
            />
            <p className="flex-1 text-lg">Heart Rate</p>
            <p className="flex-2 text-lg mr-auto">{heartRate}</p>
          </div>
          <div className="flex items-center gap-5 mb-5">
            <img src={imageAssets.spo2} alt="SpO2" className="w-12 h-12" />
            <p className="flex-1 text-lg">SpO2</p>
            <p className="flex-2 text-lg mr-auto">{sp2}</p>
          </div>
          <div className="flex items-center gap-5 mb-5">
            <img src={imageAssets.bp} alt="BP" className="w-12 h-12" />
            <p className="flex-1 text-lg">BP</p>
            <p className="flex-2 text-lg mr-auto">{bp}</p>
          </div>
          <div className="flex items-center gap-5 mb-5">
            <img
              src={imageAssets.cholesterol}
              alt="Acetone Level"
              className="w-12 h-12"
            />
            <p className="flex-1 text-lg">Acetone Level</p>
            <p className="flex-2 text-lg mr-auto">{acetone}</p>
          </div>
          <div className="flex items-center gap-5 mb-5">
            <img
              src={imageAssets.temp}
              alt="Temperature"
              className="w-12 h-12"
            />
            <p className="flex-1 text-lg">Temperature</p>
            <p className="flex-2 text-lg mr-auto">{temperature}</p>
          </div>
        </div>
      )}
    </>
  );
}
