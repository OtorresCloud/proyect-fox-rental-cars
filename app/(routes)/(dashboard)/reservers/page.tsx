import { Button } from "@/components/ui/button";
import { db} from "@/lib/db"
import  { auth } from "@clerk/nextjs/server"
import Link from "next/link";
import { redirect } from "next/navigation";
import TableReserves from "./components/TableReserves/TableReserves";

export default async function pageReservers() {

    const {userId} = await auth()

    if (!userId) {
        return redirect("/")
    }

    const orders = await db.order.findMany({
        where: {
            userId: userId,
        },
        orderBy :{
            createAd:"desc"
        }
    })
    return (
        <div>
            <h1 className="mb-4 text-3xl"> Reservas </h1>
            
                    {orders.length == 0 ? (
                    <div className="p-6 mx-auto max-w-7xl">
                        <div className="flex flex-col items-center justify-center gap-4 text-center">
                        <h1 className="text-2xl">Aún no tienes Reservas realizadas </h1>
            
                        <Link href="/">
                            <Button>Volver a ver los productos</Button>
                        </Link>
                        </div>
                    </div>
            ):(
                <TableReserves orders={orders}/>
            )}
            
        </div>
    )
}
