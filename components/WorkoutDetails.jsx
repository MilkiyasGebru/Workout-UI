import {useWorkoutsContext} from "@/hooks/useWorkoutsContext";

export default function WorkoutDetails({workout}){

    const {dispatch} = useWorkoutsContext()

    const handleDelete = async ()=>{

        console.log("Deleting", workout._id)
        const response = await fetch("http://localhost:4000/api/workouts/"+workout._id,{
            method:"DELETE"
        })

        if (response.ok){
            dispatch({type:"DELETE_WORKOUT", payload:{id:workout._id}})
        }


    }

    return (
        <div className="w-3/5 bg-white rounded-lg border p-4 flex flex-col">
            <div className="flex justify-between items-center">
                <h3 className="text-green-500 font-semibold">{workout.title}</h3>
                <button className="border w-fit px-3 py-2 rounded-md cursor-pointer bg-[#f1f1f1]" onClick={handleDelete}>Delete</button>
            </div>
            <p>Load(kg): {workout.load}</p>
            <p>Reps: {workout.reps}</p>
        </div>
    )

}