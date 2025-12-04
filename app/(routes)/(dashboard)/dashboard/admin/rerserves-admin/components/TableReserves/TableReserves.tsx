import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { TableReservesProps } from "./TableReserves.types";
import { formatPrice } from "@/lib/formatPrice";
import { format } from "path";

export default function TableReserves(props: TableReservesProps) {
    const {orders} =props
    const totalAmount = orders.reduce((acc, booking) => {
        return acc + parseFloat (booking.totalAmount)
    },0)
    return (
                    <Table>
            <TableCaption>Lista de todas las Reservas
            </TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead>Fecha de la orden </TableHead>
                <TableHead>Cliente ID</TableHead>
                <TableHead className="text-center">Coche</TableHead>
                <TableHead className="text-center" >Fecha de inicio</TableHead>
                <TableHead className="text-center">Fecha de finalización</TableHead>
                <TableHead className="text-right">Monto</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => (
                    <TableRow key = {order.id}>
                        <TableCell className="">{new Date(order.createAd).toLocaleDateString("es-ES",{
                            day: "2-digit",
                            month :"2-digit",
                            year: "numeric"
                        })}</TableCell>
                        <TableCell className="max-w-[100px] truncate">{order.userId}</TableCell>
                        <TableCell className=" text-center truncate">{order.carName}</TableCell>
                        <TableCell className="text-center">{new Date(order.orderDate).toLocaleDateString("es-ES",{
                            day: "2-digit",
                            month :"2-digit",
                            year: "numeric"
                        })}</TableCell>
                        <TableCell className="text-center">{new Date(order.orderEndDate).toLocaleDateString("es-ES",{
                            day: "2-digit",
                            month :"2-digit",
                            year: "numeric"
                        })}</TableCell>
                        <TableCell className="text-right">{formatPrice(Number(order.totalAmount))}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={5}>Total</TableCell>
                    <TableCell className="text-right"> {formatPrice(totalAmount)}</TableCell>

                </TableRow>
            </TableFooter>
            </Table>
    )
}
