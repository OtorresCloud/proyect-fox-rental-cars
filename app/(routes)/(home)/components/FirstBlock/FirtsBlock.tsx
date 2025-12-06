
import {Reveal} from "@/components/Shared/Reveal/Reveal";
import Image from "next/image";

export function FirtsBlock() {
    return (
        <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
            <Reveal className="p-3 lg:pl-20 lg:-mt-40" position="bottom" delay={1}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
            Alquiler
            <span className="block"> de coches premium </span>
            en Perú 
            </h1>

            <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
                No te niegues el placer de conducir lo mejor del mundo premium aquí y ahora
            </p>


        </Reveal>

        <Reveal className="flex justify-end" position="right">
            <Image src="/images/principalhome (1).PNG" alt="Rent cars" width={800} height={800} />
        </Reveal>
        </div>
    );
}

