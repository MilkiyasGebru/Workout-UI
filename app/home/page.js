import {AuthContextProvider} from "@/context/AuthContext";
import {WorkoutsContextProvider} from "@/context/WorkoutContext";
import Navbar from "@/components/Navbar";
import Workouts from "@/components/Workouts";
import WorkoutForm from "@/components/WorkoutForm";

export default function Home() {


    return (
        <>
            <Navbar />
            <div className="flex container bg-[#f1f1f1] min-h-[90vh] p-4 items-start">
                <Workouts />
                <WorkoutForm />
            </div>
        </>
    );
}