"use client"
import { Car } from "@prisma/client";
import { ListCarsProps } from "./ListCars.types";
import Image from "next/image";
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench , Heart, Download } from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { useLovedCars } from "@/hooks/use-loved-cars";


export default function ListCars(props:ListCarsProps) {
    const { cars } = props;
    const {addLovedItem, lovedItems, removeLovedItem} = useLovedCars()

    console.log(lovedItems);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {cars.map((car) => {
                const {
                    priceDay,
                    photo,
                    cv,
                    engine,
                    id,
                    people,
                    name,
                    transmission,
                    type,


                } = car;
                const likedCar = lovedItems.some((item) => item.id == car.id);

                return (
                    <div
                        key={id}
                        className="rounded-xl
                                bg-white dark:bg-black
                                        border border-gray-200 dark:border-white/10
                                overflow-hidden flex flex-col
                                                    shadow-none
                                transition-colors"

                    >
                        {/* Imagen con badge de tipo */}
                        <div className="relative h-40 sm:h-48 w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-850 transition-colors overflow-hidden">
                            <Image
                                src={photo}
                                alt={name}
                                width={400}
                                height={400}
                                className="object-contain h-full dark:brightness-90 transition-all duration-300 group-hover:scale-105"
                            />
                            {/* Badge de tipo de vehículo */}
                            <div className="absolute top-3 left-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
                                <p className="flex items-center text-xs font-medium text-gray-700 dark:text-gray-300">
                                    <Gem className="h-3 w-3 mr-1.5" strokeWidth={2} /> 
                                    {type}
                                </p>
                            </div>
                            
                            {/* Heart en la esquina superior derecha */}
                            <div className="absolute top-3 right-3">
                                <div 
                                    className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700 cursor-pointer hover:scale-110 transition-transform duration-200"
                                    onClick={likedCar ? () => removeLovedItem(car.id) : () => addLovedItem(car)}
                                >
                                    <Heart 
                                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${likedCar ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-400 hover:text-red-500"}`}
                                    />
                                </div>
                            </div>
                        </div>

                        

                        {/* Contenido */}
                        <div className="p-3 sm:p-4 flex flex-col flex-1 bg-white dark:bg-black transition-colors">

                            {/* Título y precio */}
                            <div className="mb-3">
                                <p className="text-lg sm:text-xl h-12 font-semibold line-clamp-2 text-gray-900 dark:text-white transition-colors">
                                    {name}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base transition-colors">
                                    S/ {priceDay} /día
                                </p>
                            </div>

                            {/* Características */}
                            <div className="space-y-1 text-xs sm:text-sm flex-1 text-gray-700 dark:text-gray-300 transition-colors">
                                <p className="flex items-center">
                                    <Wrench className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" strokeWidth={1} /> 
                                    <span className="truncate">{transmission}</span>
                                </p>
                                <p className="flex items-center">
                                    <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" strokeWidth={1} /> 
                                    {people}
                                </p>
                                <p className="flex items-center">
                                    <Fuel className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" strokeWidth={1} /> 
                                    <span className="truncate">{engine}</span>
                                </p>
                                <p className="flex items-center">
                                    <Gauge className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" strokeWidth={1} /> 
                                    {cv} HP
                                </p>
                            </div>
                                    
                            {/* Botones */}
                            <div className="mt-1 flex justify-between items-center gap-2">
                                <ModalAddReservation car={car} />
                                {car.techSheetPdf && (
                                    <a
                                        href={car.techSheetPdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition -ml-2"
                                        title="Descargar ficha técnica"
                                    >
                                        <Download className="w-5 h-5" > </Download> 
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}