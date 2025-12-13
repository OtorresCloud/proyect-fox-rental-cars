import { dataFeatures } from "./Features.data";
import { Reveal } from "@/components/Shared/Reveal";

export function Features() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-8 bg-white dark:bg-black transition-colors">

            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white transition-colors">
                Características del servicio
            </h3>

            <p className="max-w-lg mt-4 mb-10 text-base md:text-lg text-gray-700 dark:text-gray-300 transition-colors">
                Nos enfocamos en la satisfacción y seguridad de nuestros clientes.
                Por eso brindamos el mejor servicio que puedas imaginar.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {dataFeatures.map(({ icon: Icon, text, bg, delay }) => (
                    <Reveal
                        key={text}
                        className="p-6 rounded-xl hover:shadow-md dark:hover:shadow-gray-800/50 flex flex-col items-center bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 transition-all"
                        position="right"
                        delay={delay}
                    >
                        <div className={`rounded-full ${bg} dark:opacity-90 w-fit p-4 mb-4 flex justify-center transition-opacity`}>
                            <Icon className="w-8 h-8 text-gray-900 dark:text-gray-100" />
                        </div>

                        <p className="font-bold text-center text-lg text-gray-900 dark:text-white transition-colors">
                            {text}
                        </p>
                    </Reveal>
                ))}
            </div>

        </div>
    );
}
