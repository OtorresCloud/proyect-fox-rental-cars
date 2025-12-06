"use client"
import { Car } from "@prisma/client";
import { ListCarsProps } from "./ListCars.types";
import Image from "next/image";
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench , Heart} from "lucide-react";
//import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
//import { useLovedCars } from "@/hooks/use-loved-cars";
//import { add } from "date-fns";


export default function ListCars(props:ListCarsProps) {
    const { cars } = props;
    {/*const {addLovedItem, lovedItems, removeLovedItem} = useLovedCars()*/}


   console.log(lovedItems);
    return<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
                    className="rounded-xl shadow-md hover:shadow-lg bg-white overflow-hidden flex flex-col"
                >
                    {/* Imagen alineada */}
                    <div className="h-40 sm:h-48 w-full flex items-center justify-center bg-gray-50">
                    <Image
                        src={photo}
                        alt={name}
                        width={400}
                        height={400}
                        className="object-contain h-full"
                    />
                    </div>

                    {/* Contenido */}
                    <div className="p-3 sm:p-4 flex flex-col flex-1">
                    {/* Título y precio */}
                    <div className="mb-3">
                        <p className="text-lg sm:text-xl h-12 font-semibold line-clamp-2">{name}</p>
                        <p className="text-gray-600 text-sm sm:text-base">S/ {priceDay} /día</p>
                    </div>

                    {/* Características */}
                    <div className="space-y-1 text-xs sm:text-sm flex-1">
                        <p className="flex items-center">
                        <Gem className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" strokeWidth={1} /> 
                        <span className="truncate">{type}</span>
                        </p>
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
                       {/* <ModalAddReservation car={car} /> */}
                        <Heart 
                        className={`cursor-pointer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 hover:text-red-500 transition ${likedCar ? "fill-red-500 text-red-500" : ""}`}
                        onClick={() => addLovedItem(car)} 
                        />
                    </div>
                    </div>
                </div>
                );
            })}
</div>

    
}
 