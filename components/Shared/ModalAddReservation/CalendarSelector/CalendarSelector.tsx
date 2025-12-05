"use client"
import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarSelectorProps } from "./CalendarSelector.types";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CalendarSelector(props: CalendarSelectorProps) {
    const { setDateSelected, className, carPriceDay } = props
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date,
        to: addDays(new Date(), 5)
    })
    
    useEffect(() => {
        setDateSelected({
            from: date?.from,
            to: date?.to,
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date]);
    
    const calculateDaysBetween = (from: Date, too: Date): number => {
        const ondeDay = 24 * 60 * 60 * 1000;
        const diffInTime = too.getTime() - from.getTime()
        return Math.round(diffInTime / ondeDay);
    };
    
    const DaysBetween = date?.from && date?.to ? calculateDaysBetween(date.from, date.to) : 0;
    
    return (
        <div className={cn("grid gap-2", className)}>
            {date?.from && date?.to && (
                <>
                    <p className="mt-1 text-xs text-black">
                        Días totales: {DaysBetween}
                    </p>
                    <p className="mb-1 text-xs"> 
                        Precio Total: S/ {DaysBetween * Number(carPriceDay)} (IGV. incluido)
                    </p>
                </>
            )}
            
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant="outline"
                        className={cn(
                            "justify-start text-left font-normal text-xs h-8 px-3",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="w-3 h-3 mr-2" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} - {" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Selecciona la fecha</span>
                        )}
                    </Button>
                </PopoverTrigger>
                
                <PopoverContent
                    className="w-auto p-0 text-xs scale-90 origin-top-left"
                    align="start"
                    side="bottom"
                    sideOffset={4}
                    avoidCollisions={false}
                    >
                    <Calendar 
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                        className="text-xs"
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}