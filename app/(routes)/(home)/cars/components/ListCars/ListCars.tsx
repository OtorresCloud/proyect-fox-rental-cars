"use client";

import { Button } from "@/components/ui/button";
import { Car } from "@prisma/client";
import Image from "next/image";
import { Fuel, Gauge, Gem, Users, Wrench, Heart, Download } from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { useLovedCars } from "@/hooks/use-loved-cars";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { ListCarsProps } from "./ListCars.types";
import { SkeletonCars } from "@/components/Shared/SkeletonCars";

export function ListCars({ cars }: ListCarsProps) {
const { userId } = useAuth();
const { addLovedItem, lovedItems, removeLovedItem } = useLovedCars();

if (!cars) return <SkeletonCars />;

if (cars.length === 0) {
    return (
    <div className="flex flex-col items-center justify-center gap-4 text-center py-20">
        <h1 className="text-2xl text-gray-900 dark:text-white">
        ¡OPS! No contamos con esas características de vehículo
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400">
        Solo elimina el filtro
        </h2>
    </div>
    );
}

return (
    <section className="w-full bg-white dark:bg-black transition-colors">
    <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {cars.map((car: Car) => {
            const {
            id,
            name,
            photo,
            priceDay,
            type,
            transmission,
            people,
            engine,
            cv,
            } = car;

            const likedCar = lovedItems.some((item) => item.id === id);

            return (
            <div
                key={id}
                className="
                w-full max-w-[360px]
                rounded-2xl overflow-hidden flex flex-col
                bg-white dark:bg-gradient-to-b dark:from-[#0b0b0b] dark:to-black
                border border-gray-200 dark:border-white/10
                shadow-md hover:shadow-xl
                transition-all duration-300
                "
            >
                {/* IMAGEN + FONDO */}
                <div className="relative h-44 sm:h-52 overflow-hidden bg-gray-100 dark:bg-[#0b1220]">
                {/* degradado suave */}
                <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-white/10 dark:via-white/5 dark:to-transparent" />

                {/* spotlight */}
                <div className="absolute -top-10 left-1/2 h-52 w-72 -translate-x-1/2 rounded-full bg-white/20 blur-3xl hidden dark:block" />

                {/* piso */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent hidden dark:block" />

                <Image
                    src={photo}
                    alt={name}
                    width={600}
                    height={600}
                    className="relative z-10 object-contain h-full w-full"
                />

                {/* BADGE */}
                <div className="absolute top-3 left-3 z-20 bg-white/90 dark:bg-black/60 backdrop-blur px-3 py-1 rounded-full border border-gray-200 dark:border-white/10">
                    <p className="flex items-center text-xs font-medium text-gray-800 dark:text-white/90">
                    <Gem className="w-3 h-3 mr-1.5" />
                    {type}
                    </p>
                </div>

                {/* FAVORITO */}
                {userId && (
                    <button
                    onClick={() =>
                        likedCar
                        ? removeLovedItem(id)
                        : addLovedItem(car)
                    }
                    className="absolute top-3 right-3 z-20 bg-white/90 dark:bg-black/60 backdrop-blur p-2 rounded-full border border-gray-200 dark:border-white/10 hover:scale-110 transition"
                    >
                    <Heart
                        className={`w-4 h-4 ${
                        likedCar
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600 dark:text-white/70 hover:text-red-500"
                        }`}
                    />
                    </button>
                    )}
                </div>

                {/* CONTENIDO */}
                <div className="p-4 flex flex-col flex-1 text-gray-900 dark:text-white">
                <div className="mb-3">
                    <h3 className="text-lg font-semibold leading-tight line-clamp-2">
                    {name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-white/70 mt-1">
                    S/ {priceDay} / día
                    </p>
                </div>

                <div className="space-y-1 text-sm text-gray-700 dark:text-white/80 flex-1">
                    <p className="flex items-center">
                    <Wrench className="w-4 h-4 mr-2" />
                    {transmission}
                    </p>
                    <p className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {people} pasajeros
                    </p>
                    <p className="flex items-center">
                    <Fuel className="w-4 h-4 mr-2" />
                    {engine}
                    </p>
                    <p className="flex items-center">
                    <Gauge className="w-4 h-4 mr-2" />
                    {cv} HP
                    </p>
                </div>

                <div className="mt-4 flex items-center gap-2">
                    {userId ? (
                        <>
                        <div className="flex-1">
                            <ModalAddReservation car={car} />
                        </div>

                        {car.techSheetPdf && (
                            <a
                            href={car.techSheetPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded border border-gray-300 dark:border-white/10 
                                        hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                            title="Descargar ficha técnica"
                            >
                            <Download className="w-5 h-5" />
                            </a>
                        )}
                        </>
                    ) : (
                        <Link href="/sign-in" className="w-full">
                        <Button
                            variant="outline"
                            className="w-full bg-white dark:bg-white/5 border-gray-300 dark:border-white/10 
                                    text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                        >
                            Inicia sesión para reservar
                        </Button>
                        </Link>
                    )}
                    </div>
                </div>
            </div>
            );
        })}
        </div>
    </div>
    </section>
);
}
