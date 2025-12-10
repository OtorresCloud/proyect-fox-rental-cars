"use client"
import {Car} from "@prisma/client"
import { useEffect, useState } from "react";
import { FiltersAndListCarsProps } from "./FiltersAndListCars.types";
import { ListCars } from "../ListCars";
import { FiltersCars } from "../FilterCars";
import SearchCars from "../SearchCars/SearchCars";

export function FiltersAndListCars(props: FiltersAndListCarsProps) {
    const { cars } = props

    const [search, setSearch] = useState("")
    const [filteredCars, setFilteredCars] = useState<Car[]>([]);
    const [filters, setFilters] = useState({
        type: "",
        transmission: "",
        engine: "",
        people: "",
    });

    useEffect(() => {
        let filtered = cars;

        // 🔎 Search
        if (search) {
            filtered = filtered.filter((car) =>
                car.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (filters.type) {
            filtered = filtered.filter((car) =>
                car.type.toLowerCase().includes(filters.type.toLowerCase())
            );
        }

        if (filters.transmission) {
            filtered = filtered.filter((car) =>
                car.transmission.toLowerCase().includes(filters.transmission.toLowerCase())
            );
        }
        
        if (filters.engine) {
            filtered = filtered.filter((car) =>
                car.engine.toLowerCase().includes(filters.engine.toLowerCase())
            );
        }
        
        if (filters.people) {
            filtered = filtered.filter((car) =>
                car.people.toLowerCase().includes(filters.people.toLowerCase())
            );
        }

        setFilteredCars(filtered);
    }, [cars, filters, search]); // 👈 added 'search'

    const handleFilterChange = (filterName: string, filterValue: string) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: filterValue
        }))
    }

    const clearFilters = () => {
        setFilters({
            type: "",
            transmission: "",
            engine: "",
            people: "",
        });
        setSearch("") // 👈 limpiar el search también
    }

        return (
        <div className="space-y-6">
            
            {/* CENTRAR BARRA DE BÚSQUEDA */}
            <div className="w-full flex justify-center">
            <SearchCars search={search} setSearch={setSearch} />
            </div>

            <FiltersCars
            setFilters={handleFilterChange}
            filters={filters}
            clearFilters={clearFilters}
            />

            <ListCars cars={filteredCars} />
        </div>
);

}
