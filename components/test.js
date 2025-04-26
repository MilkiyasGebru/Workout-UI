export default function TestPage(){
    return (
        <div className="relative">
            <div className="flex w-full h-screen gap-2 z-0">

                <div className="bg-red-500 w-1/2 z-0">
                    Red
                </div>

                <div className="bg-blue-400 w-1/2 z-0">
                    Blue
                </div>

            </div>

            <div className="bg-red-500 w-1/4 h-[25vh] absolute top-1/2 left-1/3 z-10 rounded-md border-b border-t-4 translate-x-full  border-r-4 border-white">
                Black
            </div>

        </div>

    )
}