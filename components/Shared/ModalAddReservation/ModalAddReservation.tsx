import { Button } from "@/components/ui/button";
import { ModalAddReservationProps } from "./ModalAddReservation.types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Car } from "@prisma/client";
import { Calendar } from "lucide-react";
import { CalendarSelector } from "./CalendarSelector";
import { useState } from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { toast } from "sonner";
import axios from "axios";

export  function ModalAddReservation(props: ModalAddReservationProps) {
    const { car } = props;
    const [dateSelected, setdateSelected] = useState<{
        from: Date | undefined,
        to: Date | undefined,
    }>({
        from: new Date(),
        to: addDays(new Date(),5)

    })
    interface CheckoutResponse {
    url: string;
}

const onReserveCar = async (car: Car, dateSelected: DateRange) => {
    const response = await axios.post<CheckoutResponse>("/api/checkout", {
        carId: car.id,
        priceDay: car.priceDay,
        startDate: dateSelected.from,
        endDate: dateSelected.to,
        carName: car.name,
    });

    window.location.href = response.data.url; 

    toast.success("Car reserved ✌️",);
};

    return (
        <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button variant="outline" className="w-40" >Reservar Vehiculo</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Selecciona las fechas en las que quieres alquilar el coche</AlertDialogTitle>
            <AlertDialogDescription>
                <CalendarSelector setDateSelected={setdateSelected} carPriceDay={car.priceDay}/>
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction  onClick={()=> onReserveCar(car, dateSelected)}>Reservar Vehiculo</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    )
}
