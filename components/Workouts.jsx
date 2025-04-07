"use client"
import {useEffect, useState} from "react";
import WorkoutDetails from "@/components/WorkoutDetails";

export default function Workouts(){

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async ()=>{
            const response = await fetch("http://localhost:4000/api/workouts");
            const json_response = await response.json();
            console.log(json_response,"workouts are fetched")
            if (response.ok){
                console.log(json_response,"workouts are fetched")
                setWorkouts(json_response);
            }


        }
        fetchWorkouts()
    }, []);

    return (
        <div className="container bg-[#f1f1f1] min-h-[90vh] p-4">
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