"use client"
import { useLovedCars } from "@/hooks/use-loved-cars"
import { Car } from "@prisma/client"
import { Fuel, Gauge, Gem, Heart, Trash, Upload, User, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ListLovedCars() {
    const {lovedItems, removeLovedItem} = useLovedCars()
    return (
        <>
        {lovedItems.length == 0 ? (
                    <div className="p-6 mx-auto max-w-7xl">
                        <div className="flex flex-col items-center justify-center gap-4 text-center">
                        <h1 className="text-2xl">Aún no tienes coches favoritos </h1>
            
                        <Link href="/">
                            <Button>Volver a ver los productos</Button>
                        </Link>
                        </div>
                    </div>
        ): (
            <div className=" grid grid-cols-2 gap-6 lg:grd-cols-4">
                {lovedItems.map((car: Car)=>{
                    const{priceDay, photo, name, type, transmission,people,id,engine,cv} = car
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
                        <ModalAddReservation car={car} />
                        <Heart 
                        className={`cursor-pointer  w-5 h-5 sm:w-6 sm:h-6 fill-red-500 text-red-500 `}
                        onClick={() => removeLovedItem(car.id)} 
                        />
                    </div>
                    </div>
                </div>
                    )
                })}

            </div>
        )}
        </>
    )
}

