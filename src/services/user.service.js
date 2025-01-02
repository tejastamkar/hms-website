import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { fdb } from "../helper/firebaseConfig";

export const createUserService = async ({ data }) => {
    try {
        const docRef = await setDoc(doc(fdb, `Users/${data.uid}`), data);
        console.log("Document written with ID: ", docRef);
        localStorage.setItem("user", JSON.stringify({ 
            name: data.name,
            email: data.email,
            role: data.role
        }));
        toast.success("User Created Successfully");
    } catch (e) {
        console.error("Error adding document: ", e);
        toast.error("Error Something went wrong");
    }
}

export const getUserService = async ({ uid, role }) => {
    const docRef = doc(fdb, `Users/${uid}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        
        if (docSnap.data().role !== role) return null;
        return docSnap.data();
    }
    console.log("No such document!");
    return null;
}