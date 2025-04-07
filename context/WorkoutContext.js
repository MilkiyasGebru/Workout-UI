"use client"
import {createContext, useReducer} from "react";
import {WorkoutsReducer} from "@/Reducer/WorkoutsReducer";

export const WorkoutContext = createContext(null);



export const WorkoutsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(WorkoutsReducer, {
        workouts: [],
    });

    return (
        <WorkoutContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )

}