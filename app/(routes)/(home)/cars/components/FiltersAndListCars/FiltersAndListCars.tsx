"use client"
import { Car } from "@prisma/client"
import { useEffect, useState } from "react"
import { FiltersAndListCarsProps } from "./FiltersAndListCars.types"
import { ListCars } from "../ListCars"
import { FiltersCars } from "../FilterCars"

export function FiltersAndListCars(props: FiltersAndListCarsProps) {
  const { cars } = props

  const [filteredCars, setFilteredCars] = useState<Car[]>([])
  const [filters, setFilters] = useState({
    type: "",
    transmission: "",
    engine: "",
    people: "",
    priceDayMin: "",
    priceDayMax: "",
  })

  useEffect(() => {
    let filtered = [...cars]

    if (filters.type) {
      filtered = filtered.filter((car) =>
        car.type.toLowerCase().includes(filters.type.toLowerCase())
      )
    }

    if (filters.transmission) {
      filtered = filtered.filter((car) =>
        car.transmission
          .toLowerCase()
          .includes(filters.transmission.toLowerCase())
      )
    }

    if (filters.engine) {
      filtered = filtered.filter((car) =>
        car.engine.toLowerCase().includes(filters.engine.toLowerCase())
      )
    }

    if (filters.people) {
      filtered = filtered.filter(
        (car) => String(car.people) === filters.people
      )
    }

    const min =
      filters.priceDayMin && !Number.isNaN(Number(filters.priceDayMin))
        ? Number(filters.priceDayMin)
        : 0

    const max =
      filters.priceDayMax && !Number.isNaN(Number(filters.priceDayMax))
        ? Number(filters.priceDayMax)
        : Infinity

    filtered = filtered.filter((car) => {
      const price = Number(car.priceDay)
      return price >= min && price <= max
    })

    setFilteredCars(filtered)
  }, [cars, filters])

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }))
  }

  const clearFilters = () => {
    setFilters({
      type: "",
      transmission: "",
      engine: "",
      people: "",
      priceDayMin: "",
      priceDayMax: "",
    })
  }

  return (
    <div>
      <FiltersCars
        setFilters={handleFilterChange}
        filters={filters}
        clearFilters={clearFilters}
      />
      <ListCars cars={filteredCars} />
    </div>
  )
}
