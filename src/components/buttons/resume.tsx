import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"

export default function ShowResume(){
    return (
        <>
            <button className="flex items-center justify-center px-4 py-2 mt-3 text-sm bg-color-3 text-white cursor-pointer w-full rounded-md hover:bg-color-2 transition">
                Download Resume <ArrowDownTrayIcon className="w-5 h-5 ml-2"/>
            </button>
        </>
    )
}