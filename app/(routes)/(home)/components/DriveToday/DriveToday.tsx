import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function DriveToday() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
        
        <div className="bg-[url('/images/quizas.PNG')] bg-center bg-no-repeat bg-cover rounded-xl p-8 md:p-16 lg:p-20">
            <div className="lg:flex gap-x-6 items-center">
            
            <div>
                <h3 className="text-3xl md:text-4xl text-white font-bold">
                Conduce el auto de tus sueños hoy
                </h3>

                <p className="text-white text-base md:text-lg my-4 max-w-lg">
                Explora el mundo de los coches premium
                </p>

                <Link href="/cars">
                <Button variant="outline" size="lg">
                    Reserva aquí
                </Button>
                </Link>
            </div>

            </div>
        </div>

        </div>
    );
}
