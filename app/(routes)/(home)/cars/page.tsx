import {NavBar} from "@/components/Shared/NavBar";
import {db} from "@/lib/db";
import { FiltersAndListCars } from "./components/FiltersAndListCars";
import { HeaderCars } from "./components/HeaderCars";

export default async function pageCars (){
    const cars = await db.car.findMany({
        where : {
            isPublish: true,

        },
        orderBy : {
            createAd: "desc"
        },
    }); 
    return (
        <div>
            <NavBar/>
            <div className="p-6 mx-auto max-w-7xl">
                <HeaderCars/>
            </div>
            <div>
                <FiltersAndListCars cars={cars}/>
            </div>
        </div>
    )
}