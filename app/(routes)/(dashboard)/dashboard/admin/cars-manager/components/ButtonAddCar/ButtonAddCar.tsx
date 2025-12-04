"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import FormAddCar from "../FormAddCar/FormAddCar"


export function ButtonAddCar() {
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setOpenDialog(true)}>
                    Agregar Nuevo Coche
                    <PlusCircle className="ml-2" />
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    {/* OBLIGATORIO */}
                    <DialogTitle>Agregar nuevo coche</DialogTitle>

                    {/* OPCIONAL */}
                    <DialogDescription>
                        Completa los datos del vehículo.
                    </DialogDescription>
                </DialogHeader>

                {/* EL FORMULARIO DEBE IR FUERA DEL HEADER */}
                <FormAddCar setOpenDialog={setOpenDialog} />
            </DialogContent>
        </Dialog>
    );
}
