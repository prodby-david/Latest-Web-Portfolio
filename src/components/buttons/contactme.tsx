import { EnvelopeOpenIcon } from "@heroicons/react/24/outline"

export default function ContactMe(){
    return (
        <>
           <button className="flex items-center mt-6 text-md px-4 py-2 bg-color-3 text-white rounded-md hover:bg-color-2 cursor-pointer transition-colors">
            Contact Me <EnvelopeOpenIcon className="w-5 h-5 ml-2"/>
           </button>
        </>
    )
}