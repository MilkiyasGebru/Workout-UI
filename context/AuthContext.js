import {createContext, useReducer} from "react";

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {

    const [state,dispatch] = useReducer(authReduer, {
        user: null
    })

    return (
        <div></div>
    )

}