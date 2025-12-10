"use client"
import {Car} from "@prisma/client"
import { useEffect, useState } from "react";
import { FiltersAndListCarsProps } from "./FiltersAndListCars.types";
import { ListCars } from "../ListCars";
import SearchCars from "../SearchCars/SearchCars";
import { FiltersCars } from "../FilterCars";

export function FiltersAndListCars(props: FiltersAndListCarsProps) {
    const { cars } = props;

    const [search, setSearch] = useState("");
    const [filteredCars, setFilteredCars] = useState<Car[]>([]);

    const [filters, setFilters] = useState({
        type: "",
        transmission: "",
        engine: "",
        people: "",
        priceRange: [0, 1000] as number[],  // ⭐ nuevo
    });

    useEffect(() => {
        let filtered = cars;

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

        // ⭐ Filtro de precio
        const [min, max] = filters.priceRange;

        filtered = filtered.filter((car) => {
          const price = Number(car.priceDay);  // Convertir STRING -> NUMBER
            return price >= min && price <= max;
        });
        
        setFilteredCars(filtered);
    }, [cars, filters, search]);

    const handleFilterChange = (
        filterName: string,
        filterValue: string | number[]
    ) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: filterValue
        }));
    };

    const clearFilters = () => {
        setFilters({
            type: "",
            transmission: "",
            engine: "",
            people: "",
            priceRange: [0, 1000], // ⭐ reset price
        });
        setSearch("");
    };

    return (
        <div className="space-y-6">
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