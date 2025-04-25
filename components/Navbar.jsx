"use client"
import {useContext} from "react";
import {useLogout} from "@/hooks/useLogout";
import {AuthContext} from "@/context/AuthContext";

export default function Navbar() {

    const {logout} = useLogout();
    const context = useContext(AuthContext);
    console.log('The state of the context is ', context);
    console.log(context === null)

    return (
        <nav className="p-4 max-w-[1400px] mx-auto flex justify-between">
            <div>
                <h1 className="text-4xl font-bold">Workout Partner</h1>
            </div>

            <button className="px-3 py-2 w-fit" onClick={logout}>
                Logout
            </button>

        </nav>
    )
}