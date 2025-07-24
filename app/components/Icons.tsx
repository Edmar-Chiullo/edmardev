import Image from "next/image"
import { iconsFillColor } from "../data/data-icons";

export default function Icons() {
    return (
        <div className="absolute bottom-0 md:visible md:flex md:items-center md:space-x-6 hidden self-end place-self-end w-full p-2">
            {iconsFillColor.map((icon, k) => (
                <div key={k} className="inline-block mx-2">
                    <Image
                        src={icon.src}
                        alt={icon.name}
                        width={icon.width}
                        height={icon.height}
                        className="cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>
    )
}