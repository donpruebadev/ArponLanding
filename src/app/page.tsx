import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Monsters } from "@/components/sections/Monsters";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Process />
        <Monsters />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
