export type FilterKey =
  | "type"
  | "transmission"
  | "engine"
  | "people"
  | "priceDayMin"
  | "priceDayMax"

export type FiltersState = {
  type: string
  transmission: string
  engine: string
  people: string
  priceDayMin: string
  priceDayMax: string
}

export type FiltersCarsProps = {
  filters: FiltersState
  setFilters: (filter: FilterKey, value: string) => void
  clearFilters: () => void
}
