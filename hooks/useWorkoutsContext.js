import {WorkoutContext} from "@/context/WorkoutContext";
import {useContext} from "react";

export const useWorkoutsContext = ()=>{
    const context = useContext(WorkoutContext);

    if (context === null){
        throw new Error("Context is Null")
    }

    return context
}