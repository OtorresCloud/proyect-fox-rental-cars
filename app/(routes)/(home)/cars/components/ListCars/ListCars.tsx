"use client"
import { Button } from "@/components/ui/button";
import { Car } from "@prisma/client";
import Image from "next/image";
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench , Heart} from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { useLovedCars } from "@/hooks/use-loved-cars";
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";
import { ListCarsProps } from "./ListCars.types";
import { SkeletonCars } from "@/components/Shared/SkeletonCars";

export  function ListCars(props :ListCarsProps) {
    const {cars} = props
        const {userId} =  useAuth()
        const {addLovedItem, lovedItems, removeLovedItem} = useLovedCars()

        if(!cars) {
            return <SkeletonCars />
        }
    return (<>
    {cars.length == 0 && (
            <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-2xl">¡OPS! No contamos con esas caracteristicas de vehiculo </h1>
            <h2 className="text 2x1"> Solo elimina el filtro </h2>
            </div>
    )}
    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {cars.map((car: Car) => {
            const {
            priceDay,
            photo,
            name,
            type,
            transmission,
            people, 
            engine,
            id,
            cv,
            } = car;

            const likedCar = lovedItems.some((item) => item.id === car.id);
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
                                    <Gauge className="h-3 w-3 sm:h-4 sm:w-4 mr-2 shrink-0" strokeWidth={1} /> 
                                    {cv} HP
                                    </p>

                                    {userId ? (
                                        <div className="flex items-center justify-center gap-x-3">
                                            <ModalAddReservation car={car} />
                                            <Heart className={`cursor-pointer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 hover:text-red-500 transition ${likedCar ? "fill-red-500 text-red-500" : ""}`}
                                            onClick={likedCar?() => removeLovedItem(car.id): () =>addLovedItem(car)} />
                                        </div>

                                    ) : (
                                        <div className="w-full mt-2 text-center">
                                            <Link href="/sign-in">
                                            <Button variant="outline" className="w-full">
                                                Inicia sesión para reservar

                                            </Button>
                                            </Link>



                                        </div>

                                    )}
                                </div>
                                </div>
                            </div>
                            );

        })}
    </div>
</>
)}
