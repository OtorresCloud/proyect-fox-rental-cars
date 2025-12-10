export interface PriceSliderProps {
    min?: number;
    max?: number;
    value: number[];   
    onChange?: (value: number[]) => void;
}