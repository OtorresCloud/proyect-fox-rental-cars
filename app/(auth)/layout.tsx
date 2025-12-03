import React from "react";
import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-black text-white">
        
        {/* LEFT SIDE → Branding */}
        <div className="hidden lg:flex flex-col items-center justify-center relative bg-zinc-900">
            <div className="absolute inset-0 bg-linear-to-b from-zinc-800/40 to-black/80"></div>

            <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={120}
            className="relative z-10 drop-shadow-xl brightness-0 invert"
            />

            <h1 className="relative z-10 mt-4 text-3xl font-bold tracking-wide">
            Fox Car Rental
            </h1>

            <p className="relative z-10 mt-2 text-zinc-400">
            Conduce con confianza.
            </p>
        </div>

        {/* RIGHT SIDE → Sign in / Sign up */}
        <div className="flex items-center justify-center p-6">
            <div className="w-full max-w-md">
            {children}
            </div>
        </div>
        </div>
    );
}