import {
  CodeBracketIcon,
  CursorArrowRaysIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CommandLineIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

export default function FloatingIconsBackground() {
  const icons = [
    { Icon: CodeBracketIcon, className: "top-15 left-12 animate-delay-0" },         
    { Icon: CursorArrowRaysIcon, className: "bottom-16 right-20 animate-delay-1000" }, 
    { Icon: CpuChipIcon, className: "top-1/3 left-1/4 animate-delay-2000" },         
    { Icon: GlobeAltIcon, className: "bottom-24 left-10 animate-delay-3000" },      
    { Icon: CommandLineIcon, className: "top-1/2 right-16 animate-delay-4000" },    
    { Icon: CloudIcon, className: "top-20 right-1/3 animate-delay-5000" },         
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, className }, index) => (
        <div
          key={index}
          className={`absolute ${className} text-color-2 opacity-50 floating`}
        >
          <Icon className="w-10 h-10" />
        </div>
      ))}
    </div>
  );
}
