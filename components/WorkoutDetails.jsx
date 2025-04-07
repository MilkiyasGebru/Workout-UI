export default function WorkoutDetails({workout}){

    return (
        <div className="w-3/5 bg-white rounded-lg border p-4 flex flex-col">
            <h3 className="text-green-500 font-semibold">{workout.title}</h3>
            <p>Load(kg): {workout.load}</p>
            <p>Reps: {workout.reps}</p>
        </div>
    )

}