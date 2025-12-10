"use client";

import { Slider } from "@/components/ui/slider";
import { PriceSliderProps } from "./PriceSlider.types";

export function PriceSlider({ min = 0, max = 1000, value, onChange }: PriceSliderProps) {
    const handleChange = (val: number[]) => {
        onChange?.(val);
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between">
                <p className="font-medium text-muted-foreground">Precio por día</p>
                <p className="font-semibold">S/ {value[0]} - S/ {value[1]}</p>
            </div>

            <Slider
                value={value}               
                min={min}
                max={max}
                step={10}
                onValueChange={handleChange}
                className="w-full"
            />

            <div className="flex justify-between text-sm text-muted-foreground">
                <span>Min: S/ {min}</span>
                <span>Máx: S/ {max}</span>
            </div>
        </div>
    );
}