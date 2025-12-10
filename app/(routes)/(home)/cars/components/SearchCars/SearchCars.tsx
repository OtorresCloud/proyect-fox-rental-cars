
"use client";

import { Input } from "@/components/ui/input";
import { SearchCarsProps } from "./SearchCars.types";
import { Search } from "lucide-react";

export default function SearchCars({ search, setSearch }: SearchCarsProps) {
    return (
        <div className="relative w-full max-w-md">
        {/* Ícono a la izquierda */}
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />

        <Input
            placeholder="Buscar vehículo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-12 text-base"
        />
        </div>
    );
}

