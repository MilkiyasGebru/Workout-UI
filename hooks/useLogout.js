import {useAuthContext} from "@/hooks/useAuthContext";
import {log} from "next/dist/server/typescript/utils";

export  const useLogout = ()=>{
    const { dispatch} = useAuthContext()
    const logout = () => {
        localStorage.removeItem("workout-user")
        dispatch({type: 'LOGOUT'})
    }

    return {logout}

}