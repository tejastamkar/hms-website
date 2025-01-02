import { ref, onValue } from "firebase/database";
import { database } from "../helper/firebaseConfig";
import { useEffect, useState } from "react";
import { useDataContext } from "../context/DataContext";

const dbRef = ref(database);

export const useGetDeviceData = () => {
    const { setRealData } = useDataContext();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        (async () => {
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                const sensorData = data.sensor;
                setRealData(prev => {
                    return {
                        ...prev,
                        acetone: sensorData.acetone,
                        activity: sensorData.activity,
                        heartRate: sensorData.heartRate,
                        diastolic: sensorData.diastolic,
                        humidity: sensorData.humidity,
                        spo2: sensorData.spo2,
                        systolic: sensorData.systolic,
                        temperature: sensorData.temperature,
                        weather: sensorData.weather,
                    }
                })

            });
            setIsLoading(false);
        })();

    }, []);


    return { isLoading }
}