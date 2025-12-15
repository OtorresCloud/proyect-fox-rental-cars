import { NavBar } from "@/components/Shared/NavBar/NavBar";
import { FirtsBlock } from "./components/FirstBlock";
import { SliderBrands } from "./components/SliderBrands";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";
import { Footer } from "./components/Footer/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <NavBar />
      <main className="pt-28 sm:pt-32">
        <div id="inicio">
          <FirtsBlock />
        </div>
        <SliderBrands />
        <div id="features">
          <Features />
        </div>
        <div id="fleet">
          <OurFleet />
        </div>
        <div id="contact">
          <DriveToday />
        </div>
        <Footer />
      </main>
    </div>
  );
}