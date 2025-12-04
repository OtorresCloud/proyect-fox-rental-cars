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
        toast.success("Coche Publicado");;
        } else {
        toast.warning("Coche Despublicado");;
        }
        router.refresh()
    } catch (error) {
        toast.error("Algo salió mal", {
            description: "Please try again later.",
        });
    }
};

    return (
        <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg flex flex-col min-h-[520px]">

        {/* Imagen */}
        <div className="w-full h-56 bg-gray-50 rounded-t-lg overflow-hidden">
            <Image
            src={car.photo}
            alt={car.name}
            width={400}
            height={300}
            className="w-full h-full object-contain"
            />
        </div>

        {/* Estado */}
        <p className={`absolute top-0 left-0 w-full text-center text-white py-1 rounded-t-lg
            ${car.isPublish ? "bg-green-600" : "bg-red-500"}`}>
            {car.isPublish ? "Publicado" : "No Publicado"}
        </p>

        {/* Contenido */}
        <div className="p-3 flex flex-col flex-grow">

            {/* Título y precio */}
            <div className="mb-3">
            <p className="text-lg font-semibold min-h-14">{car.name}</p>
            <p className="text-gray-700">S/ {car.priceDay} x día</p>
            </div>

            {/* Características */}
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
            <p className="flex items-center"><Gem className="w-4 h-4 mr-2" />{car.type}</p>
            <p className="flex items-center"><Wrench className="w-4 h-4 mr-2" />{car.transmission}</p>
            <p className="flex items-center"><User className="w-4 h-4 mr-2" />{car.people}</p>
            <p className="flex items-center"><Fuel className="w-4 h-4 mr-2" />{car.engine}</p>
            <p className="flex items-center"><Gauge className="w-4 h-4 mr-2" />{car.cv} HP</p>
            </div>

            {/* Footer botones */}
            <div className="mt-auto">
            <div className="flex justify-between gap-2 mb-3">
                <Button variant="outline" onClick={deleteCar}>
                Eliminar <Trash className="w-4 h-4 ml-2" />
                </Button>

                <ButtonEditCar carData={car} />
            </div>

            {/* Botón Publicar / No Publicar */}
            {car.isPublish ? (
                <Button className="w-full" variant="outline" onClick={() => handlerPublishCar(false)}>
                Despublicar <Upload className="w-4 h-4 ml-2" />
                </Button>
            ) : (
                <Button className="w-full" onClick={() => handlerPublishCar(true)}>
                Publicar <Upload className="w-4 h-4 ml-2" />
                </Button>
            )}  
            </div>

        </div>
        </div>
    );
}
