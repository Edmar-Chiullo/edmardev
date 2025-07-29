
import Image from "next/image";
import { TechnologyCardProps } from "../types/types";

export default function TechnologyCard({ icon, color, value = 0 }: TechnologyCardProps) {
  
  return (
    <div className={`relative flex gap-1 items-center w-full rounded-lg shadow-lg`}>
        <Image 
            src={icon}
            alt="Technology Icon html-5"
            width={45}
            height={45}
            className="rounded-4xl md:rounded-0"
        />        
        <div className="w-full bg-zinc-400 rounded-2xl">
          <div className={`h-1 ${color} rounded-full `} style={{ width: `${value}%` }}>
            <span className="absolute right-0 top-[-10px]">{`${value}%`}</span>
          </div>
        </div> 
    </div>
  );
}