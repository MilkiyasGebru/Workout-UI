"use client"
import {useEffect, useState} from "react";
import WorkoutDetails from "@/components/WorkoutDetails";

export default function Workouts(){

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async ()=>{

            const response = await fetch("http://localhost:4000/api/workouts");
            const json_response = await response.json();

            if (response.ok){
                setWorkouts(json_response);
            }


        }
        fetchWorkouts()
    }, []);

    return (
        <div className="w-3/5">
            <div className="flex flex-col gap-3 items-center justify-end ">
                {workouts && workouts.map((workout, index) => {
                    return (
                        <WorkoutDetails workout={workout} key={index} />
                    )
                })}
            </div>
        </div>
    )
}