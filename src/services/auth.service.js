import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../helper/firebaseConfig";
import { toast } from "react-toastify";
import { createUserService, getUserService } from "./user.service";

export const login = async (email, password, role) => {
 const routeTarget =   await signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            const userData = await getUserService({ uid: user.uid, role: role });
            if (userData == null) {
                toast.error("User not found");
                // setTimeout(() => {
                //     window.location.href = "/login";
                // }, 5000)
                return 0;
            }
            localStorage.setItem("user", JSON.stringify({
                name: userData.name,
                uid: userData.uid,
                email: userData.email,
                role: userData.role
            }));
            
            return userData.role;

        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
            return 0;
        });

        return routeTarget;

};


export const SignUp = async ({ data }) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            data.uid = user.uid;
            await createUserService({ data: data });
            switch (data.role) {
                case 1:
                    window.location.href = "/patient/dashboard";

                    break;
                case 2:
                    window.location.href = "/doctor/dashboard";

                    break;
                case 3:
                    window.location.href = "/admin/dashboard";
                    break;
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });

}


export const logout = async () => {
    signOut(auth).then(() => {
        window.location.href = "/login";
        localStorage.removeItem("user");
    }).catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
    });
}
