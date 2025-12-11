import { NavBar } from "@/components/Shared/NavBar/NavBar";
import { FirtsBlock } from "./components/FirstBlock";
import { SliderBrands } from "./components/SliderBrands";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";
import { Footer } from "./components/Footer/Footer";


export default function Home() {
    return(
      <div>
      <NavBar/>
      <div id="inicio">
        <FirtsBlock/>
      </div>
      <SliderBrands/>
      <div id="features">
        <Features/>
      </div>
      <div id="fleet">
        <OurFleet/>
      </div>
      <div id="contact">
        <DriveToday/>
      </div>
      <Footer/>
      </div>

  );
}
