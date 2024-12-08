import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Recommend from "./components/Recommend";
import Foot from "./components/Foot";
import PickupDropoff from "./components/Pickup";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <PickupDropoff/>
    <Popular/>
    <Recommend/>
    <Foot/>
  </div>
  );
}
