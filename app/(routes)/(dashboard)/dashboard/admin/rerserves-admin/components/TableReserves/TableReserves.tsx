    import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
    } from "@/components/ui/table";

    import { TableReservesProps } from "./TableReserves.types";
    import { formatPrice } from "@/lib/formatPrice";

    export default function TableReserves(props: TableReservesProps) {
    const { orders } = props;

    const totalAmount = orders.reduce((acc, booking) => {
        return acc + Number(booking.totalAmount);
    }, 0);

    return (
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <Table>
            <TableCaption className="text-gray-600 dark:text-gray-400">
            Lista de todas las Reservas
            </TableCaption>

            <TableHeader>
            <TableRow className="border-b border-gray-200 dark:border-gray-800">
                <TableHead className="text-gray-700 dark:text-gray-300">
                Fecha de la orden
                </TableHead>
                <TableHead className="text-gray-700 dark:text-gray-300">
                Cliente ID
                </TableHead>
                <TableHead className="text-center text-gray-700 dark:text-gray-300">
                Coche
                </TableHead>
                <TableHead className="text-center text-gray-700 dark:text-gray-300">
                Fecha de inicio
                </TableHead>
                <TableHead className="text-center text-gray-700 dark:text-gray-300">
                Fecha de finalización
                </TableHead>
                <TableHead className="text-right text-gray-700 dark:text-gray-300">
                Monto
                </TableHead>
            </TableRow>
            </TableHeader>

            <TableBody>
            {orders.map((order) => (
                <TableRow
                key={order.id}
                className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                <TableCell className="text-gray-800 dark:text-gray-200">
                    {new Date(order.createAd).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    })}
                </TableCell>

                <TableCell className="max-w-[100px] truncate text-gray-800 dark:text-gray-200">
                    {order.userId}
                </TableCell>

                <TableCell className="text-center truncate text-gray-800 dark:text-gray-200">
                    {order.carName}
                </TableCell>

                <TableCell className="text-center text-gray-800 dark:text-gray-200">
                    {new Date(order.orderDate).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    })}
                </TableCell>

                <TableCell className="text-center text-gray-800 dark:text-gray-200">
                    {new Date(order.orderEndDate).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    })}
                </TableCell>

                <TableCell className="text-right font-medium text-gray-900 dark:text-white">
                    {formatPrice(Number(order.totalAmount))}
                </TableCell>
                </TableRow>
            ))}
            </TableBody>

            <TableFooter>
            <TableRow className="bg-gray-50 dark:bg-gray-800/60">
                <TableCell
                colSpan={5}
                className="font-semibold text-gray-900 dark:text-white"
                >
                Total
                </TableCell>
                <TableCell className="text-right font-semibold text-gray-900 dark:text-white">
                {formatPrice(totalAmount)}
                </TableCell>
            </TableRow>
            </TableFooter>
        </Table>
        </div>
    );
    }
