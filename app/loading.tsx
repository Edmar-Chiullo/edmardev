import { iconsFillColor } from "./data/data-icons"

export default function Loading() {
    return (
        <section id="home" className="relative z-30 w-full h-screen bg-zinc-50">
            <div className="fixed flex justify-around bg-zinc-50 shadow-md top-0 z-40 w-full">
                <h1 className="text-xl font-bold text-zinc-200">
                </h1>
                <ul className="w-96">
                    <li className="w-3 h-2 bg-zinc-200"></li>
                    <li className="w-3 h-2 bg-zinc-200"></li>
                    <li className="w-3 h-2 bg-zinc-200"></li>
                    <li className="w-3 h-2 bg-zinc-200"></li>
                    <li className="w-3 h-2 bg-zinc-200"></li>
                </ul>
            </div>
            <div className="absolute inset-0 bg-zinc-50"></div>
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            </div>
            <div className="absolute z-10 flex flex-col w-full h-screen items-center justify-center">
                <div className="h-96 flex flex-col items-center justify-center gap-4 bg-zinc-50">
                    <h1 className="text-4xl md:text-6xl font-bold text-center bg-zinc-200">
                    </h1>
                    <p className="text-lg md:text-2xl text-center mt-4 bg-zinc-200">
                    </p>
                </div>
                <div className="absolute bottom-0 md:visible md:flex md:items-center md:space-x-6 hidden self-end place-self-end w-full p-2">
                    {iconsFillColor.map((icon, k) => (
                        <div key={k} className="inline-block mx-2">
                            <div className="bg-zinc-300" style={{width: icon.width, height: icon.height }}>

                            </div>
                        </div>
                    ))}
                </div>
                
            </div>        
        </section>
        
    )
}