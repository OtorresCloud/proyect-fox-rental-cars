
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { TableReservesProps } from "./TableReserves.types"
import { formatPrice } from "@/lib/formatPrice";
export default function TableReserves(props: TableReservesProps) {
    const{orders} = props;
    return (
            <Table>
            <TableCaption>Lista de tus adquisicones.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="text-center">Coche</TableHead>
                <TableHead className="text-center">Fecha de inicio</TableHead>
                <TableHead className="text-center">Fecha de finalización</TableHead>
                <TableHead className="text-center">Estado</TableHead>
                <TableHead className="text-center">Monto</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => (
                    <TableRow key = {order.id}>
                        <TableCell className="font-medium">{order.carName}</TableCell>
                        <TableCell className="font-medium">{new Date(order.orderDate).toLocaleDateString()}</TableCell>
                        <TableCell className="font-medium">{new Date(order.orderEndDate).toLocaleDateString()}</TableCell>
                        <TableCell><div className="p-2 text-white bg-green-500 rounded-lg w-fit">{order.status}</div></TableCell>
                        <TableCell>{formatPrice(Number(order.totalAmount))}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
    )
}
