import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Seasonal from "@/components/sections/Seasonal";
import BouquetBuilder from "@/components/sections/BouquetBuilder";
import Delivery from "@/components/sections/Delivery";
import Weddings from "@/components/sections/Weddings";
import CareTips from "@/components/sections/CareTips";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Seasonal />
        <BouquetBuilder />
        <Delivery />
        <Weddings />
        <CareTips />
      </main>
      <Footer />
    </>
  );
}