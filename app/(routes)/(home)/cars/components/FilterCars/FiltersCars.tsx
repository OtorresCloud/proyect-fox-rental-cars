import * as React from "react"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from"@/components/ui/select"
import { FiltersCarsProps } from "./FiltersCars.types"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"

<<<<<<< HEAD
=======
const minValue = 0
const maxValue = 1000
>>>>>>> d8d54517a5751bd199eb56ef6226326af39d381d

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

<<<<<<< HEAD
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
=======
  const handleClearFilters = () => {
    clearFilters()
    setPriceRange([minValue, maxValue])
    handleFilter("priceDayMin", "")
    handleFilter("priceDayMax", "")
  }

  return (
    <div
      className="
        mt-5 mb-8
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-4
        items-end
        px-4
      "
    >
      <Select
        onValueChange={(value) => handleFilter("type", value)}
        value={filters.type}
      >
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
>>>>>>> d8d54517a5751bd199eb56ef6226326af39d381d

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

<<<<<<< HEAD
        <Button onClick={clearFilters} className="w-full flex justify-center">
            Limpiar <Trash className="w-4 h-4 ml-2" />
        </Button>
        </div>
    );
=======
      <Select
        onValueChange={(value) => handleFilter("engine", value)}
        value={filters.engine}
      >
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

      <Select
        onValueChange={(value) => handleFilter("people", value)}
        value={filters.people}
      >
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

      <div className="w-full mt-2 rounded-md bg-background px-3 py-2 space-y-2">
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Precio por día</span>
          <span className="text-[11px] font-semibold text-foreground">
            S/ {currentMin} - S/ {currentMax}
          </span>
        </div>

        <Slider
          min={minValue}
          max={maxValue}
          step={10}
          value={priceRange}
          className="mt-1"
          onValueChange={([min, max]) => {
            setPriceRange([min, max])
            handleFilter("priceDayMin", String(min))
            handleFilter("priceDayMax", String(max))
          }}
        />

        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>Mín: S/ {minValue}</span>
          <span>Máx: S/ {maxValue}</span>
        </div>
      </div>
      <Button
        size="sm"
        onClick={handleClearFilters}
        className="ml-auto flex justify-center sm:col-span-2 lg:col-span-5 mt-2 lg:mt-0"
      >
        Limpiar <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )
>>>>>>> d8d54517a5751bd199eb56ef6226326af39d381d
}
