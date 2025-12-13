    "use client";

    import { useLovedCars } from "@/hooks/use-loved-cars";
    import { Car } from "@prisma/client";
    import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
    import Image from "next/image";
    import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
    import { Button } from "@/components/ui/button";
    import Link from "next/link";

    export function ListLovedCars() {
    const { lovedItems, removeLovedItem } = useLovedCars();

    return (
        <>
        {lovedItems.length === 0 ? (
            <div className="p-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h1 className="text-2xl">Aún no tienes coches favoritos</h1>

                <Link href="/">
                <Button>Volver a ver los productos</Button>
                </Link>
            </div>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {lovedItems.map((car: Car) => {
                const {
                priceDay,
                photo,
                name,
                type,
                transmission,
                people,
                id,
                engine,
                cv,
                } = car;

                return (
                <div
                    key={id}
                    className="
                    rounded-xl shadow-md hover:shadow-lg
                    dark:shadow-gray-800/50 dark:hover:shadow-gray-700/50
                    bg-white dark:bg-gray-900
                    overflow-hidden flex flex-col
                    border border-gray-200 dark:border-gray-800
                    transition-all
                    "
                >
                    {/* Imagen + overlays */}
                    <div className="relative h-40 sm:h-48 w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-850 transition-colors overflow-hidden">
                    <Image
                        src={photo}
                        alt={name}
                        width={400}
                        height={400}
                        className="object-contain h-full dark:brightness-90 transition-all duration-300"
                    />

                    {/* Badge tipo */}
                    <div className="absolute top-3 left-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
                        <p className="flex items-center text-xs font-medium text-gray-700 dark:text-gray-300">
                        <Gem className="h-3 w-3 mr-1.5" strokeWidth={2} />
                        {type}
                        </p>
                    </div>

                    {/* Heart */}
                    <div className="absolute top-3 right-3">
                        <div
                        className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700 cursor-pointer hover:scale-110 transition-transform duration-200"
                        onClick={() => removeLovedItem(car.id)}
                        aria-label="Quitar de favoritos"
                        >
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-red-500 text-red-500" />
                        </div>
                    </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-3 sm:p-4 flex flex-col flex-1">
                    {/* Título y precio */}
                    <div className="mb-3">
                        <p className="text-lg sm:text-xl h-12 font-semibold line-clamp-2 text-gray-900 dark:text-white transition-colors">
                        {name}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base transition-colors">
                        S/ {priceDay} /día
                        </p>
                    </div>

                    {/* Características (sin type porque ya va en el badge) */}
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

                    {/* Botón */}
                    <div className="mt-2 flex justify-between items-center gap-2">
                        <ModalAddReservation car={car} />
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        )}
        </>
    );
    }
