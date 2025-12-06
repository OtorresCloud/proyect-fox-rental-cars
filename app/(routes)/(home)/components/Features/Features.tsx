import { dataFeatures } from "./Features.data";
import { Reveal } from "@/components/Shared/Reveal";

export function Features() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-8">

        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Características del servicio
        </h3>

        <p className="max-w-lg mt-4 mb-10 text-base md:text-lg">
            Nos enfocamos en la satisfacción y seguridad de nuestros clientes.
            Por eso brindamos el mejor servicio que puedas imaginar.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {dataFeatures.map(({ icon: Icon, text, bg, delay }) => (
            <Reveal
                key={text}
                className="p-6 rounded-xl hover:shadow-md flex flex-col items-center"
                position="right"
                delay={delay}
            >
                <div className={`rounded-full ${bg} w-fit p-4 mb-4 flex justify-center`}>
                <Icon className="w-8 h-8" />
                </div>

                <p className="font-bold text-center text-lg">{text}</p>
            </Reveal>
            ))}
        </div>

        </div>
    );
}
