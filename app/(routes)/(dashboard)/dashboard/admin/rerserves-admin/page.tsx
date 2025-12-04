import { db } from "@/lib/db"
import  {auth, currentUser} from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import TableReserves from "./components/TableReserves/TableReserves"
import { isAdministrator } from "@/lib/isAdministrator"

export default async function pageReserversAdmin() {
        const {userId} = await auth ()
        const user = await currentUser()

        if(!userId || !user ||!isAdministrator(userId)) {
            return redirect ("/")
        }

        const order = await db.order.findMany({
            orderBy:{
                createAd:"desc"
            },
        });
        
    return (
        <div>
            <h1 className="text-bl mb-4"> Todas las Reservas</h1>
            <TableReserves orders={order}/>
        </div>
    )
}

