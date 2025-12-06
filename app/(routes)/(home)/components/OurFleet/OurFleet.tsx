import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
    categoryOurFleet,
    dataFirstBlockOurFleet,
    dataSecondBlockOurFleet,
    } from "./OurFleet.data";
    import Image from "next/image";
    import { cn } from "@/lib/utils";
    import Link from "next/link";

    export function OurFleet() {
    return (
        <div className="max-w-6xl mx-auto text-center px-6 py-8">

        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Nuestra Flota de Vehículos
        </h3>

        <p className="text-base md:text-lg mt-4 mb-8 text-center max-w-2xl mx-auto">
            No te prives del placer de conducir los mejores coches premium de todo el mundo
            aquí y ahora
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 items-center justify-center 
            mb-8 max-w-2xl mx-auto">
            {categoryOurFleet.map(({ name, active }) => (
            <div
                key={name}
                className={cn(
                "rounded-xl py-2 px-3 text-sm",
                active ? "bg-black text-white" : "bg-slate-100"
                )}
            >
                {name}
            </div>
            ))}
        </div>

        <div className="mb-10">
            <div className="grid grid-cols-3 gap-6 mb-6">
            {dataFirstBlockOurFleet.map(({ url }) => (
                <div key={url}>
                <Image
                    src={`/images/${url}`}
                    alt="Car"
                    width={400}
                    height={300}
                    className="rounded-xl w-full object-cover"
                />
                </div>
            ))}
            </div>

            <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
            {dataSecondBlockOurFleet.map(({ url }) => (
                <div key={url}>
                <Image
                    src={`/images/${url}`}
                    alt="Car"
                    width={400}
                    height={300}
                    className="rounded-xl w-full object-cover"
                />
                </div>
            ))}
            </div>
        </div>

        <Link href="/cars">
            <Button className="rounded-xl px-8 py-6 text-lg" variant="outline">
            Mirar todos los modelos
            <MoveRight className="ml-2" />
            </Button>
        </Link>

        </div>
    );
}


