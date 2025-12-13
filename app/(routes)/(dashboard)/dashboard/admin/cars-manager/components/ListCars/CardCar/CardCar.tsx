"use client"
import { toast } from "sonner"
import axios from "axios";
import { Button } from "@/components/ui/button"
import { Fuel, Gauge, Gem, Trash, Upload, User, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CardCarProps } from "./CardCar.type";
import { ButtonEditCar } from "./ButtonEditCar";

export function CardCar({ car }: CardCarProps) {
    const router = useRouter();

    const deleteCar = async () => {
        try {
            await axios.delete(`/api/car/${car.id}`)
            toast.success("Coche Eliminado");
            router.refresh();
        } catch (error) {
            toast.error("Algo salió mal", {
                description: "Please try again later.",
            })
        }
    };

    const handlerPublishCar = async (publish: boolean) => {
        try {
            await axios.patch(`/api/car/${car.id}`, { isPublish: publish });

            if (publish) {
                toast.success("Coche Publicado");
            } else {
                toast.warning("Coche Despublicado");
            }
            router.refresh()
        } catch (error) {
            toast.error("Algo salió mal", {
                description: "Please try again later.",
            });
        }
    };

    return (
        <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg dark:shadow-gray-800/50 dark:hover:shadow-gray-700/50 flex flex-col min-h-[520px] border border-gray-200 dark:border-gray-800 transition-all">

            {/* Imagen */}
            <div className="w-full h-56 bg-gray-50 dark:bg-gray-800 rounded-t-lg overflow-hidden transition-colors">
                <Image
                    src={car.photo}
                    alt={car.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain dark:brightness-90 transition-all"
                />
            </div>

            {/* Estado */}
            <p className={`absolute top-0 left-0 w-full text-center text-white py-1 rounded-t-lg font-medium
                ${car.isPublish ? "bg-green-600 dark:bg-green-700" : "bg-red-500 dark:bg-red-600"}`}>
                {car.isPublish ? "Publicado" : "No Publicado"}
            </p>

            {/* Contenido */}
            <div className="p-3 flex flex-col flex-grow">

                {/* Título y precio */}
                <div className="mb-3">
                    <p className="text-lg font-semibold min-h-14 text-gray-900 dark:text-white transition-colors">
                        {car.name}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 transition-colors">
                        S/ {car.priceDay} x día
                    </p>
                </div>

                {/* Características */}
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                    <p className="flex items-center">
                        <Gem className="w-4 h-4 mr-2" />{car.type}
                    </p>
                    <p className="flex items-center">
                        <Wrench className="w-4 h-4 mr-2" />{car.transmission}
                    </p>
                    <p className="flex items-center">
                        <User className="w-4 h-4 mr-2" />{car.people}
                    </p>
                    <p className="flex items-center">
                        <Fuel className="w-4 h-4 mr-2" />{car.engine}
                    </p>
                    <p className="flex items-center">
                        <Gauge className="w-4 h-4 mr-2" />{car.cv} HP
                    </p>
                </div>
                {/* Footer botones */}
                <div className="mt-auto">
                    <div className="flex justify-between gap-2 mb-3">
                        <Button 
                            variant="outline" 
                            onClick={deleteCar}
                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-950 hover:text-red-600 dark:hover:text-red-400 hover:border-red-300 dark:hover:border-red-800 transition-colors"
                        >
                            Eliminar <Trash className="w-4 h-4 ml-2" />
                        </Button>

                        <ButtonEditCar carData={car} />
                    </div>

                    {/* Botón Publicar / No Publicar */}
                    {car.isPublish ? (
                        <Button 
                            className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-orange-950 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-800 transition-colors" 
                            variant="outline" 
                            onClick={() => handlerPublishCar(false)}
                        >
                            Despublicar <Upload className="w-4 h-4 ml-2" />
                        </Button>
                    ) : (
                        <Button 
                            className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors" 
                            onClick={() => handlerPublishCar(true)}
                        >
                            Publicar <Upload className="w-4 h-4 ml-2" />
                        </Button>
                    )}  
                </div>

            </div>
        </div>
    );
}