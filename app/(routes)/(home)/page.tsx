import { NavBar } from "@/components/Shared/NavBar/NavBar";
import { FirtsBlock } from "./components/FirstBlock";
import { SliderBrands } from "./components/SliderBrands";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";



export default function Home() {
    return(
      <div>
      <NavBar/>
      <FirtsBlock/>
      <SliderBrands/>
      <Features/>
      <OurFleet/>
      <DriveToday/>
      </div>

  );
}
