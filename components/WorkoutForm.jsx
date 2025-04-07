"use client"

import {useState} from "react";
import {useWorkoutsContext} from "@/hooks/useWorkoutsContext";

export default function WorkoutForm() {

    const [title, setTitle] = useState("")
    const [load, setLoad] = useState(0)
    const [reps, setReps] = useState(0)
    const [error, setError] = useState("")
    const [disableButton, setDisableButton] = useState(false)

    const {dispatch} = useWorkoutsContext()


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleLoadChange = (e) => {
        setLoad(e.target.value)
    }

    const handleRepsChange = (e)=>{
        setReps(e.target.value)
    }


    const submitForm = (e)=>{

        console.log("Hi There")
        e.preventDefault();
        setDisableButton(true)


        if (title === ""){
            setError("Title is required");
        }

        else if ( load === 0){
            setError("Load is required")
        }

        else if ( reps === 0){
            setError("Reps is required")
        }

        else{
            const addWorkout = async () => {
                const workout = {title, load, reps}

                const response = await fetch("http://localhost:4000/api/workouts",
                    {
                        method: "POST",
                        body: JSON.stringify(workout),
                        headers: {
                            'Content-Type':"application/json"
                        }
                    })

                const json_response = await response.json()

                if (!response.ok){
                    setError(json_response.error)
                }
                else{
                    setTitle("")
                    setReps(0)
                    setLoad(0)
                    setError("")

                    dispatch({type:'CREATE_WORKOUT',payload:json_response})
                }

            }
            addWorkout()
        }

        setDisableButton(false)
    }

    return (
        <div className="w-2/5">
            <form action="" className="flex flex-col w-4/5 ">

                <h2 className="font-semibold text-2xl">Add a New Workout</h2>

                <label htmlFor="title">Exercise Title</label>
                <input type="text" value={title} onChange={handleTitleChange} id="title" className="rounded-md border border-[#f1f1f1] p-2 bg-white"/>

                <label htmlFor="load">Load (in kg):</label>
                <input type="number" id="load" value={load} onChange={handleLoadChange} className="rounded-md border p-2 bg-white border-[#f1f1f1]"/>

                <label htmlFor="reps">Reps:</label>
                <input type="number" id="reps" value={reps} onChange={handleRepsChange} className="rounded-md border p-2 bg-white border-[#f1f1f1]"/>

                <button className="bg-green-600 px-3 py-2 w-fit mt-4 rounded-md border border-[#f1f1f1] text-white cursor-pointer" onClick={submitForm} disabled={disableButton} >
                    Add Workout
                </button>

            {/*    Display the errors*/}
                {error !== "" && <p className="mt-3 text-red-600">{error}</p>}

            </form>
        </div>
    )
}