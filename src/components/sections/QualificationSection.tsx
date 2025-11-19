
import { CalendarIcon } from "@heroicons/react/24/outline";

export default function Qualifications() {

  return (

    <div className="flex flex-col items-center justify-center p-5 gap-10">

      <div 
      className="flex flex-col items-center justify-center mt-25"
      data-aos="fade-down"  
      data-aos-duration="1800">
        <h2 className="text-3xl font-semibold text-color-3">Qualifications</h2>
        <p className="text-sm text-color-2">My Educational Background</p>
      </div>

      <div className="flex items-center gap-3 md:gap-10 mt-5">
        
        <div 
        className="mb-40"
        data-aos="fade-right"  
        data-aos-duration="1800">
          <h2 className="text-color-3 text-md font-semibold">Pateros Technological College</h2>
          <p className="text-sm text-color-2">Information Technology</p>
          <p className="flex items-center gap-1 text-sm text-color font-medium">
            <CalendarIcon className="w-5 h-5" />
            2021-2022
          </p>
        </div>

        <div 
        className="flex flex-col justify-center items-center"
        data-aos="fade-down"  
        data-aos-duration="1800">
          <div className="w-3 h-3 rounded-full bg-color-2"></div>
          <div className="w-1 h-35 bg-color-2 mx-5"></div>
          <div className="w-3 h-3 rounded-full bg-color-2"></div>
        </div>

        <div 
        className="mt-40"
        data-aos="fade-left"  
        data-aos-duration="1800">
          <h2 className="text-color-3 text-md font-semibold">STI College Global City</h2>
          <p className="text-sm text-color-2">Information Technology</p>
          <p className="flex items-center gap-1 text-sm text-color font-medium">
            <CalendarIcon className="w-5 h-5" />
            2022-Present
          </p>
        </div>

      </div>

    </div>
  );
}
