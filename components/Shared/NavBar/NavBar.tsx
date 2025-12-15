"use client"
import { ThemeToggle } from "@/components/providers/theme-toogle";
import { Button } from "@/components/ui/button";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { useAuth, UserButton } from "@clerk/nextjs"
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export function NavBar() {
    const {userId} = useAuth();
    const {lovedItems} = useLovedCars()

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full py-4 px-4 sm:px-6 lg:px-8 bg-white/85 dark:bg-black/70 backdrop-blur transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-x-2 shrink-0 order-1 sm:order-none group">
                        <Image 
                            src="/logo.svg" 
                            alt="logo" 
                            width={80} 
                            height={80} 
                            className="sm:translate-y-[-3px] w-8 h-8 sm:w-10 sm:h-10 dark:invert transition-all"
                        />
                        <span className="text-base sm:text-lg md:text-xl font-bold whitespace-nowrap text-gray-900 dark:text-white transition-colors">
                            Fox Rental Car
                        </span>
                    </Link>
                
                    {/* User Actions - Right side */}
                    <div className="flex items-center gap-3 sm:gap-4 order-2 sm:order-none">
                        <Link 
                            href="/cars" 
                            className="hover:text-gray-600 dark:hover:text-gray-300 transition whitespace-nowrap text-xs sm:text-sm md:text-base px-2 py-1 text-gray-900 dark:text-gray-100"
                        >
                            Autos Disponibles
                        </Link>
                        <Link 
                            href="/dashboard" 
                            className="hover:text-gray-600 dark:hover:text-gray-300 transition whitespace-nowrap text-xs sm:text-sm md:text-base px-2 py-1 text-gray-900 dark:text-gray-100"
                        >
                            Mi Garage
                        </Link>
                        
                        {/* ⭐ BOTÓN DE TEMA AQUÍ ⭐ */}
                        <ThemeToggle />
                        
                        {userId ? (
                            <>
                                <Link href="/loved-cars" className="flex items-center">
                                    <Heart 
                                        strokeWidth={1} 
                                        className={`cursor-pointer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 hover:text-red-500 transition ${lovedItems.length > 0  && "fill-red-500 text-red-500"} text-gray-900 dark:text-gray-100`}
                                    />
                                </Link>
                                <div className="scale-75 sm:scale-90 md:scale-100">
                                    <UserButton />
                                </div>
                            </>
                        ) : (
                            <Link href="/sign-in">
                                <Button className="text-xs sm:text-sm md:text-base px-3 py-1 h-8 sm:h-9 md:h-10 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                                    <span className="hidden xs:inline">Iniciar sesión</span>
                                    <User className="xs:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    ) 
}
