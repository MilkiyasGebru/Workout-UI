"use client"

import {useState} from "react";
import {useSignup} from "@/hooks/useSignup";
import Link from "next/link";

export default function SignUpOrRegister ({name}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signUp, isLoading, error} = useSignup()


    const handleSubmitForm = async (e) => {
        e.preventDefault();

        await signUp(email, password);
        console.log("This is the error", error)
    }

    return (
        <form action="" className="p-4 border border-gray-100 rounded-md flex flex-col w-3/5 xl:w-1/3 bg-white" onSubmit={handleSubmitForm}>
            
            <h3 className="text-2xl text-center font-semibold "> {name}</h3>

            <label htmlFor="email" className="text-xl mt-4">Email:</label>
            <input type="text" id="email" value={email}
                   className="border border-gray-200 px-3 py-2 outline-none rounded-md w-2/3"
                   onChange={(e) => setEmail(e.target.value)}/>


            <label htmlFor="password" className="mt-4 text-xl">Password:</label>
            <input type="password" id="password"
                   className="border border-gray-200 outline-none px-3 py-2 rounded-md w-2/3"
                   value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button disabled={isLoading} className="px-3 py-2 rounded-md border border-gray-100 w-fit mt-4 bg-lime-200 text-gray-600 cursor-pointer" onClick={handleSubmitForm}>{name}</button>
            {error && <p className="py-4 text-red-300">{error}</p>}
            <Link href={"/home"}>Home</Link>
        </form>
    )

}