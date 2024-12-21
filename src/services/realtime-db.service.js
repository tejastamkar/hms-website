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
                console.log(data);
                const sensorData = data.sensor;
                setRealData(prev => {
                    return {
                        ...prev,
                        acetone: sensorData.acetone,
                        bp: sensorData.bp,
                        heartRate: sensorData.heartRate,
                        sp2: sensorData.sp2,
                        temperature: sensorData.temperature,
                    }
                })

            });
            setIsLoading(false);
        })();

    }, []);

    // await get(child(dbRef, `sensor`)).then((snapshot) => {
    //     if (snapshot.exists()) {
    //         console.log(snapshot.val());
    //     } else {
    //         console.log("No data available");
    //     }
    // }).catch((error) => {
    //     console.error(error);
    // });


    return { isLoading }
}