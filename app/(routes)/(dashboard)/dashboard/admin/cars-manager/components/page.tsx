import { auth } from "@clerk/nextjs/server";
import { ButtonAddCar } from "./ButtonAddCar/ButtonAddCar";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { isAdministrator } from "@/lib/isAdministrator";
import { ListCars } from "./ListCars";


export default async  function CarsManagerPage(){
    const { userId } = await auth();

    if(!userId || !isAdministrator(userId)){
        return redirect("/");

    }

    const car = await db.car.findMany({
        where: {
            userId,
        },
        orderBy:{
            createAd:"desc",
        },
        
    });

    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Gestiona tus coches</h2>
                <ButtonAddCar/>
            </div>
            <ListCars cars={car}/>
        </div>

    )

} 