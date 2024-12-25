import { addDoc, collection, getDocs } from "firebase/firestore";
import { fdb } from "../helper/firebaseConfig";
import moment from "moment";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDataContext } from "../context/DataContext";




export const storeData = async ({ realData }) => {
    try {
        const docRef = await addDoc(collection(fdb, "Logs"), {
            ...realData,
            dateTime: moment().utc().format(),
        });
        console.log("Document written with ID: ", docRef.id);
        toast.success("Data Stored Successfully");
    } catch (e) {
        console.error("Error adding document: ", e);
        toast.error("Error Something went wrong");
    }
}

export const useGetData = () => {
    const [isLoading, setIsLoading] = useState(true);
    const getData = async () => {
        setIsLoading(true);

        let temp = [];
        const querySnapshot = await getDocs(collection(fdb, "Logs"));

        querySnapshot.docs.forEach((doc) => {
            temp = [...temp, doc.data()];
        });

        setIsLoading(false);
        return temp;
    };
    useEffect(() => {
        getData();

    }, []);

    return { isLoading, getData };
}