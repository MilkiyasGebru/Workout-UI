"use client"

import {useState} from "react";
import {useAuthContext} from "@/hooks/useAuthContext";

export const useSignup = ()=>{
    const [isLoading,setIsLoading ] = useState(false);
    const [error,setError] = useState(null);
    const { dispatch} = useAuthContext();


    const signUp = async (email,password) => {
        setIsLoading(true)
        setError(null)

        const options = {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({email,password})
        }

        const response = await fetch("http://localhost:4000/api/users/signup", options)
        const json_response = await response.json()
        setIsLoading(false)
        if (!response.ok){

            setError(json_response.error)
        }
        else{

            localStorage.setItem("workout-user", JSON.stringify(json_response))

            dispatch({
                type:"LOGIN",
                payload:json_response
            })
        }

    }
    return {isLoading, error, signUp}
}