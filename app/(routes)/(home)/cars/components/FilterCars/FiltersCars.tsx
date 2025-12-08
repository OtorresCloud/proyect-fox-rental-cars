import * as React from "react"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from"@/components/ui/select"
import { FiltersCarsProps } from "./FiltersCars.types"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"


export function FiltersCars(props: FiltersCarsProps) {
    const { clearFilters, setFilters, filters } = props;

    const handleFilter = (filter: string, value: string) => {
        setFilters(filter, value);
    };

    return (
        <div
        className="
            mt-5 mb-8
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-4
            items-center
        "
        >
        <Select onValueChange={(value) => handleFilter("type", value)} value={filters.type}>
            <SelectTrigger className="w-full">
            <SelectValue placeholder="Tipo de vehículo" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectLabel>Tipo de vehículo</SelectLabel>
                <SelectItem value="sedan">Sedán</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="coupe">Coupé</SelectItem>
                <SelectItem value="familiar">Familiar</SelectItem>
                <SelectItem value="luxo">De Luxe</SelectItem>
            </SelectGroup>
            </SelectContent>
        </Select>

        <Select onValueChange={(value) => handleFilter("transmission", value)} value={filters.transmission}>
            <SelectTrigger className="w-full">
            <SelectValue placeholder="Caja de cambios" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectItem value="manual">Manual</SelectItem>
                <SelectItem value="automatic">Automático</SelectItem>
            </SelectGroup>
            </SelectContent>
        </Select>

        <Select onValueChange={(value) => handleFilter("engine", value)} value={filters.engine}>
            <SelectTrigger className="w-full">
            <SelectValue placeholder="Tipo de motor" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectItem value="gasoil">Gasolina</SelectItem>
                <SelectItem value="diesel">Diesel</SelectItem>
                <SelectItem value="electric">Eléctrico</SelectItem>
                <SelectItem value="hybrid">Híbrido</SelectItem>
            </SelectGroup>
            </SelectContent>
        </Select>

        <Select onValueChange={(value) => handleFilter("people", value)} value={filters.people}>
            <SelectTrigger className="w-full">
            <SelectValue placeholder="Capacidad de asientos" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="7">7</SelectItem>
            </SelectGroup>
            </SelectContent>
        </Select>

        <Button onClick={clearFilters} className="w-full flex justify-center">
            Limpiar <Trash className="w-4 h-4 ml-2" />
        </Button>
        </div>
    );
}